import { useEffect, useRef } from "react";

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    let shootingStars = [];
    let width, height, dpr;
    let rotation = 0;
    let animationId;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initStars = () => {
      const starCount = width < 768 ? 450 : 1200; // ⭐ MORE STARS

      stars = Array.from({ length: starCount }, () => {
        const x = Math.random() * width - width / 2;
        const y = Math.random() * height - height / 2;

        return {
          x,
          y,
          z: Math.random() * 0.9 + 0.1,       // depth
          size: Math.random() * 1.8 + 0.4,
          alpha: Math.random() * 0.6 + 0.4,
          baseAlpha: Math.random() * 0.6 + 0.4,
          glow: Math.random() * 14 + 6,
          twinkle: Math.random() * 0.015 + 0.004,
          twinkleDir: Math.random() > 0.5 ? 1 : -1,
        };
      });
    };

    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.4,
        len: Math.random() * 280 + 160,
        speed: Math.random() * 22 + 14,
        angle: Math.PI / 4,
        alpha: 1,
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      rotation += width < 768 ? 0.00045 : 0.0007;

      const cosR = Math.cos(rotation);
      const sinR = Math.sin(rotation);

      // ⭐ STARS
      stars.forEach((s) => {
        // Twinkle effect
        s.alpha += s.twinkle * s.twinkleDir;
        if (s.alpha > s.baseAlpha + 0.3 || s.alpha < s.baseAlpha - 0.3) {
          s.twinkleDir *= -1;
        }

        const rx = s.x * cosR - s.y * sinR;
        const ry = s.x * sinR + s.y * cosR;

        const px = cx + rx * s.z;
        const py = cy + ry * s.z;

        ctx.beginPath();
        ctx.shadowBlur = s.glow * s.z;
        ctx.shadowColor = "rgba(255,255,255,0.95)";
        ctx.arc(px, py, s.size * s.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.fill();
      });

      // 🌠 SHOOTING STARS
      shootingStars.forEach((s, i) => {
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(
          s.x - Math.cos(s.angle) * s.len,
          s.y - Math.sin(s.angle) * s.len
        );
        ctx.strokeStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 30;
        ctx.shadowColor = "white";
        ctx.stroke();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.alpha -= 0.025;

        if (s.alpha <= 0) shootingStars.splice(i, 1);
      });

      if (Math.random() < 0.006) createShootingStar();

      animationId = requestAnimationFrame(animate);
    };

    // ✅ Proper init order
    resize();
    initStars();

    // ✅ Fade-in to avoid first-frame clustering
    canvas.style.opacity = "0";
    requestAnimationFrame(() => {
      canvas.style.transition = "opacity 1.2s ease";
      canvas.style.opacity = "1";
      animate();
    });

    window.addEventListener("resize", () => {
      resize();
      initStars();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 bg-[#020409]"
    />
  );
};

export default StarBackground;

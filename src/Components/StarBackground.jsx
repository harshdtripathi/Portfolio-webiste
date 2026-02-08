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
      const starCount = width < 768 ? 250 : 700;

      stars = Array.from({ length: starCount }, () => {
        const x = Math.random() * width - width / 2;
        const y = Math.random() * height - height / 2;

        return {
          x,
          y,
          z: Math.random() * 0.8 + 0.2,
          size: Math.random() * 1.4 + 0.4,
          alpha: Math.random() * 0.6 + 0.4,
          glow: Math.random() * 10 + 6,
        };
      });
    };

    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.4,
        len: Math.random() * 250 + 150,
        speed: Math.random() * 20 + 15,
        angle: Math.PI / 4,
        alpha: 1,
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      rotation += width < 768 ? 0.0004 : 0.0006;

      const cosR = Math.cos(rotation);
      const sinR = Math.sin(rotation);

      stars.forEach((s) => {
        const rx = s.x * cosR - s.y * sinR;
        const ry = s.x * sinR + s.y * cosR;

        const px = cx + rx * s.z;
        const py = cy + ry * s.z;

        ctx.beginPath();
        ctx.shadowBlur = s.glow;
        ctx.shadowColor = "rgba(255,255,255,0.9)";
        ctx.arc(px, py, s.size * s.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.fill();
      });

      shootingStars.forEach((s, i) => {
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(
          s.x - Math.cos(s.angle) * s.len,
          s.y - Math.sin(s.angle) * s.len
        );
        ctx.strokeStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 25;
        ctx.shadowColor = "white";
        ctx.stroke();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.alpha -= 0.025;

        if (s.alpha <= 0) shootingStars.splice(i, 1);
      });

      if (Math.random() < 0.004) createShootingStar();

      animationId = requestAnimationFrame(animate);
    };

    // ✅ IMPORTANT ORDER
    resize();
    initStars();

    // ✅ Fade-in to hide any first-frame artifacts
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

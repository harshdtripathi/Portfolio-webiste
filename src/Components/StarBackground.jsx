import { useEffect, useRef } from "react";

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let W, H, dpr;
    let stars = [], nebulae = [], shooters = [], dustClouds = [];
    let rotation = 0, frame = 0, raf;

    function resize() {
      dpr = window.devicePixelRatio || 1;
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init();
    }

    function init() {
      const N = W < 768 ? 200 : 400; // Drastically reduced for 60fps
      const colorGroups = [
        [220, 20, 98], [200, 40, 90], [240, 30, 85],
        [60, 50, 95], [180, 30, 90], [300, 20, 90],
      ];

      stars = Array.from({ length: N }, () => {
        // Galaxy spiral parameters
        const arms = 4; // Number of spiral arms
        const armIndex = Math.floor(Math.random() * arms);
        const armOffset = (Math.PI * 2 * armIndex) / arms;
        
        // Core density (denser at center)
        const dist = Math.pow(Math.random(), 2.5) * Math.max(W, H) * 0.75;
        
        // Swirl factor to curl the arms
        const swirl = dist * 0.0035;
        
        // Spread the stars out (tighter in center, looser at edges)
        const scatterRange = dist * 0.6 + 50;
        const scatterAngle = (Math.random() - 0.5) * scatterRange * 0.01;
        
        const angle = armOffset + swirl + scatterAngle;
        
        const cg = colorGroups[Math.floor(Math.random() * colorGroups.length)];
        const z = 0.1 + Math.random() * 0.9;
        const isBright = Math.random() < 0.05;
        return {
          ox: Math.cos(angle) * dist,
          oy: Math.sin(angle) * dist,
          z,
          size: isBright ? 1.8 + Math.random() * 2.4 : 0.3 + Math.random() * 1.4,
          baseAlpha: isBright ? 0.85 + Math.random() * 0.15 : 0.3 + Math.random() * 0.55,
          alpha: 0,
          h: cg[0] + (Math.random() - 0.5) * 20,
          s: cg[1] + (Math.random() - 0.5) * 15,
          l: cg[2],
          twinkleSpeed: 0.003 + Math.random() * 0.018,
          twinklePhase: Math.random() * Math.PI * 2,
          isBright,
          glow: isBright ? 12 + Math.random() * 10 : 4 + Math.random() * 6,
          spikes: isBright && Math.random() < 0.5,
        };
      });

      nebulae = Array.from({ length: 6 }, () => {
        const angle = Math.random() * Math.PI * 2;
        const dist = 60 + Math.random() * Math.min(W, H) * 0.38;
        return {
          ox: Math.cos(angle) * dist * 0.7,
          oy: Math.sin(angle) * dist * 0.45,
          rx: 80 + Math.random() * 140,
          ry: 40 + Math.random() * 90,
          h: [220, 260, 200, 280, 180, 240][Math.floor(Math.random() * 6)],
          alpha: 0.022 + Math.random() * 0.038,
          rot: Math.random() * Math.PI,
        };
      });

      dustClouds = Array.from({ length: 4 }, () => ({
        ox: (Math.random() - 0.5) * W * 0.8,
        oy: (Math.random() - 0.5) * H * 0.8,
        r: 60 + Math.random() * 120,
        alpha: 0.012 + Math.random() * 0.022,
      }));
    }

    function spawnShooter() {
      const side = Math.random() < 0.5 ? "top" : "left";
      const x = side === "top" ? Math.random() * W : -20;
      const y = side === "top" ? -20 : Math.random() * H * 0.5;
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3;
      const speed = 18 + Math.random() * 22;
      shooters.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 0,
        fadeIn: true,
        tail: [],
        w: 1.5 + Math.random(),
      });
    }

    function drawSpikes(x, y, r, alpha) {
      const spikeLen = r * 5;
      ctx.lineWidth = 0.6;
      for (let i = 0; i < 4; i++) {
        const a = (i * Math.PI) / 2;
        const grad = ctx.createLinearGradient(
          x + Math.cos(a) * r, y + Math.sin(a) * r,
          x + Math.cos(a) * spikeLen, y + Math.sin(a) * spikeLen
        );
        grad.addColorStop(0, `rgba(255,255,255,${alpha * 0.8})`);
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = grad;
        ctx.beginPath();
        ctx.moveTo(x + Math.cos(a) * r, y + Math.sin(a) * r);
        ctx.lineTo(x + Math.cos(a) * spikeLen, y + Math.sin(a) * spikeLen);
        ctx.stroke();
      }
    }

    function draw() {
      frame++;
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2, cy = H / 2;
      rotation += 0.0015;
      const cosR = Math.cos(rotation), sinR = Math.sin(rotation);

      const rp = (ox, oy) => [
        cx + (ox * cosR - oy * sinR),
        cy + (ox * sinR + oy * cosR),
      ];

      // Galactic center glow
      const gcg = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(W, H) * 0.35);
      gcg.addColorStop(0, "rgba(160,180,255,0.06)");
      gcg.addColorStop(0.4, "rgba(120,140,230,0.025)");
      gcg.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gcg;
      ctx.fillRect(0, 0, W, H);

      // Nebulae
      nebulae.forEach((n) => {
        const [nx, ny] = rp(n.ox, n.oy);
        ctx.save();
        ctx.translate(nx, ny);
        ctx.rotate(n.rot + rotation * 0.3);
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, n.rx);
        g.addColorStop(0, `hsla(${n.h},60%,65%,${n.alpha * 1.5})`);
        g.addColorStop(0.5, `hsla(${n.h},50%,50%,${n.alpha})`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.scale(1, n.ry / n.rx);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(0, 0, n.rx, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Dust clouds
      dustClouds.forEach((d) => {
        const [dx, dy] = rp(d.ox, d.oy);
        const g = ctx.createRadialGradient(dx, dy, 0, dx, dy, d.r);
        g.addColorStop(0, `rgba(180,160,255,${d.alpha})`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(dx, dy, d.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Stars
      stars.forEach((s) => {
        s.alpha += (s.baseAlpha - s.alpha) * 0.02;
        const twinkle = Math.sin(frame * s.twinkleSpeed + s.twinklePhase);
        const a = Math.max(0, s.alpha + twinkle * 0.18 * (s.isBright ? 1.4 : 1));
        const [px, py] = rp(s.ox * s.z, s.oy * s.z);
        if (px < -10 || px > W + 10 || py < -10 || py > H + 10) return;

        const sz = s.size * s.z;
        ctx.beginPath();
        ctx.arc(px, py, sz, 0, Math.PI * 2);
        
        // Simple fast fill without heavy blur filters
        ctx.fillStyle = `hsla(${s.h},${s.s}%,${s.l}%,${a * (s.isBright ? 1 : 0.8)})`;
        ctx.fill();

        // Very basic fake glow using standard arc instead of shadowBlur
        if (s.isBright && a > 0.3) {
            ctx.beginPath();
            ctx.arc(px, py, sz * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${s.h},${s.s}%,${s.l}%,${a * 0.15})`;
            ctx.fill();
        }

        if (s.spikes && a > 0.5) drawSpikes(px, py, sz, a * 0.7);
      });

      // Shooting stars
      shooters.forEach((s, i) => {
        s.tail.push({ x: s.x, y: s.y });
        if (s.tail.length > 28) s.tail.shift();
        if (s.fadeIn) {
          s.alpha = Math.min(1, s.alpha + 0.12);
          if (s.alpha >= 1) s.fadeIn = false;
        }
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= 0.022;

        if (s.tail.length > 1) {
          for (let t = 1; t < s.tail.length; t++) {
            const progress = t / s.tail.length;
            ctx.beginPath();
            ctx.moveTo(s.tail[t - 1].x, s.tail[t - 1].y);
            ctx.lineTo(s.tail[t].x, s.tail[t].y);
            ctx.strokeStyle = `rgba(255,255,255,${progress * s.alpha * 0.9})`;
            ctx.lineWidth = progress * s.w * 1.5;
            ctx.shadowBlur = 8 * progress;
            ctx.shadowColor = "white";
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }

        if (s.alpha <= 0 || s.x > W + 100 || s.y > H + 100) {
          shooters.splice(i, 1);
        }
      });

      if (Math.random() < 0.004 && shooters.length < 3) spawnShooter();
      raf = requestAnimationFrame(draw);
    }

    resize();
    canvas.style.opacity = "0";
    canvas.style.transition = "opacity 1.5s ease";
    requestAnimationFrame(() => {
      canvas.style.opacity = "1";
      draw();
    });

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 bg-[#020409]" />;
};

export default StarBackground;
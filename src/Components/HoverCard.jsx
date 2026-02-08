import { useState } from "react";

const HoverCard = ({ children }) => {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPos({ x, y });

    const tiltX = -(y - rect.height / 2) / 25;
    const tiltY = (x - rect.width / 2) / 25;
    setTilt({ x: tiltX, y: tiltY });
  };

  const reset = () => {
    setPos({ x: 50, y: 50 });
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      className="
        relative
        border-4
        border-blue-400
        flex
        flex-col
        p-3.5
        mx-auto
        items-center
        transition-transform
        duration-300
        ease-out
        overflow-hidden
      "
    >
      {/* 🔮 GLOW LAYER (does NOT affect width) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(
            300px circle at ${pos.x}px ${pos.y}px,
            rgba(59,130,246,0.35),
            transparent 60%
          )`,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default HoverCard;

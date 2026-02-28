import React, { useState } from "react";
import logo from "../assets/images/ash logo only.png";

const Home = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    return (
        <section className="w-full h-screen flex justify-center items-center overflow-y-hidden">
            <div className="flex flex-col items-center mx-auto text-white select-none">

                {/* LOGO */}
                <div
                    onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setPos({
                            x: e.clientX - rect.left,
                            y: e.clientY - rect.top,
                        });
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className="relative flex flex-col p-3.5 mx-auto items-center border-blue-400 overflow-hidden"
                >
                    {/* GLOW */}
                    {hovered && (
                        <div
                            className="pointer-events-none absolute inset-0"
                            style={{
                                background: `radial-gradient(
                                  180px circle at ${pos.x}px ${pos.y}px,
                                  rgba(59,130,246,0.35),
                                  transparent 60%
                                )`,
                            }}
                        />
                    )}

                    <img
                        src={logo}
                        alt="ASH Logo"
                        className="relative z-30 w-[320px] md:w-3xl object-contain"
                    />

                    {/* TEXT */}
                    <h1 className="relative z-10  text-3xl md:text-5xl font-semibold tracking-wide text-white/80">
                        A.S.H Developers
                    </h1>
                </div>

            </div>
        </section>
    );
};

export default Home;

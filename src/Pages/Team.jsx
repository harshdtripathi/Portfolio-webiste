import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import ansh from "../assets/images/ansh.png";
import harsh from "../assets/images/harsh.png";
import sahil from "../assets/images/sahil.png";
import Aboutus from "./Aboutus";

const Team = () => {
  return (
    <div className="flex flex-col w-full mx-auto">
      <section className="text-white px-6 md:px-16 py-16 md:py-20">

        {/* Heading */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-6 md:gap-20 mb-14 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide whitespace-nowrap text-center md:text-left w-full md:w-auto">
            OUR TEAM
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl text-center md:text-left">
            “We are a trio of creative problem-solvers who believe that a website
            should be more than just a digital business card — it should be an
            experience. Combining design, robust engineering, and strategic
            management, we bring a multi-disciplinary approach to every project we
            touch.”
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              title: "The Developer",
              name: "HARSH TRIPATHI",
              role: "FULL STACK DEVELOPER",
              desc:
                "Our lead developer turns static designs into high-performance digital reality. Specializing in responsive web development, they ensure that every site is fast, secure, and works flawlessly across all devices.",
              footer: "Clean Code (Web dev focus)",
              image: harsh,
              whatsapp: "https://wa.me/919696181843",
              linkedin: "https://www.linkedin.com/in/harsh-tripathi99",
              instagram: "https://www.instagram.com/",
            },
            {
              title: "The Visionary",
              name: "ANSH VISHWAKARMA",
              role: "UI/UX DESIGNER",
              desc:
                "With a background rooted in architecture, I approach web design as the construction of digital spaces. My focus is on creating simple and elegant interfaces in Figma.",
              footer: "User-Centric Design (Figma focus)",
              image: ansh,
              whatsapp: "https://wa.me/919696181843",
              linkedin: "https://www.linkedin.com/in/harsh-tripathi99",
              instagram: "https://www.instagram.com/",
            },
            {
              title: "The Strategist",
              name: "MD. SAHIL ANSARI",
              role: "PROJECT MANAGER",
              desc:
                "The heartbeat of our operations. Our manager ensures that every project stays on track, on time, and on brand while keeping business goals the top priority.",
              footer: "Collaborative Spirit (Client focus)",
              image: sahil,
              whatsapp: "https://wa.me/919696181843",
              linkedin: "https://www.linkedin.com/in/harsh-tripathi99",
              instagram: "https://www.instagram.com/",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="
                relative border border-[#2a2a2a] rounded-xl
                px-6 md:px-8 py-8 md:py-10
                min-h-[480px] md:min-h-[540px]
                flex flex-col justify-between
                hover:border-cyan-400 transition-all duration-300
                overflow-hidden group
              "
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
              }}
            >
              {/* CARD GLOW */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                  background:
                    "radial-gradient(120px at var(--x) var(--y), rgba(34,211,238,0.35), transparent 65%)",
                }}
              />

              {/* CONTENT */}
              <div className="relative z-10">
                {/* Profile */}
                <div className="flex flex-col items-center mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover mb-4"
                  />
                </div>

                {/* SOCIAL ICONS */}
                <div className="absolute right-6 md:right-10 top-6">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute -left-4 top-0 w-8 h-8 rounded-full border border-[#3a3a3a]
                    flex items-center justify-center text-white hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute left-1 top-10 w-8 h-8 rounded-full border border-[#3a3a3a]
                    flex items-center justify-center text-white hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href={member.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute -left-3 top-20 w-8 h-8 rounded-full border border-[#3a3a3a]
                    flex items-center justify-center text-white hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <FaWhatsapp />
                  </a>
                </div>

                {/* Text */}
                <h3 className="text-cyan-400 text-base md:text-lg font-medium text-center mb-1">
                  {member.title}
                </h3>

                <p className="text-center font-semibold">{member.name}</p>

                <p className="text-center text-xs text-gray-400 mb-4">
                  ({member.role})
                </p>

                <p className="text-gray-400 text-sm leading-relaxed text-center px-2">
                  {member.desc}
                </p>
              </div>

              {/* Footer */}
              <p className="relative z-10 text-center text-xs text-gray-500 mt-8">
                {member.footer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Aboutus />
    </div>
  );
};

export default Team;

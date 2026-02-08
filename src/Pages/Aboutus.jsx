import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaRocket,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiPython,
  SiPostman,
} from "react-icons/si";

const GlowCard = ({ children, glow }) => {
  const moveGlow = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      onMouseMove={moveGlow}
      onMouseLeave={(e) => {
        e.currentTarget.style.setProperty("--x", "50%");
        e.currentTarget.style.setProperty("--y", "50%");
      }}
      className="relative rounded-xl"
      style={{
        background: `radial-gradient(
          600px circle at var(--x) var(--y),
          ${glow},
          transparent 40%
        )`,
      }}
    >
      {children}
    </div>
  );
};

const Aboutus = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-16 py-16 md:py-20 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5">

        {/* Tech Arsenal */}
        <GlowCard glow="rgba(34,211,238,0.35)">
          <div className="border border-cyan-500 rounded-xl p-6 md:p-8 flex flex-col items-center text-center min-h-[460px] md:min-h-[520px]">

            <h2 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-6">
              Tech Arsenal
            </h2>

            <div className="flex flex-col flex-grow justify-center gap-6 md:gap-8">
              <div className="grid grid-cols-4 gap-4 md:gap-6 text-4xl md:text-5xl text-cyan-300 place-items-center">
                <FaHtml5 />
                <FaCss3Alt />
                <FaJs />
                <FaReact />
                <FaNodeJs />
                <SiExpress />
                <SiMongodb />
                <SiTailwindcss />
                <SiFirebase />
                <SiPython />
                <SiPostman />
                <FaGitAlt />
              </div>

              <p className="text-base md:text-lg text-white max-w-md mx-auto">
                “Our team has strong grip on the software which brings you to the
                best outcome possible.”
              </p>
            </div>

            <div className="flex justify-center items-center mt-6">
              <FaChartLine className="text-3xl md:text-4xl text-cyan-400" />
            </div>
          </div>
        </GlowCard>

        {/* Static Web */}
        <GlowCard glow="rgba(251,146,60,0.35)">
          <div className="border border-orange-400 rounded-xl p-6 md:p-8 flex flex-col text-center min-h-[460px] md:min-h-[520px]">

            <h2 className="text-xl md:text-2xl font-semibold text-orange-400 mb-6">
              Static Web
            </h2>

            <div className="grow flex items-center">
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                A Static Website is like a high-quality printed brochure or a
                business card, but online.
                <br /><br />
                It is perfect for businesses that want to showcase their services,
                history, and contact information with a beautiful, fast-loading
                interface.
                <br /><br />
                <span className="text-orange-300 font-medium">Best for:</span>{" "}
                Small businesses, portfolios, and landing pages.
              </p>
            </div>

            <div className="flex justify-center items-center mt-6">
              <FaCheckCircle className="text-3xl md:text-4xl text-orange-400" />
            </div>
          </div>
        </GlowCard>

        {/* Dynamic Web */}
        <GlowCard glow="rgba(96,165,250,0.35)">
          <div className="border border-blue-400 rounded-xl p-6 md:p-8 flex flex-col text-center min-h-[460px] md:min-h-[520px]">

            <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-6">
              Dynamic Web
            </h2>

            <div className="flex-grow flex items-center">
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                A Dynamic Website is like a living office or a smart store.
                <br /><br />
                You get a dashboard (Admin Panel) where you can update content
                without writing a single line of code.
                <br /><br />
                <span className="text-blue-300 font-medium">Best for:</span>{" "}
                E-commerce, job portals, blogs, and booking systems.
              </p>
            </div>

            <div className="flex justify-center items-center mt-6">
              <FaRocket className="text-3xl md:text-4xl text-blue-400" />
            </div>
          </div>
        </GlowCard>

      </div>
    </section>
  );
};

export default Aboutus;

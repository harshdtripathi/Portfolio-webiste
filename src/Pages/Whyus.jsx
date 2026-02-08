import React from "react";
import whyusImg from "../assets/images/whyus.png"; // use the same illustration

const Whyus = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center px-6 sm:px-10 lg:px-24 text-white">
      
      {/* LEFT IMAGE CARD */}
      <div className="relative flex flex-col items-center">
        <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[280px] lg:h-[280px] bg-white rounded-[32px] flex items-center justify-center">
          <img
            src={whyusImg}
            alt="Why Us"
            className="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] object-contain"
          />
        </div>

        {/* VERTICAL WHY */}
        <div className="relative mt-10 lg:absolute lg:-bottom-44 left-1/12 lg:-translate-x-1/2 flex items-center gap-3">
          {/* LEFT LINE */}
          <div className="w-[2px] h-44 sm:h-36 lg:h-44 bg-sky-400" />

          {/* TEXT */}
          <span className="text-sky-400 text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.3em] rotate-180 writing-mode-vertical">
            WHY US
          </span>

          {/* RIGHT LINE */}
          <div className="w-[2px] h-44 sm:h-36 lg:h-44 bg-sky-400" />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="mt-12 lg:mt-0 lg:ml-[200px] max-w-[520px] text-sm sm:text-base leading-relaxed space-y-6 sm:space-y-8 text-white/90 text-center lg:text-left">
        <p>
          <span className="font-semibold">Clean & Scalable Code:</span> We
          prioritize clean code principles, making your website easy to update
          and lightning-fast.
        </p>

        <p>
          <span className="font-semibold">Modern Tech Stack:</span> We use
          cutting-edge tools (like React, Next.js, and Node.js) to ensure your
          business stays ahead of the curve.
        </p>

        <p>
          <span className="font-semibold">Collaborative Partnership:</span> We
          act as your extended team, providing transparent communication and
          regular updates throughout the project.
        </p>
      </div>
    </section>
  );
};

export default Whyus;

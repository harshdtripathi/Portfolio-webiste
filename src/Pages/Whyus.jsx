import React from "react";
import whyusImg from "../assets/images/whyus.png"; // use the same illustration

const Whyus = () => {
  return (
    <section className="relative w-full h-screen flex items-center px-24 text-white">
      
      {/* LEFT IMAGE CARD */}
      <div className="relative">
        <div className="w-[280px] h-[280px] bg-white rounded-[32px] flex items-center justify-center">
          <img
            src={whyusImg}
            alt="Why Us"
            className="w-[350px] h-[350px] object-contain"
          />
        </div>

        {/* VERTICAL WHY */}
       <div className="absolute -bottom-44 left-1/2 -translate-x-1/2 flex items-center gap-3">
  
  {/* LEFT LINE */}
  <div className="w-[2px] h-44 bg-sky-400" />

  {/* TEXT */}
  <span className="text-sky-400 text-2xl font-bold tracking-[0.3em] rotate-180 writing-mode-vertical">
    WHY US
  </span>

  {/* RIGHT LINE */}
  <div className="w-[2px] h-44 bg-sky-400" />

</div>

      </div>

      {/* RIGHT CONTENT */}
      <div className="ml-[200px] max-w-[520px] text-md leading-relaxed space-y-8 text-white/90">
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

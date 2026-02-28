import React from "react";
import Whyus from "./Whyus";

const OurWorks = ({ desc, image, name, link, flag }) => {
  return (
    <div className="w-full flex justify-center">
      <section
        className="
          relative
          w-full
          max-w-[1400px]
          min-h-screen
          md:h-screen
          flex
          flex-col
          md:flex-row
          items-center
          px-4
          md:px-20
        "
      >

        {/* ------------------------------------------------------ */}
        {/* 📱 MOBILE VIEW (clean layout) */}
        {/* ------------------------------------------------------ */}
        <div className="md:hidden w-full flex flex-col items-center mt-16">
          {/* Title */}
          <h1 className="text-3xl font-semibold text-white text-center mb-4">
            {name}
          </h1>

          {/* Image */}
          <img
            src={image}
            alt={name}
            className="w-[300px] sm:w-[350px] rounded-3xl shadow-2xl mb-4"
          />

          {/* Description */}
          <p className="text-white text-sm text-center leading-relaxed bg-black/40 px-4 py-3 rounded-md mb-4">
            {desc}
          </p>

          {/* Button */}
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="
              bg-purple-600 hover:bg-purple-700
              text-white px-6 py-2 rounded-full
              text-sm flex items-center gap-2
            "
          >
            {name} ↗
          </a>
        </div>

        {/* ------------------------------------------------------ */}
        {/* 💻 DESKTOP VIEW (unchanged layout) */}
        {/* ------------------------------------------------------ */}

        <div
          className="
            hidden md:flex
            relative
            w-[260px] sm:w-[300px] md:w-[380px]
            h-[360px] sm:h-[420px] md:h-[480px]
            lg:border-4 border-gray-500
            mt-16 md:mt-20
            p-6 md:p-9
            z-10
          "
        >
          {flag == "true" && (
            <div className="absolute top-4 left-4 md:top-6 md:left-6">
              <h1 className="text-[#3d6778] text-2xl sm:text-3xl md:text-4xl tracking-widest">
                OUR WORKS
              </h1>
            </div>
          )}

          <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
            <span className="text-[#314750] text-3xl sm:text-4xl md:text-5xl tracking-widest rotate-180 writing-mode-vertical">
              {name}
            </span>
          </div>
        </div>

        <p
          className="
            hidden md:block
            absolute
            top-16 left-[500px]
            max-w-xl
            text-sm text-white leading-relaxed
          "
        >
          {desc}
        </p>

        <div
          className="
            hidden md:flex
            absolute
            right-40 top-[55%] -translate-y-1/2
            z-10
          "
        >
          <img
            src={image}
            alt={name}
            className="w-[850px] rounded-3xl shadow-2xl"
          />
        </div>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="
            hidden md:flex
            absolute bottom-0 left-1/2 -translate-x-1/2
            z-20
            items-center gap-2
            bg-purple-600 hover:bg-purple-700
            text-white px-6 py-2 rounded-full text-sm
          "
        >
          {name} ↗
        </a>
      </section>
    </div>
  );
};

export default OurWorks;
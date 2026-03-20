import React from "react";
import Whyus from "./Whyus";

const OurWorks = ({ desc, image, name, link, flag }) => {
  return (
    <div className="w-full flex justify-center">
      <section
        className="
          lg:mt-28
          mt-20
          relative
          w-full
          max-w-[1400px]
          min-h-[70vh] md:min-h-screen
          md:h-screen
          flex
          flex-col
          md:flex-row
          items-center
          px-4
          md:px-20
          mb-10 md:mb-0
        "
      >
        {/* MOBILE VIEW — unchanged */}
        <div className="md:hidden w-full flex flex-col items-center mt-12">
          <h1 className="text-3xl font-semibold text-white text-center mb-3">
            {name}
          </h1>

          <img
            src={image}
            alt={name}
            className="w-[300px] sm:w-[340px] rounded-3xl shadow-2xl mb-3"
          />

          <p className="text-white text-sm text-center leading-relaxed bg-black/40 px-4 py-3 rounded-md mb-3">
            {desc}
          </p>

          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm flex items-center gap-2"
          >
            {name} ↗
          </a>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex w-full items-center relative mt-24 md:mt-32">
          {/* Left border box: OUR WORKS label + vertical project name */}
          <div
            className="
              relative
              flex-shrink-0
              w-[220px] lg:w-[280px]
              h-[360px] md:h-[440px] lg:h-[500px]
              border-4 border-gray-500
              p-6 md:p-9
              z-10
            "
          >
            {flag === "true" && (
              <div className="absolute top-4 left-4 md:top-6 md:left-6">
                <h1 className="text-[#3d6778] text-2xl md:text-3xl lg:text-4xl tracking-widest">
                  OUR WORKS
                </h1>
              </div>
            )}

            <div className="absolute bottom-3 left-20 md:bottom-4 md:left-4">
              <span className="text-[#314750] text-3xl md:text-5xl lg:text-6xl tracking-widest rotate-180 writing-mode-vertical">
                {name}
              </span>
            </div>
          </div>

          {/* Right content */}
          <div className="flex flex-col flex-1 min-w-0 -ml-8 lg:-ml-10 z-20">
            <p className="text-sm text-white leading-relaxed max-w-2xl mb-6 pl-14 lg:pl-20">
              {desc}
            </p>

            <img
              src={image}
              alt={name}
              className="w-full max-w-[700px] xl:max-w-[860px] rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        {/* Link button — bottom center */}
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="
            hidden md:flex
            absolute bottom-6 left-1/2 -translate-x-1/2
            z-30
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
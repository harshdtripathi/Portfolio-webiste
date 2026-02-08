import React from "react";
import Whyus from "./Whyus";

const OurWorks = ({ desc, image, name, link, showTitle,flag }) => {
  return (
    <div className="w-full  flex  justify-center ">
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
        {/* LEFT BORDER BOX */}
        <div
          className="
            relative
            w-[260px] sm:w-[300px] md:w-[380px]
            h-[360px] sm:h-[420px] md:h-[480px]
            border-4 border-gray-500
            flex
            mt-16 md:mt-20
            p-6 md:p-9
            z-10
          "
        >
          {/* OUR WORKS — only first card */}
          {flag=="true" && (
            <div className="absolute top-4 left-4 md:top-6 md:left-6">
              <h1 className="text-[#3d6778] text-2xl sm:text-3xl md:text-4xl tracking-widest">
                OUR WORKS
              </h1>
            </div>
          )}

          {/* VERTICAL PROJECT NAME */}
          <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
            <span className="text-[#314750] text-3xl sm:text-4xl md:text-5xl tracking-widest rotate-180 writing-mode-vertical">
              {name}
            </span>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p
          className="
            relative
            md:absolute
            mt-6
            md:mt-0
            top-auto
            md:top-16
            left-auto
            md:left-[500px]
            max-w-xl
            text-sm
            text-white
            leading-relaxed
            bg-black/40
            md:bg-transparent
            md:backdrop-blur-0
            px-4
            py-2
            rounded-md
            z-20
            text-center
            md:text-left
          "
        >
          {desc}
        </p>

        {/* MOCKUP IMAGE */}
        <div
          className="
            relative
            md:absolute
            mt-8
            md:mt-14
            left-auto
            md:left-1/7
            right-auto
            md:right-10
            top-auto
            md:top-1/2
            translate-x-0
            md:-translate-x-0
            translate-y-2.5
            md:-translate-y-1/2
            w-full
            md:w-auto
            flex
            justify-center
            z-10
          "
        >
          <img
            src={image}
            alt={name}
            className="
              w-[260px]
              sm:w-[420px]
              md:w-[850px]
              rounded-3xl
              shadow-2xl
            "
          />
        </div>

        {/* BOTTOM BUTTON */}
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="
            relative
            md:absolute
            mt-10
            md:mt-0
            bottom-auto
            md:bottom-0
            left-1/2
            -translate-x-1/2
            z-20
            flex
            items-center
            gap-2
            bg-purple-600
            hover:bg-purple-700
            transition
            text-white
            px-6
            py-2
            rounded-full
            text-sm
          "
        >
          {name} <span className="text-lg">↗</span>
        </a>
      </section>
      
    </div>
  );
};

export default OurWorks;

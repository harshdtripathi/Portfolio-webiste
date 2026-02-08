import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "HOME", url: "/" },
    { name: "ABOUT US", url: "/team" },
    { name: "OUR WORKS", url: "/work" },
    { name: "CONTACT US", url: "/contactus" },
  ];

  return (
    <nav className="w-full absolute top-6 left-0 z-50">
      {/* DESKTOP NAV */}
      <div className="hidden md:flex justify-center">
        <div className="flex w-[70%] justify-between text-white text-sm tracking-[0.25em] font-bold">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.url}
              className="group flex flex-col items-center relative"
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`transition ${
                      isActive ? "opacity-100" : "opacity-80 group-hover:opacity-100"
                    }`}
                  >
                    {item.name}
                  </span>

                  <span
                    className={`
                      mt-2
                      h-[2px]
                      w-10
                      bg-white
                      transition-all
                      duration-300
                      ${isActive ? "opacity-100" : "opacity-0"}
                    `}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {/* MOBILE NAV */}
      <div className="md:hidden flex justify-between items-center px-6">
        <span className="text-white tracking-widest text-sm font-bold">
          MENU
        </span>

        <button
          onClick={() => setOpen(!open)}
          className="text-white text-3xl"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden mt-4 mx-6 rounded-xl bg-black/70 backdrop-blur-lg border border-white/10">
          <div className="flex flex-col items-center py-6 gap-6 text-white tracking-widest text-sm">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.url}
                onClick={() => setOpen(false)}
                className="group flex flex-col items-center"
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`transition ${
                        isActive ? "opacity-100" : "opacity-80 group-hover:opacity-100"
                      }`}
                    >
                      {item.name}
                    </span>

                    <span
                      className={`
                        mt-2
                        h-[2px]
                        w-8
                        bg-white
                        transition-all
                        duration-300
                        ${isActive ? "opacity-100" : "opacity-0"}
                      `}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

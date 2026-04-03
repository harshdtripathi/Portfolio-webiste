import React from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black/40 border-t border-white/10 backdrop-blur-md pt-12 pb-8 mt-auto z-40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Section: Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 shadow-[0_0_80px_rgba(34,211,238,0.15)]">
          <h2 className="text-2xl font-bold tracking-widest text-white">
            A.S.H <span className="text-cyan-400">Developers</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xs">
            Engineering premium, high-performance digital experiences from the ground up.
          </p>
        </div>

        {/* Center Section: Quick Links */}
        <div className="flex gap-6 text-sm font-semibold tracking-widest text-white/80">
          <NavLink to="/" className="hover:text-cyan-400 transition-colors">HOME</NavLink>
          <NavLink to="/team" className="hover:text-cyan-400 transition-colors">TEAM</NavLink>
          <NavLink to="/work" className="hover:text-cyan-400 transition-colors">WORKS</NavLink>
          <NavLink to="/contactus" className="hover:text-cyan-400 transition-colors">CONTACT</NavLink>
        </div>

        {/* Right Section: Socials */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/harsh-tripathi99"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all"
          >
            <FaInstagram className="text-lg" />
          </a>
          <a
            href="https://wa.me/919696181843"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all"
          >
            <FaWhatsapp className="text-lg" />
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 text-center text-xs text-gray-500">
        <p>&copy; {currentYear} A.S.H Developers. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

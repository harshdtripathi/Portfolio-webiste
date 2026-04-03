import React, { useEffect } from "react";
import Lenis from 'lenis';
import "./App.css";

import StarBackground from "./Components/StarBackground";
import Navbar from "./Components/Navbar";

import Team from "./Pages/Team";
import Aboutus from "./Pages/Aboutus";
import Works from "./Pages/Works";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contactus from "./Pages/Contactus";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard smooth easing
      smoothWheel: true,
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden text-white antialiased flex flex-col relative z-0">
      <StarBackground />

      {/* FIXED NAVBAR */}
      <Navbar />

      {/* Push content below fixed navbar */}
      <div className="grow">
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/work" element={<Works />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </div>

      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}

export default App;

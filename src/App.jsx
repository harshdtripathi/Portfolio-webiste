import "./App.css";

import StarBackground from "./Components/StarBackground";
import Navbar from "./Components/Navbar";

import Team from "./Pages/Team";
import Aboutus from "./Pages/Aboutus";
import Works from "./Pages/Works";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="min-h-screen overflow-hidden antialiased">
      <StarBackground />

      {/* FIXED NAVBAR */}
      <Navbar />

      {/* Push content below fixed navbar */}
      <div className="pt-28">
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/work" element={<Works />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

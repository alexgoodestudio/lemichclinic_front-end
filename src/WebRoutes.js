import React from "react";
import { Routes, Route } from "react-router-dom";
import Services from "./Components/Services";
import Dashboard from "./Components/Dashboard";
import OurTeam from "./Components/Team";
import Insurance from "./Components/Insurance";
import Contact from "./Components/Contact";
import Owners from "./Components/Owners";

function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="team" element={<OurTeam />} />
      <Route path="services" element={<Services />} />
      <Route path="insurance" element={<Insurance />} />
      <Route path="contact" element={<Contact />} />
      <Route path="owners" element={<Owners />} />

    </Routes>
  );
}

export default WebRoutes;
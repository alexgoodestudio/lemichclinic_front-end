import React from "react";
import { Routes, Route } from "react-router-dom";
import Services from "./Components/Services";
import Dashboard from "./Components/Dashboard";
import OurTeam from "./Components/Team";
import Insurance from "./Components/Insurance";

function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="team" element={<OurTeam />} />
      <Route path="services" element={<Services />} />
      <Route path="insurance" element={<Insurance />} />

    </Routes>
  );
}

export default WebRoutes;
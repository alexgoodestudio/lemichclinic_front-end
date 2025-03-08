import React from "react";
import { Routes, Route } from "react-router-dom";
import Services from "./Components/Services";
import Dashboard from "./Components/Dashboard"; 
import OurTeam from "./Components/Team";
import Insurance from "./Components/Insurance";
import Contact from "./Components/Contact";
import Owners from "./Components/Owners";
import Login from "./Components/Login";
import ContactEditForm from "./Components/ContactEditForm";  
import "./App.css";

function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div className="fade-in"><Dashboard /></div>} /> 
      <Route path="team-norfolk" element={<div className="fade-in"><OurTeam /></div>} />
      <Route path="exclusive-services-norfolk" element={<div className="fade-in"><Services /></div>} />
      <Route path="tricare-health-insurance" element={<div className="fade-in"><Insurance /></div>} />
      <Route path="contact" element={<div className="fade-in"><Contact /></div>} />
      <Route path="owners-norfolk" element={<div className="fade-in"><Owners /></div>} />
      <Route path="login" element={<div className="fade-in"><Login /></div>} />
      <Route path="contacts/:contact_id/edit" element={<div className="fade-in"><ContactEditForm /></div>} /> 
    </Routes>
  );
}

export default WebRoutes;

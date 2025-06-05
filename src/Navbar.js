import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./Components/animations/useGsapAnimations";
// import logo from "../src/Components/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();


  return (
    <nav className=" navbar bg-navbar nav-text navbar-expand-lg main">
      <div className="container overflow-hidden">
        {/* Logo and Brand */}
        <Link className="logo-location  barlow navbar-brand nav-text d-flex" to="/">
          {/* <img className="tinyLogo" src={logo} alt="logo" /> */}
          <span className="">The Lemich Clinic &nbsp;</span>
          <span className="">|&nbsp; Norfolk, VA</span>
        </Link>

        {/* Navbar Toggler */}
        <button
          className={`navbar-toggler ${isOpen ? "" : "collapsed"}`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav nav-align-end ms-auto d-flex flex-lg-row flex-column gap-3 nav-link-styling">
            <li className="nav-item">
              <Link
                className={`nav-link nav-text  ${location.pathname === "/" ? "active-link" : ""}`}
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link nav-text  ${location.pathname === "/team-norfolk" ? "active-link" : ""}`}
                to="/team-norfolk"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link nav-text  ${location.pathname === "/exclusive-services-norfolk" ? "active-link" : ""}`}
                to="/exclusive-services-norfolk"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link nav-text  ${location.pathname === "/tricare-health-insurance" ? "active-link" : ""}`}
                to="/tricare-health-insurance"
                onClick={() => setIsOpen(false)}
              >
                Insurance
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link nav-text  ${location.pathname === "/contact" ? "active-link" : ""}`}
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link nav-text  ${location.pathname === "/owners-norfolk" ? "active-link" : ""}`}
                to="/owners-norfolk"
                onClick={() => setIsOpen(false)}
              >
                Owners
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

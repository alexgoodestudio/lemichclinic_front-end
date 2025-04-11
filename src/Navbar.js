import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./Components/animations/useGsapAnimations";
// import logo from "../src/Components/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg main">
      <div className="container overflow-hidden">
        {/* Logo and Brand */}
        <Link className="logo-location navbar-brand  d-flex" to="/">
          {/* <img className="tinyLogo" src={logo} alt="logo" /> */}
          <span className="">The Lemich Clinic &nbsp;</span>
          <span className="">
            |&nbsp; <span className="">Norfolk, VA</span>
          </span>
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
      <Link className="nav-link underline3" to="/" onClick={() => setIsOpen(false)}>
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link underline3" to="/team-norfolk" onClick={() => setIsOpen(false)}>
        Team
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link underline3" to="/exclusive-services-norfolk" onClick={() => setIsOpen(false)}>
        Services
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link underline3" to="/tricare-health-insurance" onClick={() => setIsOpen(false)}>
        Insurance
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link underline3" to="/contact" onClick={() => setIsOpen(false)}>
        Contact
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link underline3" to="/owners-norfolk" onClick={() => setIsOpen(false)}>
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

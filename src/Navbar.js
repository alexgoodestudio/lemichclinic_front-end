import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./Components/animations/useGsapAnimations";
import logo from "../src/Components/images/logo.png";


function Navbar() {
  return (
    <nav className="navbar  main">
      <div className="container  overflow-hidden">
        <Link className="logo-location  navbar-brand d-flex " to="/">
          <img className="tinyLogo" src={logo} alt="logo" />
          <span className=" nav-logo-text ">
            The Lemich Clinic &nbsp;
          </span>{" "}
          <span className="nav-logo-text">|&nbsp; <span className="green">Norfolk, VA</span></span>
          
        </Link>

        <ul className="navbar-nav  ms-auto d-flex flex-row gap-4  nav-link-styling">
          <li className="nav-item">
            <Link className="nav-link underline3" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link underline3" to="/team-norfolk">
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link underline3"
              to="/exclusive-services-norfolk"
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link underline3"
              to="/tricare-health-insurance"
            >
              Insurance
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link underline3" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link underline3" to="/owners-norfolk">
              Owners
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

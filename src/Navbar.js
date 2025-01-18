import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import "./Components/animations/useGsapAnimations"

function Navbar() {

  return (
    <nav className="navbar  main">
      <div className="container overflow-hidden">
        <Link className="logo-location  navbar-brand ps-4 d-flex" to="/">
          <span className=" ms-3  me-2">The </span>Lemich Clinic | <span className="thin italics ms-2"> Norfolk, Virginia</span>
       
        </Link>
        <ul className="navbar-nav ms-auto d-flex flex-row gap-4 ivy nav-link-styling">
  <li className="nav-item">
    <Link className="nav-link" to="/">
     Home
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/team">
      Our Team
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/services">
      Services
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/insurance">
      Insurance
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/contact">
      Contact
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/owners">
      Owners
    </Link>
  </li>


</ul>

      </div>
    </nav>
  );
}

export default Navbar;

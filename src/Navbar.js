import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import "./Components/animations/useGsapAnimations"

function Navbar() {

  return (
    <nav className="navbar main">
      <div className="container  overflow-hidden">
        <Link className="logo-location  navbar-brand  d-flex" to="/">
          <span className="thin">The Lemich Clinic  </span> &nbsp;| <span className="thin  ms-2"> Norfolk, Virginia</span>
       
        </Link>
        <ul className="navbar-nav ms-auto d-flex flex-row gap-4 ivy nav-link-styling">
  <li className="nav-item">
    <Link className="nav-link" to="/">
     Home
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/team">
      Team
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

import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import "./Components/animations/useGsapAnimations"
import logo from "../src/Components/images/black.png"

function Navbar() {

  return (
    <nav className="navbar main">
      <div className="container  overflow-hidden">
        <Link className="logo-location navbar-brand d-flex" to="/">
          <img className="tiny" src={logo} alt="logo"  />
          <span className="">The Lemich Clinic  </span><span className="thin  ms-2">| Norfolk, VA</span>
        </Link>
        <ul className="navbar-nav  ms-auto d-flex flex-row gap-4 ivy nav-link-styling">
  <li className="nav-item">
    <Link className="nav-link underline3" to="/">
     Home
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link underline3" to="/team">
      Team
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link underline3" to="/services">
      Services
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link underline3" to="/insurance">
      Insurance
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link underline3" to="/contact">
      Contact
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link underline3" to="/owners">
      Owners
    </Link>
  </li>


</ul>

      </div>
    </nav>
  );
}

export default Navbar;

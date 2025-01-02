import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="navbar navbar-light  bg-slate-300 ">
      <div className="container-fluid ">
        <Link className="navbar-brand ps-4" to="/">
          The Lemich Clinic  | <span className="thin"> Norfolk, Virginia</span>
        </Link>
        <ul className="navbar-nav ms-auto d-flex flex-row gap-4">
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

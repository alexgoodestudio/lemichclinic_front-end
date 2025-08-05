import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { FaFacebookSquare } from "react-icons/fa";
import { gsap } from "gsap";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const fbIconRef = useRef(null);

  return (
    <nav className="navbar barlow bg-white py-3 nav-text navbar-expand-lg main">
      <div className="container overflow-hidden">
        {/* Logo and Brand */}
        <Link className="logo-location barlow navbar-brand nav-text d-flex" to="/">
          <span className="logo-color">The Lemich Clinic &nbsp;</span>
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
                className={`nav-link nav-text ${location.pathname === "/" ? "active-link" : ""}`}
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link nav-text ${location.pathname === "/team-norfolk" ? "active-link" : ""}`}
                to="/team-norfolk"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link nav-text ${location.pathname === "/exclusive-services-norfolk" ? "active-link" : ""}`}
                to="/exclusive-services-norfolk"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link nav-text ${location.pathname === "/tricare-health-insurance" ? "active-link" : ""}`}
                to="/tricare-health-insurance"
                onClick={() => setIsOpen(false)}
              >
                Insurance
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link nav-text ${location.pathname === "/contact" ? "active-link" : ""}`}
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link nav-text ${location.pathname === "/owners-norfolk" ? "active-link" : ""}`}
                to="/owners-norfolk"
                onClick={() => setIsOpen(false)}
              >
                Owners
              </Link>
            </li>

            {/* Facebook Icon Link with Hover Animation */}
            <li className="nav-item d-flex align-items-center">
              <a
                href="https://www.facebook.com/p/The-Lemich-Clinic-For-Military-Mental-Health-100086257112340/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link nav-text"
                aria-label="Visit our Facebook page"
              >
                <span
                  ref={fbIconRef}
                  onMouseEnter={() =>
                    gsap.to(fbIconRef.current, {
                      scale: 1.15,
                      boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.4)",
                      duration: 0.3,
                      ease: "power2.out",
                    })
                  }
                  onMouseLeave={() =>
                    gsap.to(fbIconRef.current, {
                      scale: 1,
                      boxShadow: "none",
                      duration: 0.3,
                      ease: "power2.out",
                    })
                  }
                  style={{ display: "inline-block", borderRadius: "4px" }}
                >
                  <FaFacebookSquare size={24} color="black" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

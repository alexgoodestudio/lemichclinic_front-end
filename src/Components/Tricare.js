import React from "react";
// import logo from "./images/logo3.png";
// import check from "./images/check.png";
import { Link } from "react-router-dom";

import "../style.css";

function Tricare() {
  return (
    <div className="container-fluid  position-relative">
      <div className="row p-4 bg-dark position-relative py-5">
        <div className="col-lg-3">
          <div className="huge-text container-fluid hideMobile"></div>

        </div>
        <div className="col-lg-6 py-5  my-lg-5">
          <div className=" d-flex mb-lg-3 mb-3">
            {/* <img
              src={logo}
              alt="logo heart"
              className="logo-tricare rotate mb-lg-2 mb-2"
            /> */}

            {/* <img src={check} alt="check mark" className="check-tricare mb-2 rotate "/> */}
            <h2 className="text-white tricare-header space tomorrow ">
              TRICARE<span className="accent">&nbsp;ACCEPTED&nbsp;</span>
            </h2>
          </div>
          <p className="text-white text-start tricare-text text-sm space-1 py-md-4 ">
            <span className="barlow text-lg ">Great news! We are in-network with TRICARE.</span><br /><br />
            Active duty, please have
            your referral made to{" "}
            <span className="spaced-underline">The Lemich Clinic</span>. Dependents
            and retirees, no referral is needed. Just make an appointment, and
            we’ll take care of the rest.
          </p>
          <Link
            to="/tricare-health-insurance"
            className="group flex items-center text-xl text-white space-x-2 no-underline"
          >
            <p className="m-0 group-hover:text-teal-100 transition-colors duration-300">Learn More</p>
            <span className="material-symbols-outlined text-xl transform transition-all duration-300 group-hover:translate-x-1 group-hover:text-teal-100">
              east
            </span>
          </Link>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
}

export default Tricare;
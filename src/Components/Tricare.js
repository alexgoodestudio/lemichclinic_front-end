import React from "react";
import logo from "./images/logo3.png";

import "../style.css";

function Tricare() {
  return (
    <div className="container-fluid ">
      <div className="row p-4 bg-green py-5">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 my-4 ">
          <div className="d-flex">
          <img
            src={logo}
            alt="logo heart"
            className="logo-tricare rotate mb-lg-2 mb-2"
          />
          <h2 className="text-white text-start">
            Tricare <span className="secondary">Accepted</span>{" "}
          </h2>
          </div>
          <p className=" accent text-start text-lg ">
            Great news! We are in-network with Tricare. Active duty, please have
            your referral made to{" "}
            <span className="text-white">The Lemich Clinic</span>. Dependents
            and retirees, no referral is needed. Just make an appointment, and
            we’ll take care of the rest.{" "}
          </p>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
}

export default Tricare;

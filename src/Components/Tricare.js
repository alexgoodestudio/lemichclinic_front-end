import React from "react";
import logo from "./images/logo3.png";
import "../style.css";

function Tricare() {
  return (
    <div className="container-fluid position-relative">
      <div className="row p-4 bg-tricare1 position-relative">
        <div className="col-lg-4">
        <div className="huge-text container-fluid hideMobile"></div>

        </div>
        <div className="col-lg-4 py-5">
          <div className="d-flex align-items-center">
            <img
              src={logo}
              alt="logo heart"
              className="logo-tricare rotate mb-lg-2 mb-2"
            />
            <h2 className="text-white text-start">
              Tricare <span className="secondary">Accepted</span>
            </h2>
          </div>
          <p className="text-white text-start text-md">
            Great news! We are in-network with Tricare. Active duty, please have
            your referral made to{" "}
            <span className="accent">The Lemich Clinic</span>. Dependents
            and retirees, no referral is needed. Just make an appointment, and
            we’ll take care of the rest.
          </p>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
}

export default Tricare;
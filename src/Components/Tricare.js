import React from "react";
// import logo from "./images/logo3.png";
import check from "./images/check.png";

import "../style.css";

function Tricare() {
  return (
    <div className="container-fluid position-relative">
      <div className="row p-4 bg-tricare1 position-relative py-5">
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
            
            <img src={check} alt="check mark" className="check-tricare mb-2 rotate "/>
            <h2 className="text-white tricare-header tomorrow ">
            TRICARE <span className="accent">&nbsp;ACCEPTED&nbsp;</span>
            </h2>
          </div>
          <p className="text-white text-start text-md border-left p-md-4 p-">
            <span className="barlow text-lg">Great news! We are in-network with TRICARE.</span><br/><br/>
             Active duty, please have
            your referral made to{" "}
            <span className="spaced-underline">The Lemich Clinic</span>. Dependents
            and retirees, no referral is needed. Just make an appointment, and
            we’ll take care of the rest.
          </p>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
}

export default Tricare;
import React from "react";
import "../style.css";

function Tricare() {
  return (
    <div className="container-fluid ">
      <div className="row p-4 blueCombo py-5">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 my-4">
          <h2 className="text-white text-start">Tricare Accepted</h2>
          <p className=" text-white text-start ppneue text-lg ">
          Great news! We are in-network with Tricare. Active duty, please have your referral made to The Lemich Clinic. Dependents and retirees, no referral is needed. Just make an appointment, and we’ll take care of the rest.          </p> 
          </div>
          <div className="col-lg-4"></div>
       
      </div>
    </div>
  );
}

export default Tricare;

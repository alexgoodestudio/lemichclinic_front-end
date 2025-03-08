import React from "react";
import "../style.css";
// import img from "./images/Tricare.3.png"

function Tricare() {
  return (
    <div className="container-fluid ">
      
      <div className="row p-4 blueCombo ">
        
          <div className="col-lg-4"></div>
          <div className="col-lg-4 my-4">
           
          {/* <img src={img} alt="tricare logo" className="mb-5 tricare"/> */}
          <h2 className="text-white text-start">Tricare Accepted</h2>
          <p className=" text-white text-start">
          Great news! We are in-network with Tricare. Active duty, please have your referral made to The Lemich Clinic. Dependents and retirees, no referral is needed. Just make an appointment, and we’ll take care of the rest.          </p> 
          </div>
          <div className="col-lg-4"></div>
       
      </div>
    </div>
  );
}

export default Tricare;

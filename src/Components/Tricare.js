import React from "react";
import "../style.css";
import img from "./images/Tricare.3.png"

function Tricare() {
  return (
    <div className="container-fluid ">
      
      <div className="row p-4 bg-slate-500 ">
        
          <div className="col-lg-4"></div>
          <div className="col-lg-4 my-4">
           
          <img src={img} alt="tricare logo" className="mb-4 tricare"/>
      
          <p className=" text-white">
          Got <span className="bold">Tricare</span>? Great! We are <span className="italics">in-network</span>. Active duty, please have your referral made to The Lemich Clinic. Dependents and retirees, no referral is needed. Just make an appointment, and we will do the rest.
          </p> 
          </div>
          <div className="col-lg-4"></div>
       
      </div>
    </div>
  );
}

export default Tricare;

import React from "react";
import "../style.css";

function Tricare() {
  return (
    <div className="container-fluid ">
      <div className="row p-4 bg-slate-500 text-white ">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 my-4">
          <h2 className="mb-4 ivy  tracking-wide">
          ✺ GOT TRICARE?
          </h2>
          <p className="">
          Great! We are <span className="italics">in-network</span>. Active duty, please have your referral made to The Lemich Clinic. Dependents and retirees, no referral is needed. Just make an appointment, and we will do the rest.
          </p> 
          </div>
          <div className="col-lg-4"></div>
       
      </div>
    </div>
  );
}

export default Tricare;

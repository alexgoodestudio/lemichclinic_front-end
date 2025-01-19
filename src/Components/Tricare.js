import React from "react";
import "../style.css";

function Tricare() {
  return (
    <div className="container-fluid ">
      <div className="row mt-10 flex  justify-center">
        <div className="col-lg-12 bg-slate-500 text-white p-10 rounded-lg shadow-2xl">
          <h1 className="text-4xl  thin  mb-6 text-center tracking-wide">
            GOT <span className="font-extrabold">TRICARE?</span>
          </h1>
          <p className="text-xl mb-6 thin text-center">
            <span className="font-bold  decoration-2 decoration-white">
              Great!
            </span>{" "}
            We are in-network.
          </p>
          <div className="space-y-5 thin">
            <p className="text-lg">
              <span className="font-semibold">Active duty:</span>{" "}
              Please have your referral made to{" "}
              <span className="italic font-medium">The Lemich Clinic</span>.
            </p>
            <p className="text-lg">
              <span className="font-semibold">
                Dependents and retirees:
              </span>{" "}
              No referral is needed. Just make an appointment, and we will do
              the rest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tricare;

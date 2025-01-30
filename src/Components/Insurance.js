import React from "react";
import "../style.css";
import runner from "./images/hike.jpg";

function Insurance() {
  return (
    <div className="min-h-screen  flex flex-col">
      <div className="blueCombo py-lg-3 px-lg-5  py-2 pt-4 px-4  text-start">
        <p className="pb-1 ms-lg-5 mt-3 thin-insurance-body">
          Find the best payment and insurance options to fit your needs.
        </p>
      </div>

      {/* Image Section */}
      <div className="  flex-grow  ">
        <div className="row">
          {/* Image Column */}
          <div className="col-lg-6 col-md-12">
              <img
                src={runner}
                alt="Hiker"
                className="img-fluid  "
              />
            </div>


          {/* Text Content Column */}
          <div className="col-lg-5 text-start p-5 col-md-12 mt-sm-5 mt-lg-3">
            <h2 className="text-2xl font-semibold mb-3 ">Active Duty</h2>
            <ul className="list-unstyled text-gray-700 mb-5">
              <li>
                <strong>Tricare:</strong> Must have an active referral on file
                for counseling prior to scheduling.
              </li>
              <li>
                <strong>Private Pay Options:</strong> If you would prefer the
                highest level of confidentiality, we can work with you on a
                private pay option. Prices vary by clinician and session length.
              </li>
            </ul>
            <br />

            <h2 className="text-2xl font-semibold mb-3">
              Veterans and Dependents
            </h2>
            <ul className="text-start list-unstyled text-gray-700">
              <li>
                <strong>Tricare:</strong> A referral is not required for Tricare
                Prime or Select. Provide your benefits number when completing
                your New Client Paperwork.
              </li>
              <li>
                <strong>Veterans Affairs:</strong> A referral is required from
                the VA prior to scheduling.
              </li>
              <li>
                <strong>Other Insurance:</strong> Veterans with insurance other
                than Tricare, call our clinic to inquire about in-network
                benefits.
              </li>
              <li>
                <strong>Private Pay Options:</strong> If you would prefer the
                highest level of confidentiality, we can work with you on a
                private pay option. Prices vary by clinician and session length.
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-200 row">
       <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      </div>
    </div>
  );
}

export default Insurance;

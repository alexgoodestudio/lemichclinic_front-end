import React from "react";
import "../style.css";
import happy from "./images/stretch.png";


function Insurance() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Content Section */}
      <div className="flex-grow py-10 container">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <img
              src={happy}
              alt="Calm scene"
              className="img-fluid insurance-image "
            />
          </div>

          {/* Text Content Column */}
          <div className="col-lg-6 text-start col-md-12">
            <div className="blueCombo py-lg-4 px-5 mb-5 text-start  rounded">
              <h2 className="text-3xl mb-1">
                Insurance <span className="">and</span> Payment Options
              </h2>
              <p className="pb-2">
                -Explore our payment options to find the best fit for your needs.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-3">Active Duty</h2>
            <ul className="list-unstyled text-gray-700 mb-5">
              <li>
                <strong>Tricare:</strong> Must have an active referral on file
                for counseling prior to scheduling.
              </li>
              <li>
                <strong>Private Pay Options:</strong> If you would prefer the
                highest level of confidentiality, we can work with you on a
                private pay option. Prices vary by clinician and session
                length.
              </li>
            </ul>
            <br />

            <h2 className="text-2xl font-semibold mb-3">Veterans and Dependents</h2>
            <ul className="text-start list-unstyled text-gray-700">
              <li>
                <strong>Tricare:</strong> A referral is not required for
                Tricare Prime or Select. Provide your benefits number when
                completing your New Client Paperwork.
              </li>
              <li>
                <strong>Veterans Affairs:</strong> A referral is required from
                the VA prior to scheduling.
              </li>
              <li>
                <strong>Other Insurance:</strong> Veterans with insurance
                other than Tricare, call our clinic to inquire about
                in-network benefits.
              </li>
              <li>
                <strong>Private Pay Options:</strong> If you would prefer the
                highest level of confidentiality, we can work with you on a
                private pay option. Prices vary by clinician and session
                length.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insurance;

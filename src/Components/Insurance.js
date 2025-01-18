import React from "react";
import "../style.css";
import happy from "./images/happy.png";


function Insurance() {
  return (
    <div className=" py-10">
      {/* Header Section */}
      <div className="container mx-auto text-start mb-8">
        <h1 className="text-4xl thin mb-3">Insurance  /  Payment</h1>
        <p className="text-gray-600 text-lg">
          Explore our payment options to find the best fit for your needs.
        </p>
        <br />
      </div>

      {/* Content Section */}
      <div className="container">
        <div className="row align-items-center gx-4">
          {/* Image Column */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <img
              src={happy}
              alt="Calm scene"
              className="img-fluid w-75"
            />
          </div>

          {/* Text Content Column */}
          <div className="col-lg-6 text-start col-md-12">
            <div className="p-4 rounded">
              <h2 className="text-2xl font-semibold mb-3">Active Duty</h2>
              <ul className="list-unstyled text-gray-700 mb-4">
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

              <h2 className="text-2xl font-semibold mb-3">
                Veterans and Dependents
              </h2>
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
    </div>
  );
}

export default Insurance;

import React from "react";
import "../style.css"

function Insurance() {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="row mb-5">
        <div className="col-12">
          <h1 className="text-center text-4xl font-bold underline decoration-sky-500 mb-3 ivy">Insurance / Payment</h1>
          <p className="text-center text-gray-600">
            Explore our payment options to find the best fit for your needs.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="row">
        {/* Active Duty Section */}
        <div className="col-lg-6 mb-4">
          <div className="bg-slate-100 p-4 rounded shadow-lg">
            <h2 className="text-2xl font-semibold text-sky-600 mb-3 ">Active Duty</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li className="mb-2">
                <strong>Tricare:</strong> Must have an active referral on file
                for counseling prior to scheduling.
              </li>
              <li className="mb-2">
                <strong>Private Pay Options:</strong> If you would prefer the
                highest level of confidentiality, we can work with you on a
                private pay option. Prices vary by clinician and session length.
              </li>
            </ul>
          </div>
        </div>

        {/* Veterans and Dependents Section */}
        <div className="col-lg-6 mb-4">
          <div className="bg-slate-200 p-4 rounded shadow-lg">
            <h2 className="text-2xl font-semibold text-sky-600 mb-3">Veterans and Dependents</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li className="mb-2">
                <strong>Tricare:</strong> A referral is not required for Tricare
                Prime or Select. Provide your benefits number when completing
                your New Client Paperwork.
              </li>
              <li className="mb-2">
                <strong>Veterans Affairs:</strong> A referral is required from
                the VA prior to scheduling.
              </li>
              <li className="mb-2">
                <strong>Other Insurance:</strong> Veterans with insurance other
                than Tricare, call our clinic to inquire about in-network
                benefits.
              </li>
              <li className="mb-2">
                <strong>Private Pay Options:</strong> If you would prefer the
                highest level of confidentiality, we can work with you on a
                private pay option. Prices vary by clinician and session length.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Active Duty TRICARE Referrals Section */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="bg-slate-300 p-4 rounded shadow-lg">
            <h2 className="text-2xl font-semibold text-sky-600 mb-3">Active Duty TRICARE Referrals</h2>
            <p className="text-gray-700 mb-2">
              Are you Active Duty and not able to see your PCM quickly to get a
              referral? Active Duty members may present to the Care Connect
              station at the Behavioral Health Department in Building 3 at NMCP
              to meet with a Behavioral Health Technician to get a referral for
              mental health counseling.
            </p>
            <p className="text-gray-700 mb-2">
              The Care Connect station is open <strong>Monday-Friday</strong>{" "}
              from <strong>8:30 AM to 10:30 AM</strong>. Once the referral is
              created, the service member will need to call Tricare to have the
              provider updated to The Lemich Clinic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insurance;

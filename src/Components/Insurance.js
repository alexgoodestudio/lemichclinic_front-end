import React from "react";
import "../style.css";

function Insurance() {
  return (
    <div className="bg-gray-100 py-10">
      {/* Header Section */}
      <div className="container mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold underline decoration-sky-500 mb-4">
          Insurance / Payment
        </h1>
        <p className="text-gray-600 text-lg">
          Explore our payment options to find the best fit for your needs.
        </p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
        {/* Active Duty Section */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-sky-600 mb-4">Active Duty</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              <strong>Tricare:</strong> Must have an active referral on file for
              counseling prior to scheduling.
            </li>
            <li>
              <strong>Private Pay Options:</strong> If you would prefer the
              highest level of confidentiality, we can work with you on a
              private pay option. Prices vary by clinician and session length.
            </li>
          </ul>
        </div>

        {/* Veterans and Dependents Section */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-sky-600 mb-4">
            Veterans and Dependents
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              <strong>Tricare:</strong> A referral is not required for Tricare
              Prime or Select. Provide your benefits number when completing your
              New Client Paperwork.
            </li>
            <li>
              <strong>Veterans Affairs:</strong> A referral is required from the
              VA prior to scheduling.
            </li>
            <li>
              <strong>Other Insurance:</strong> Veterans with insurance other
              than Tricare, call our clinic to inquire about in-network benefits.
            </li>
            <li>
              <strong>Private Pay Options:</strong> If you would prefer the
              highest level of confidentiality, we can work with you on a
              private pay option. Prices vary by clinician and session length.
            </li>
          </ul>
        </div>
      </div>

      {/* Active Duty TRICARE Referrals Section */}
      <div className="container mx-auto mt-10 px-4">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-sky-600 mb-4">
            Active Duty TRICARE Referrals
          </h2>
          <p className="text-gray-700 mb-4">
            Are you Active Duty and not able to see your PCM quickly to get a
            referral? Active Duty members may present to the Care Connect
            station at the Behavioral Health Department in Building 3 at NMCP
            to meet with a Behavioral Health Technician to get a referral for
            mental health counseling.
          </p>
          <p className="text-gray-700">
            The Care Connect station is open <strong>Monday-Friday</strong>{" "}
            from <strong>8:30 AM to 10:30 AM</strong>. Once the referral is
            created, the service member will need to call Tricare to have the
            provider updated to The Lemich Clinic.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Insurance;

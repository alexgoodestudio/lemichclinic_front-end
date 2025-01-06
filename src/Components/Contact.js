import React from "react";
import "../style.css";

function Contact() {
  return (
    <div className="bg-gray-100 py-10">
      {/* Header Section */}
      <div className="container mx-auto text-center mb-10 px-4">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Reach out to us for session requests, inquiries, or business collaborations.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
        {/* General Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Session Requests & Inquiries
          </h2>
          <div className="text-gray-700 space-y-3">
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:757-536-1233" className="text-blue-500 hover:underline">
                757-536-1233
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@lemichclinic.org" className="text-blue-500 hover:underline">
                info@lemichclinic.org
              </a>
            </p>
            <p>
              <strong>Address:</strong> 5205 Colley Ave, Norfolk, VA 23508
            </p>
          </div>
        </div>

        {/* Location Information */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Location</h2>
          <p className="text-gray-700">
            We are located <strong>4 miles south of Naval Station Norfolk</strong> and{" "}
            <strong>2 blocks from ODU</strong>.
          </p>
        </div>

        {/* Business Requests */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Business Requests</h2>
          <p className="text-gray-700">
            For business inquiries, email Dr. Gregory Lemich at{" "}
            <a href="mailto:info@lemichclinic.org" className="text-blue-500 hover:underline">
              info@lemichclinic.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

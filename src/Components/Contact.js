import React from "react";
import "../style.css"


function Contact() {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="row mb-5">
        <div className="col-12">
          <h1 className="text-center text-4xl font-bold mb-3 ivy">Contact Us</h1>
          <p className="text-center text-gray-600">
            Reach out to us for session requests, inquiries, or business collaborations.
          </p>
        </div>
      </div>

      {/* General Contact Information */}
      <div className="row mb-5">
        <div className="col-lg-6 mx-auto">
          <div className="bg-slate-100 p-4 rounded shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">For Session Requests and Client Inquiries:</h2>
            <div className="text-gray-700">
              <p className="mb-2">
                <strong>Phone:</strong>{" "}
                <a href="tel:757-536-1233" className="text-blue-500 hover:underline">
                  757-536-1233
                </a>
              </p>
              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:info@lemichclinic.org" className="text-blue-500 hover:underline">
                  info@lemichclinic.org
                </a>
              </p>
              <p className="mb-2">
                <strong>Address:</strong> 5205 Colley Ave, Norfolk, VA 23508
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Location Information */}
      <div className="row mb-5">
        <div className="col-lg-6 mx-auto">
          <div className="bg-slate-200 p-4 rounded shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">Location</h2>
            <p className="text-gray-700">
              We are located <strong>4 miles south of Naval Station Norfolk</strong> and{" "}
              <strong>2 blocks from ODU</strong>. 
            </p>
          </div>
        </div>
      </div>

      {/* Business Requests */}
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="bg-slate-300 p-4 rounded shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">For Business Requests</h2>
            <p className="text-gray-700">
              Email Dr. Gregory Lemich at{" "}
              <a href="mailto:info@lemichclinic.org" className="text-blue-500 hover:underline">
                info@lemichclinic.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

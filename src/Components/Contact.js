import React from "react";
import "../style.css";
import "../utils/api"

function Contact() {
  return (
    <div className="bg-gray-100 py-10">
      {/* Contact Form Section */}
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Contact Us</h1>

      <div className="container mx-auto mb-10 px-4">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-start">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Leave Us a Message</h2>
          <form className="space-y-4">
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label text-gray-700 font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label text-gray-700 font-medium" htmlFor="">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label text-gray-700 font-medium" htmlFor="">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-gray-700 font-medium" htmlFor="ge">
                Message
              </label>
              <textarea
                id="message"
                className="form-control"
                rows="4"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary px-6 py-2 shadow-md hover:shadow-lg transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Header Section */}
      <div className="container mx-auto text-center mb-10 px-4">
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

import React from "react";
import img1 from "./images/1.avif"
import img2 from "./images/2.avif"
import img3 from "./images/3.avif"
import "../style.css";

function Services() {
  return (
    <div className="container  py-5">
      {/* Header Section */}
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="text-start text-4xl thin">Our Services</h1>
        </div>
      </div>

      {/* Description Section */}
      <div className="row mb-5">
        <div className="col-lg-12">
          <p className="text-justify ">
            For current clients, we have a selection of services provided by our
            team to support you in your journey to better mental health. Prices
            and availability may vary, so please talk to our office staff about
            options for you.
          </p>
        </div>
      </div>

      {/* Services Cards Section */}
      <div className="row">
        {/* Card 1 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="bg-slate-50 p-4 rounded shadow-lg text-center">
            <img
              src={img1}
              alt="Service 1"
              className="w-full h-auto mb-3 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">Individual Therapy</h3>
            <p>
              Work one-on-one with a therapist to address personal challenges,
              improve mental health, and achieve your goals.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="bg-slate-50 p-4 rounded shadow-lg text-center">
            <img
              src={img2}
              alt="Service 2"
              className="w-full h-auto mb-3 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">Couples Therapy</h3>
            <p>
              Strengthen your relationship with the guidance of a skilled
              therapist who specializes in couple dynamics and communication.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="bg-slate-50 p-4 rounded shadow-lg text-center">
            <img
              src={img3}
              alt="Service 3"
              className="w-full h-auto mb-3 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">Group Therapy</h3>
            <p>
              Join a supportive group setting to share experiences and gain
              insights from others with similar challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

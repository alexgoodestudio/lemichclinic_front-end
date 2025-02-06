import React from "react";
import img1 from "./images/1.avif";
import img2 from "./images/2.avif";
import img3 from "./images/3.avif";
import { useEffect } from "react";
import "../style.css";

function Services() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container py-5 flex-grow-1">
        {/* Header Section */}
        <div className="row mb-3">
          <div className="col-12">
            <h2 className="text-4xl mb-4 text-start text-gray-800 mb-1">
              Exclusive Services.
            </h2>
          </div>
        </div>

        {/* Description Section */}
        <div className="row">
          <div className="col-lg-12">
            <p className="text-justify mb-4 text-lg text-gray-600 border rounded bg-slate-100 p-4">
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
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="service-card">
              <img src={img1} alt="Service 1" className="service-image" />
              <div className="service-overlay1">
                <h3 className="text-white text-xl font-semibold mb-2">Summary Letters</h3>
                <br/>
                <p className="text-white text-start">
                  Only for Active Duty Military Service Members.
                  This letter will outline the diagnosis that the client has, confirm and give a brief description of their session attendance, and give advice and confirmation of their clinical needs.
                  PRICE: $40/letter
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="service-card">
              <img src={img2} alt="Service 2" className="service-image" />
              <div className="service-overlay2">
                <h3 className="text-white text-xl font-semibold mb-2">NEXUS Letters</h3>
                <br/>
                <p className="text-white text-start">
                  Only for Veterans who have been out of Active Duty Military Service for more than one year.
                  This letter is a compilation of your medical history that explains the connection between current medical condition(s) and military service.
                  PRICE: $180/letter
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="service-card">
              <img src={img3} alt="Service 3" className="service-image" />
              <div className="service-overlay3">
                <h3 className="text-white text-xl font-semibold mb-2">Group Therapy</h3>
                <br/>
                <ul className="text-white text-start ul li">
                  <li>Active Duty Females: Fridays 9am - 10am</li>
                  <li>Military Spouse Support: Thursdays 4pm - 5pm</li>
                  <li>Couples Counseling: Every other Thursday 5pm - 6:30pm</li>
                  <li>Betrayed Partners: Mondays 12pm - 1pm</li>
                  <li>Men's Relationship Skills: Every other Thursday 5pm - 6:30pm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

import React from "react";
import img1 from "./images/1.avif";
import img2 from "./images/2.avif";
import img3 from "./images/3.avif";
import Footer from "../Footer";
import { FaUserAlt, FaUsers, FaHeart } from "react-icons/fa"; // Importing icons
import "../style.css";


function Services() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container py-5 flex-grow-1">
        {/* Header Section */}
        <div className="row mb-3">
          <div className="col-12">
          <h2 className=" text-4xl text-start text-gray-800 mb-1">
        Our Services
      </h2>          
      </div>
        </div>

        {/* Description Section */}
        <div className="row">
          <div className="col-lg-12">
            <p className="text-justify mb-4 text-lg text-gray-600">
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
          <div className="col-lg-4 col-md-6  mb-3">
            <div className="service-card">
              <img src={img1} alt="Service 1" className="service-image" />
              <div className="service-overlay1">
                <FaUserAlt className="text-white text-4xl mb-3" />
                <h3 className="text-white text-xl font-semibold mb-2">Individual Therapy</h3>
                <p className="text-white">
                  Work one-on-one with a therapist to address personal challenges,
                  improve mental health, and achieve your goals.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="service-card">
              <img src={img2} alt="Service 2" className="service-image" />
              <div className="service-overlay2">
                <FaHeart className="text-white text-4xl mb-3" />
                <h3 className="text-white text-xl font-semibold mb-2">Couples Therapy</h3>
                <p className="text-white">
                  Strengthen your relationship with the guidance of a skilled
                  therapist who specializes in couple dynamics and communication.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="service-card">
              <img src={img3} alt="Service 3" className="service-image" />
              <div className="service-overlay3">
                <FaUsers className="text-white text-4xl mb-3" />
                <h3 className="text-white text-xl font-semibold mb-2">Group Therapy</h3>
                <p className="text-white">
                  Join a supportive group setting to share experiences and gain
                  insights from others with similar challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Services;

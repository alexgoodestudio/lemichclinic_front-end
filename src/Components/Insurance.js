import React from "react";
import "../style.css";
import run from "./images/new_creek.jpg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Helmet } from "react-helmet";


function Insurance() {
  const logoRef = useRef(null); // Reference for the logo

  useEffect(() => {
      window.scrollTo(0, 0);

      gsap.fromTo(
          logoRef.current, 
          { opacity: 0 }, 
          { opacity: 1, duration: 2, ease: "power2.out" }
      );
  }, []);
  return (
    <div className="flex flex-col bg-slate-50">
                  <Helmet>
                    <meta
                      name="description"
                      content="Payment and Insurance Options at The Lemich Clinic | Tricare | Experts in mental health services for veterans and active duty military in Norfolk, VA."
                    />
                    <title> Payment and Insurance Options | Norfolk, VA | Tricare Accepted | Military Mental Health Services</title>
                  </Helmet>
      <div className="bg-green text-white py-lg-3 px-lg-5  py-1 pt-2 px-2 d-flex text-justify ">
        
        <h1 className=" pb-1 mt-3 thin-insurance-body text-white flex text-insurance-header-mobile ms-lg-5">
        Find the best payment and insurance options to fit your needs.
        </h1>
      </div>

      {/* Image Section */}
      <div className="">
        <div className="row">
          {/* Image Column */}
          <div className="col-lg-6 col-md-12 ">
              <img
                ref={logoRef} 
                src={run}
                alt="Calm, Soothing Water"
                className="img-fluid"
              />
            </div>


          {/* Text Content Column */}
          <div className="col-lg-6 text-sm text-justify p-4 col-md-12 ">
            <h2 className="text-2xl font-semibold mb-3 ">Active Duty</h2>
            <ul className=" text-gray-700 me-lg-5 me-4">
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
            <br />

            <h2 className="text-2xl font-semibold mb-3">
              Veterans and Dependents
            </h2>
            <ul className="text-justify  text-gray-700 me-lg-5 me-4">
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
            <div className="mt-5 m-4 border rounded bg-slate-100 p-3">
              Are you Active Duty and not able to see your PCM quickly to get a referral? AD may present to the Care Connect station at the Behavioral Health Department in Building 3 at NMCP to meet with a Behavioral Health Technician to get a referral for mental health counseling. The Care Connect station is open Monday-Friday from 8:30-10:30. Once the referral is created, the service member will need to call Tricare to have the provider updated to The Lemich Clinic.
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insurance;

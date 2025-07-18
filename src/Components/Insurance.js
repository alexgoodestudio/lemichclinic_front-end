import React from "react";
import "../style.css";
import run from "./images/new_creek.jpg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Helmet } from "react-helmet";
import { HiOutlineShieldCheck } from "react-icons/hi";

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

      {/* Image Section */}
      <div className="">
      <div className="bg-slate-300  text-black  ps-lg-3  py-3   d-flex text-justify ">
      <HiOutlineShieldCheck className="text-black ms-3  me-lg-3 me-1 text-2xl md:text-3xl" />     
          <h1 className=" flex text-4xl barlow insurance-header-text pe-3 ms-2 ms-lg-1 mt-2">
        Payment and Insurance Options
        </h1>
      </div>
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
            <h2 className="text-xl font-semibold mb-3 ">Active Duty</h2>
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

            <h2 className="text-xl font-semibold mb-3">
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

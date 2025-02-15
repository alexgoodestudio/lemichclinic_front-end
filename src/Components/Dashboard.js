import React from "react";
import { useEffect } from "react";
import "../style.css";
import useGsapAnimations from "./animations/useGsapAnimations.js";
import Tricare from "./Tricare.js";
import HoverExpand from "./HoverExpand.js";
import Video from "./images/stream2.mp4";
import logo from "./images/newlogo.png";
import { gsap } from "gsap";

function Dashboard() {
  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.fromTo(
      ".bg-overlay",
      { opacity: 0 },
      { opacity: 1, duration: 0, delay: 0, ease: "power2.out" }
    );
  }, []);

  useGsapAnimations([
    {
      trigger: ".slide",
      config: {
        start: "top 80%",
        props: { opacity: 0, y: 50, duration: 1.2 },
      },
    },
    {
      trigger: ".shadow",
      config: {
        start: "top 90%",
        props: { opacity: 0, scale: 0.9, duration: 1, stagger: 0.2 },
      },
    },
  ]);

  return (
    <div className="bg-slate-50 overflow-hidden">
      <div className="row  align-items-center background-section">
        <video autoPlay muted loop playsInline className="video-background ">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="col-lg-6 col-12 relative h-full flex justify-center items-center">
          <div className="absolute inset-0 backdrop-blur-lg border-right-white bg-opacity-40"></div>
          <h1 className="relative  z-10 p-5 ms-4 title text-white ipad mobile-center-text textMobile text-start">
            <div className="d-flex">
            <img src={logo} alt="logo heart" className=" logo rotate mb-lg-3 mb-2" />
            <h1 className="align-content-center ms-3 branch TLC">The Lemich Clinic</h1>
            </div>
            <div className="spacer ">
              THE HOME OF&nbsp;
              
              <HoverExpand
                triggerText="MILITARY MENTAL HEALTH"
                expandedContent={
                  <p className="small">
                    Our military mental health services are designed to support
                    active duty, spouses, and retirees with specialized care.
                  </p>
                }
              />
         
              
            </div>

            <div className="btn phone-button mobile-top-margin text-center my-lg-4 my-md-3 my-sm-1 my-xs-1 flex items-center">
              <i className="fas fa-phone-alt text-md"></i>
              <a href="tel:+17575361233" className="phone-link mobile-bold">
                <span className="hideMobile">&nbsp;</span> Call Now
                <span className="hideMobile small2">&nbsp;+1 (757) 536-1233 </span>
              </a>
            </div>
          </h1>
        </div>
        <div className="col-lg-6 col-12  forward">
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-4 bg-slate-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 p-4 rounded">
              <h1 className="mb-3 ivy underline2">Our Mission</h1>

              <p className="text-justify">
                The Lemich Clinic for Military Mental Health was founded on the
                belief that everyone who serves should have access to high
                quality, confidential, mental health care. The majority of our
                clients are active duty sailors at Naval Station Norfolk. We
                also see service members from the other military installations
                in Virginia. We also work with military spouses and recent
                veterans. If you are a first responder or outside the military,
                contact us to see if you qualify for our program.
              </p>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>


      {/* Features Section */}
      <div className="bg-slate-100">
        <div className="container px-5 mb-5">
          <div className="row text-center">
            <div className="col-lg-3 col-12 bg-slate-100 p-4 rounded shadow">
              <div className="mb-4">
                <i className="fas fa-user-circle fa-3x text-gray-600"></i>
              </div>
              <h2 className="text-xl font-semibold mb-3 ivy">Personalized</h2>
              <p>
                You are matched with a therapist that fits your needs and style.
                We take the time to get to know you to make the right pairing.
                If we cannot make this determination before you arrive, we will
                spend the time with you during an intake to find your match.
              </p>
            </div>
            <div className="col-lg-3 col-12 bg-slate-200 p-4 rounded shadow">
              <div className="mb-4">
                <i className="fas fa-layer-group fa-3x text-gray-600"></i>
              </div>
              <h2 className="text-xl font-semibold mb-3 ivy">Varied</h2>
              <p>
                We have a large variety of clinician specialties to take care of
                your needs. A few of these include trauma, suicidal ideations,
                major depression, anxiety, anger, OCD, and perinatal concerns.
              </p>
            </div>
            <div className="col-lg-3 col-12 bg-slate-300 p-4 rounded shadow">
              <div className="mb-4">
                <i className="fas fa-flag fa-3x text-gray-600"></i>
              </div>
              <h2 className="text-xl font-semibold mb-3 ivy">Specialized</h2>
              <p>
                As most of our clients are on active duty, we also specialize in
                military-specific concerns. Some of these struggles include PCS
                issues, relationship strains from work-ups and deployments,
                grief over fallen friends, and civilian transitioning.
              </p>
            </div>
            <div className="col-lg-3 col-12 bg-slate-400 p-4 rounded shadow">
              <div className="mb-4">
                <i className="fas fa-file-alt fa-3x text-gray-600"></i>
              </div>
              <h2 className="text-xl font-semibold mb-3 ivy">Prepared</h2>
              <p>
                Our owner, Dr. Lemich, is well-versed in military and VA
                paperwork. As such, we can assist with LIMDU, Med Board, VA, and
                Security Clearance paperwork if medically necessary.
              </p>
            </div>
          </div>
        </div>
        <Tricare />
      </div>
    </div>
  );
}

export default Dashboard;

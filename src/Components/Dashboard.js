import React from "react";
import "../style.css";
import useGsapAnimations from "./animations/useGsapAnimations.js";
import Tricare from "./Tricare.js";
import HoverExpand from "./HoverExpand.js";
import Video from "./images/3151442-uhd_4096_2160_24fps.mp4"

function Dashboard() {

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
      {/* <h1 className="p-1">The Lemich Clinic</h1> */}
      {/* Background Section */}
      <div className="row align-items-center fullscreen background-section">
        <video autoPlay muted loop className="video-background">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="col-lg-5 offset-6 text-start text-white p-lg-3">
          
          <h1 className="display-3 mobile-shrink shadowBox rounded2 textLeft textMobile slide p-lg-5">

            THE HOME OF
            <br />
            <HoverExpand
              triggerText="MILITARY"
              expandedContent={
                <p>
                  Our military mental health services are designed to
                  support active duty, dependents, and retirees with
                  specialized care.
                </p>
              }
            />
            <br /> MENTAL HEALTH.
            <br />
            <div className="btn phone-button p-lg-3  flex items-center gap-2">
              <i className="fas fa-phone-alt hideMobile text-xl"></i>
              <a href="tel:+18044820516" className="phone-link font-bold">
                &nbsp; CALL NOW! <span className="hideMobile">757-536-1233</span>
              </a>
            </div>
          </h1>
        </div>
        <h1 className="bottom-left-text text-start mb-3">The Lemich Clinic</h1>      
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

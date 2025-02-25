import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../style.css";
import Tricare from "./Tricare.js";
import HoverExpand from "./HoverExpand.js";
import Video from "./images/stream2.mp4";
import logo from "./images/newlogo.png";
import { TextPlugin } from "gsap/TextPlugin";  

function Dashboard() {
  const titleRef = useRef(null);
  gsap.registerPlugin(TextPlugin);  

  useEffect(() => {
    window.scrollTo(0, 0);

    // Set the initial text and visibility
    gsap.set(".title2", { text: "The Lemich Clinic", opacity: 1 });
    const textTimeline = gsap.timeline({ repeat: -1, yoyo: false, onComplete: () => textTimeline.restart() });

    textTimeline
    .to(".title2", { opacity: 1, duration: 1, delay: 2 }) // Initial text stays for 4 seconds
    .to(".title2", { opacity: 0, blur: 5, duration: 1.5 }) // Fade out and blur
    .to(".title2", { opacity: 0, text: "Take A Deep Breath", blur: 0, duration: 0 }) // Set next text instantly
    .to(".title2", { opacity: 1, duration: 1 }) // Fade in new text
    .to(".title2", { opacity: 1, duration: 3 }) // Keep the text visible for 3 seconds
    .to(".title2", { opacity: 0, blur: 5, duration: 1.5 }) // Fade out and blur again
    .to(".title2", { opacity: 0, text: "Find Your Calm", blur: 0, duration: 0 }) // Set next text instantly
    .to(".title2", { opacity: 1, duration: 1 }) // Fade in new text
    .to(".title2", { opacity: 1, duration: 3 }) // Keep the text visible for 3 seconds
    .to(".title2", { opacity: 0, blur: 5, duration: 1.5 }) // Fade out and blur again
    .to(".title2", { opacity: 0, text: "Trust the Process", blur: 0, duration: 0 }) // Set next text instantly
    .to(".title2", { opacity: 1, duration: 1 }) // Fade in new text
    .to(".title2", { opacity: 1, duration: 3 }) // Keep the text visible for 3 seconds
    .to(".title2", { opacity: 0, blur: 5, duration: 1.5 }); // Final fade out
  }, []);
  return (
    <div className="bg-slate-50 overflow-hidden">
      <div className="row align-items-center background-section">
        <video autoPlay muted loop playsInline className="video-background ">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="col-lg-6 col-12 relative h-full flex justify-center items-center">
          <div className="absolute inset-0 bg-opacity-40"></div>
          <h1
            ref={titleRef}
            className="relative z-10 p-5 slide-text margin-left-home title text-white ipad mobile-center-text textMobile text-start"
          >
            <div className="d-flex">
              <img
                src={logo}
                alt="logo heart"
                className="logo rotate mb-lg-3 mb-2"
              />
              <h1 className="align-content-center branch TLC title2">The Lemich Clinic</h1>
            </div>
            <div className="spacer d-flex ">
              HOME OF&nbsp;
              <HoverExpand
                triggerText="MILITARY MENTAL"
                expandedContent={
                  <p className="small">
                    Our military mental health services are designed to support
                    active duty, spouses, and retirees with specialized care.
                  </p>
                }
              />
              &nbsp;HEALTH
            </div>

            <div className="btn phone-button mt-4 mobile-top-margin text-center my-lg-4 my-md-3 my-sm-1 my-xs-1 flex items-center">
              <i className="fas fa-phone-alt text-md "></i>
              <a href="tel:+17575361233" className="phone-link mobile-bold ">
                <span className="hideMobile">&nbsp;</span>{" "}
                <span className="">Call Now</span>
                <span className="hideMobile ">&nbsp;+1 (757) 536-1233 </span>
              </a>
            </div>
          </h1>
        </div>
        <div className="col-lg-6 col-12 forward"></div>
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

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../style.css";
import Tricare from "./Tricare.js";
import HoverExpand from "./HoverExpand.js";
import Video from "./images/stream3.mp4";
import logo from "./images/newlogo.png";
import { TextPlugin } from "gsap/TextPlugin";  
import { Helmet } from "react-helmet";

function Dashboard() {
  const titleRef = useRef(null);
  gsap.registerPlugin(TextPlugin);  

  useEffect(() => {
    window.scrollTo(0, 0);
    
    gsap.set(".title2", { text: "The Lemich Clinic", opacity: 1 });
  
    const textTimeline = gsap.timeline({ repeat: -1, yoyo: false, onComplete: () => textTimeline.restart() });
  
    textTimeline
      .to(".title2", { opacity: 1, duration: 4, delay: 1 }) 
      .to(".title2", { opacity: 0, blur: 5, duration: 1.35 }) 
      .set(".title2", { text: "Take a Deep Breath" }) // Instead of instantly changing text, set it before fading in
      .to(".title2", { opacity: 1, duration: 1.5 })  // Smooth fade-in
      .to(".title2", { opacity: 1, duration: 4 }) 
      .to(".title2", { opacity: 0, blur: 5, duration: 1.35 })
      .set(".title2", { text: "The Lemich Clinic" }) // Add slight delay before fading back in
      .to(".title2", { opacity: 1, duration: 1.8, ease: "power2.out" }); // Smooth fade-in with easing
  
  }, []);
  
  return (
    <div className="bg-slate-50 overflow-hidden">
      <Helmet>
        <meta
          name="description"
          content="The Lemich Clinic in Norfolk, Virginia offers expert mental health care for active duty military, spouses and veterans. Specializing in PTSD treatment, trauma recovery, and anxiety therapy, we provide confidential, compassionate support to help you heal and thrive."
        />
        <title> The Lemich Clinic | Norfolk, VA | Military Mental Health Services </title>
      </Helmet>

      <div className="row align-items-center background-section">
        <video autoPlay muted loop playsInline className="video-background ">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="col-lg-6 col-12 relative h-full flex justify-center items-center">
          <div className="absolute inset-0 bg-opacity-40"></div>
          <h1
            ref={titleRef}
            className="relative z-10 p-5 slide-text margin-left-home text-white ipad mobile-center-text textMobile text-start"
          >
            <div className="d-flex ">
              <img
                src={logo}
                alt="logo heart"
                className="logo rotate mb-lg-2 mb-2"
              />
              <h1 className="align-content-center TLC ppneue-700 title2">THE LEMICH CLINIC</h1>
            </div>
            <div className="sub-head ppneue-200 d-flex">
              HOME&nbsp;
              <HoverExpand
                  triggerText={
                    <>
                     OF MILITARY MENTAL
                    </>
                  }
                  expandedContent={
                    <p className="text-xl">Our military mental health services are designed to support active duty, spouses, and retirees with specialized care in Norfolk, Virginia. </p>
                  }
                />

              &nbsp;HEALTH<span className="hideMobile">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>

            <div className="btn accent-button text-center my-lg-4 my-md-3 my-sm-1 my-xs-1">
              <i className="fas fa-phone-alt text-md accent"></i>
              <a href="tel:+17575361233" className="phone-link mobile-bold ">
                <span className="hideMobile">&nbsp;</span>{" "}
                <span className=" ppneue-med px-1">Call Us</span>
              </a>
            </div>
          </h1>
        </div>
        <div className="col-lg-6 col-12 forward"></div>
      </div>

      {/* Mission Section */}
      <div className="py-4 bg-gray-50">
        <div className="container">
          <div className="row ">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 p-lg-5 p-4">
            
              <h2 className="mb-3 mt-3 text-start green mobile-header-mission">Our Mission</h2>
         
              <p className="text-justify ppneue mission-text ">
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
      <div className="bg-gray-50 pt-3">
        <div className="container mb-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-center">
            <div className="text-center bg-service-cards p-3 border rounded">
              <div className="mb-4 mt-5 ">
                <i className="fas fa-user-circle text-gray-600 fa-2x"></i>
              </div>
              <h2 className="text-xl mb-3 ppneue-med ">Personalized</h2>
              <p className="ppneue text-lg  card-text mb-5">
                You are matched with a therapist that fits your needs and style.
                We take the time to get to know you to make the right pairing.
                If we cannot make this determination before you arrive, we will
                spend the time with you during an intake to find your match.
              </p>
            </div>
            <div className="text-center bg-service-cards p-3 border rounded">
              <div className="mb-4 mt-5 ">
                <i className="fas fa-layer-group text-gray-600 fa-2x"></i>
              </div>
              <h2 className="text-xl mb-3 ppneue-med ">Varied</h2>
              <p className="ppneue text-lg  card-text mb-5">
                We have a large variety of clinician specialties to take care of
                your needs. A few of these include trauma, suicidal ideations,
                major depression, anxiety, anger, OCD, and perinatal concerns.
              </p>
            </div>
            <div className="text-center bg-service-cards p-3 border rounded">
              <div className="mb-4 mt-5 ">
                <i className="fas fa-flag fa-2x text-gray-600"></i>
              </div>
              <h2 className="text-xl mb-3 ppneue-med ">Specialized</h2>
              <p className="ppneue text-lg  card-text mb-5">
                As most of our clients are on active duty, we also specialize in
                military-specific concerns. Some of these struggles include PCS
                issues, relationship strains from work-ups and deployments,
                grief over fallen friends, and civilian transitioning.
              </p>
            </div>
            <div className="text-center bg-service-cards p-3 border rounded">
              <div className="mb-4 mt-5 ">
                <i className="fas fa-file-alt fa-2x text-gray-600"></i>
              </div>
              <h2 className="text-xl mb-3 ppneue-med ">Prepared</h2>
              <p className="ppneue text-lg  card-text mb-5">
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

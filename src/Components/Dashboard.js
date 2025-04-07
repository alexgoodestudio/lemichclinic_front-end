import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";  
import "../style.css";
import Tricare from "./Tricare.js";

import Video from "./images/stream3.mp4";
import logo from "./images/logo.png";
import { TextPlugin } from "gsap/TextPlugin";
import { Helmet } from "react-helmet";
import TricareBackground from "./TricareBackground.js";

function Dashboard() {
  const titleRef = useRef(null);

  const missionRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const [videoLoaded, setVideoLoaded] = useState(false);
  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
    if (videoLoaded) {
      window.scrollTo(0, 0);

      gsap.set(".title2", { text: "The Lemich Clinic", opacity: 1 });

      const textTimeline = gsap.timeline({
        repeat: -1,
        yoyo: false,
        onComplete: () => textTimeline.restart(),
      });

      textTimeline
        .to(".title2", { opacity: 1, duration: 1, delay: 1 })
        .to(".title2", { opacity: 0, blur: 5, duration: 1.35 })
        .set(".title2", { text: "Take a Deep Breath" })
        .to(".title2", { opacity: 1, duration: 1.5 })
        .to(".title2", { opacity: 1, duration: 2.5 })
        .to(".title2", { opacity: 0, blur: 5, duration: 1.35 })
        .set(".title2", { text: "The Lemich Clinic" })
        .to(".title2", { opacity: 1, duration: 1.8, ease: "power2.out" });
    }
    gsap.fromTo(
      missionRef.current,
      {
        x: "100%",
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 90%", // Adjusting start to a bit earlier in the viewport
          end: "bottom 30%", // Letting the animation run through until a bit further down
          scrub: 1, // Smoothly trace the animation with scroll
          toggleActions: "play none reverse none", // Ensures the animation plays smoothly
        },
      }
    );
  }, [videoLoaded]);

  return (
    <div className="bg-slate-50 overflow-hidden ">
      <Helmet>
        <meta
          name="description"
          content="The Lemich Clinic in Norfolk, Virginia offers expert mental health care for active duty military, spouses and veterans. Specializing in PTSD treatment, trauma recovery, and anxiety therapy, we provide confidential, compassionate support to help you heal and thrive."
        />
        <title>
          {" "}
          The Lemich Clinic | Norfolk, VA | Military Mental Health Services{" "}
        </title>
      </Helmet>

      <div className="row align-items-center background-section">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="video-background"
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {videoLoaded && (
          <div className="col-lg-6 ms-lg-4 col-12 relative h-full flex justify-center items-center">
            <div className="absolute inset-0"></div>
            <h1
              ref={titleRef}
              className="relative slide-text  text-white ipad textMobile text-start"
            >
            
              <div className="d-flex ">
                <img
                  src={logo}
                  alt="logo heart"
                  className="logo rotate mb-lg-2 mb-2"
                />
                <h1 className="align-content-center TLC barlow title2 ">
                  THE LEMICH CLINIC
                </h1>
              </div>
            
              <div className="sub-head demo tomorrow">
                HOME OF MILITARY MENTAL HEALTH{" "}
                <span className="hideMobile barlow"> &nbsp;| NORFOLK, VA</span>
                </div>
              
           

              <div className="btn accent-button text-center my-lg-4 my-md-3 my-sm-1 my-xs-1">
                <i className="fas fa-phone-alt text-md "></i>
                <a href="tel:+17575361233" className="phone-link mobile-bold">
                  <span className="hideMobile">&nbsp;</span>{" "}
                  <span className="px-1">Call Us</span>
                </a>
              </div>
            </h1>
          </div>
        )}
      </div>

      {videoLoaded && (
        <>
          {/* Mission Section */}
          <div className="py-4 bg-slate-50">
            <div className="container">
              <div className="row ">
                <div className="col-lg-2"></div>
                <div className="col-lg-8   px-4">
                  <h2   className="mb-lg-5 mt-lg-5 mt-2 mb-4 barlow text-center green mobile-header-mission big-line">
                    <span>OUR MISSION</span>
                  </h2>
                  <p className="text-center large-body-text">
                    The Lemich Clinic for Military Mental Health was founded on
                    the belief that everyone who serves should have access to
                    high-quality, confidential mental health care. <br/><br/> The majority
                    of our clients are active duty sailors at Naval Station
                    Norfolk. We also see service members from the other military
                    installations in Virginia. We also work with military
                    spouses and recent veterans.<br/><br/> If you are a first responder or
                    outside the military, contact us to see if you qualify for
                    our program.
                  </p>
                </div>
                <div className="col-lg-2"></div>
              </div>
            </div>
          </div>
          <TricareBackground />
          {/* Features Section */}
          <div className="bg-slate-50">
            <div className="container mb-5">
              <div className="mb-5">
                <h2  className="mb-3 process-header barlow green ">
                  <span className="text-gray-600 px-2"> BUILT FOR YOU</span>{" "}
                </h2>
                
                <p className="text-justify text-gray-600  border-top-bottom px-2  text-md pt-4">
                  Every service member’s journey is different, and so are their
                  mental health needs. Whether you're facing the weight of
                  deployment, adjusting to life changes, or navigating
                  military-specific challenges, our expert clinicians provide
                  care that fits you—personalized, specialized, and
                  mission-ready.
                </p>
              </div>
              <div ref={missionRef} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-center">
                {[
                  {
                    icon: "fa-user-circle",
                    title: "Personalized",
                    text: "You are matched with a therapist that fits your needs and style. We take the time to get to know you to make the right pairing.",
                  },
                  {
                    icon: "fa-layer-group",
                    title: "Varied",
                    text: "We have a large variety of clinician specialties to take care of your needs, including trauma, suicidal ideations, major depression, anxiety, anger, OCD, and perinatal concerns.",
                  },
                  {
                    icon: "fa-flag",
                    title: "Specialized",
                    text: "As most of our clients are on active duty, we specialize in military-specific concerns, including PCS issues, deployments, and transitioning to civilian life.",
                  },
                  {
                    icon: "fa-file-alt",
                    title: "Prepared",
                    text: "Our owner, Dr. Lemich, is well-versed in military and VA paperwork, assisting with LIMDU, Med Board, VA, and Security Clearance paperwork if medically necessary.",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className=" p-lg-4 p-2 service-hover border rounded mb-lg-3 "
                  >
                    <div className="mb-4 mt-lg-5 mt-4">
                      <i
                        className={`fas ${feature.icon} text-gray-600 fa-2x`}
                      ></i>
                    </div>
                    <h2 className=" spaced-underline-card-header barlow text-md  md:text-xl mb-3 ">{feature.title}</h2>
                    <p className=" text-gray-600 card-text mb-lg-5 mb-2">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <Tricare />
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;

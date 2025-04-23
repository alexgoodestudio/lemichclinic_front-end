import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../style.css";
import Tricare from "./Tricare.js";
import Video from "./images/woods2.mp4";
// import flag from "./images/flag2.jpg";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";
import { TextPlugin } from "gsap/TextPlugin";
import { Helmet } from "react-helmet";
import Norfolk from "./Norfolk.js";

function Dashboard() {
  const titleRef = useRef(null);

  const missionRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const [videoLoaded, setVideoLoaded] = useState(false);
  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
    if (videoLoaded) {
      window.scrollTo(0, 0);

      gsap.set(".title2", { text: "Home of Military Mental Health", opacity: 1 });

      gsap.fromTo(
        missionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          ease: "power4.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 90%",
            end: "bottom 10%",
            scrub: 1,
          },
        }
      );

      gsap.utils.toArray(".service-hover").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            ease: "power3.out",
            duration: 0.8,
            delay: i * 0.15,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }, [videoLoaded]);

  return (
    <div className="bg-slate-100 overflow-hidden ">
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

      <div className="row align-items-center  background-section ">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="video-background "
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {videoLoaded && (
          <div className="col-lg-6 ms-lg-4 col-12  relative h-full flex justify-center items-center">
            <div className="absolute inset-0"></div>
            <h1
              ref={titleRef}
              className="relative slide-text mb-lg-5 text-white ipad textMobile text-start"
            >

              <div className="d-flex">
                {/* <img
                  src={logo}
                  alt="logo heart"
                  className="logo rotate mb-lg-2 mb-2"
                /> */}
                <h1 className="align-content-center  bold TLC title2">
                  The Lemich Clinic
                </h1>
              </div>

              <div className="sub-head  demo  d-flex">
                <div className="btn accent-button  me-lg-3 me-2 mt-lg-2  text-center my-1">
                  <i className="fas fa-phone-alt text-md "></i>
                  <a href="tel:+17575361233" className="phone-link mobile-bold">
                    <span className="ps-lg-2 p-1 call-text">Call Us</span>
                  </a>
                </div>
                <div className="bold sub-head-text">
                  <Link to="/contact" className="no-underline text-inherit hover:opacity-80 transition-opacity">
                    LOCATED IN NORFOLK, VIRGINIA
                  </Link>
                </div>
              </div>
            </h1>
          </div>
        )}
      </div>

      {videoLoaded && (
        <>
          {/* Mission Section */}
          <div className="pt-4 ">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 px-4 mt-lg-5">
                  <h2 className="mb-lg-4 mb-4 mt-lg-5 mt-2 mission-text barlow text-center text-gray-600 mobile-header-mission spaced-underline-header">
                    <span>OUR MISSION</span>
                  </h2>
                  <p className="text-justify mission-text mb-lg-5 text-gray-500 line-height-large">
                    The Lemich Clinic for <span className=" bold text-gray-600">Military Mental Health</span> was founded on
                    the belief that everyone who serves should have access to
                    high-quality, confidential mental health care. The majority
                    of our clients are active duty sailors at Naval Station
                    Norfolk. We also see service members from the other military
                    installations in Virginia. We also work with military
                    spouses and recent veterans. If you are a first responder or
                    outside the military, contact us to see if you qualify for
                    our program.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Norfolk />
          {/* Features Section */}
          <div className="bg-slate-100">
            <div className="container mb-5">
              {/* <div className="hideMobile">
                <h2  className="mb-3 process-header barlow">
                  <span className="text-gray-800 px-2"> BUILT FOR YOU</span>{" "}
                </h2>
                
                <p className="text-justify text-gray-500  line-height-large  border-top-bottom px-2  text-md pt-4">
                  Every service member’s journey is different, and so are their
                  mental health needs. Whether you're facing the weight of
                  deployment, adjusting to life changes, or navigating
                  military-specific challenges, our expert clinicians provide
                  care that fits you—personalized, specialized, and
                  mission-ready.
                </p>
              </div> */}

              {/* <div className="row mb-5">
              <div className="col-lg-12">
                <img src={flag} alt="American Flag" />
              </div>
            </div> */}

              <div ref={missionRef} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-center ">
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
                    className=" p-lg-3 p-2 service-hover border rounded mb-lg-0 "
                  >
                    <div className="mb-4 mt-lg-5 mt-4 ">
                      <i
                        className={`fas ${feature.icon} text-gray-600 fa-2x`}
                      ></i>
                    </div>
                    <h2 className="spaced-underline-card-header card-header text-gray-800 barlow text-md  md:text-xl mb-3 ">{feature.title}</h2>
                    <p className="text-gray-500 card-text mb-lg-5 mb-2">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="row">
              <div className="col-lg-12 ">
                <Tricare />
              </div>
            </div>
            
            <div className="row bg-gray-400">
              <div className="col-lg-4"></div>
              <div className="col-lg-4 p-5  ">
                <h2 className="mb-5 text-start text-gray-100">Get in Touch with Us</h2>
                <ContactForm />
              </div>
              <div className="col-lg-4"></div>
            </div>
            

            
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;

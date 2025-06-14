import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../style.css";
import Tricare from "./Tricare.js";
import Video from "./images/woods.mp4";
import flag from "./images/flag2.png";
import ContactForm from "./ContactForm";
import { createContact } from "../utils/api.js";
import { Link } from "react-router-dom";
import { TextPlugin } from "gsap/TextPlugin";
import { Helmet } from "react-helmet";
// import Norfolk from "./Norfolk.js";

function Dashboard() {
  const titleRef = useRef(null);
  const missionRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);

  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoLoaded) {
      window.scrollTo(0, 0);

      gsap.set(".title2", {
        text: '<div class="tomorrow text-center">Home of <span class="">Military</span> <span class="">Mental Health</span></div>',
        opacity: 1
      });

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

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

const handleSubmit = async (formData) => {
  setLoading(true);
  setSuccessMessage("");
  setErrorMessage("");

  try {
    await createContact(formData);
    setSuccessMessage("Message sent successfully!");
  } catch (error) {
    setErrorMessage(error.message || "Error processing contact. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="bg-slate-100 overflow-hidden">
      <Helmet>
        <meta
          name="description"
          content="The Lemich Clinic in Norfolk, Virginia offers expert mental health care for active duty military, spouses and veterans. Specializing in PTSD treatment, trauma recovery, and anxiety therapy, we provide confidential, compassionate support to help you heal and thrive."
        />
        <title>
          The Lemich Clinic | Norfolk, VA | Military Mental Health Services
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
          <div className="col-lg-6 ms-lg-2 col-12 relative h-full flex justify-center items-center">
            <div className="absolute inset-0"></div>
            <h1
              ref={titleRef}
              className="relative slide-text mb-lg-5 text-white ipad textMobile text-start"
            >
              <div className="d-flex">
                <h1 className="bold TLC px-2 title2 w-full flex justify-center">
                  The Lemich Clinic
                </h1>
              </div>

              <div className="sub-head demo d-flex">
                <div className="btn accent-button me-lg-3 me-2 mt-lg-2 text-center my-1">
                  <i className="fas fa-phone-alt text-md"></i>
                  <a href="tel:+17575361233" className="phone-link mobile-bold">
                    <span className="p-1 call-text">Call Us</span>
                  </a>
                </div>
                <div className=" barlow sub-head ms-lg-5 sub-head-text">
                  <Link to="/contact" className="text-white no-underline hover:opacity-80  transition-opacity">
                    LOCATED IN <span className="">NORFOLK, VIRGINIA</span>
                  </Link>
                </div>
              </div>
            </h1>
          </div>
        )}
      </div>

      {videoLoaded && (
        <>
          <div className="pt-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="mb-lg-4 mb-4 mt-lg-1 mt-2 mission-text-spacing barlow text-gray-600 mobile-header-mission justify-center spaced-underline-header">
                    OUR MISSION
                    <div className="row">
                      <div className="col-lg-4"></div>
                      <div className="col-lg-4 ms-2">
                        <img src={flag} alt="American Flag" />
                      </div>
                      <div className="col-lg-4"></div>
                    </div>
                  </h2>
                  <p className="text-justify px-2 mission-text-spacing mission-paragraph mb-lg-5 text-gray-600 line-height-large">
                    The Lemich Clinic for Military Mental Health was founded on
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

          <div className="bg-slate-100">
            <div className="container mb-5">
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
                  <div key={index} className="p-lg-3 p-2 service-hover border rounded mb-lg-0">
                    <div className="mb-4 mt-lg-5 mt-4">
                      <i className={`fas ${feature.icon} text-gray-600 fa-2x`}></i>
                    </div>
                    <h2 className="spaced-underline-card-header card-header text-gray-800 barlow text-md md:text-xl mb-3">
                      {feature.title}
                    </h2>
                    <p className="text-gray-600 card-text mb-lg-5 mb-2">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <Tricare />
              </div>
            </div>

            <div className="row bg-slate-100">
              <div className="col-lg-4"></div>
              <div className="col-lg-4 py-5 px-4">
                <h2 className="mb-5 text-start barlow text-slate-500">Get in Touch with Us</h2>
                <ContactForm
                  onSubmit={handleSubmit}
                  loading={loading}
                  error={errorMessage}
                  successMessage={successMessage}
                />
                
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

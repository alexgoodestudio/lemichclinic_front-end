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
import AccordionServices from "./AccordionServices.js";

function Dashboard() {
  const titleRef = useRef(null);
  // const missionRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (!videoLoaded) return;
    window.scrollTo(0, 0);

    // Create scoped GSAP context for cleanup
    const ctx = gsap.context(() => {
      // Timeline for hero animations
      const tl = gsap.timeline();
      tl.fromTo(
        ".clip-text",
        { yPercent: 100 },
        { yPercent: 0, duration: 1.2, ease: "power4.out" }
      )
        .fromTo(
          ".TLC",
          { y: -100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
          "<"
        )
        .fromTo(
          ".sub-head",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          ".btn",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: 0.275, ease: "power3.out" },
          "<"
        );

      // Scroll-triggered mission section animation
      // gsap.fromTo(
      //   missionRef.current,
      //   { opacity: 0, y: 100 },
      //   {
      //     opacity: 1,
      //     y: 0,
      //     ease: "power4.out",
      //     scrollTrigger: {
      //       trigger: missionRef.current,
      //       start: "top 90%",
      //       end: "bottom 10%",
      //       scrub: 1,
      //     },
      //   }
      // );
    });

    return () => ctx.revert();
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
      setErrorMessage(
        error.message || "Error processing contact. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-100 overflow-hidden">
      <Helmet>
        <meta
          name="description"
          content="The Lemich Clinic in Norfolk, Virginia located near Naval Station Norfolk offers expert mental health care for active duty military, veterans and spouses. Specializing in PTSD treatment, trauma recovery, anxiety & depression therapy, we provide confidential support to help you heal and thrive. With services like Summary and Nexus Letters for VA disability claims, we guide you through the process of securing the benefits you deserve. TRICARE accepted."
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
          className="video-background container"
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {videoLoaded && (
          <div className="col-lg-6 ms-lg-2 col-12 relative  h-full flex justify-center items-center">
            <div className="absolute inset-0"></div>
            <h1
              ref={titleRef}
              className="relative ipad-bg blue-bg border-left-dash mb-lg-5 text-white ipad textMobile text-start"
            >
              <div className="clip-line overflow-hidden">
                <h1 className="clip-text bold tomorrow text-center TLC px-2 title2 w-full flex justify-center">
                  Home of Military Mental Health
                </h1>
              </div>

              <div className="sub-head sub-head-section demo d-flex">
                <div className="clip-line overflow-hidden">
                  <div className="btn accent-button me-lg-3 me-2 mt-lg-2 text-center my-1">
                    <i className="fas fa-phone-alt text-md"></i>
                    <a
                      href="tel:+17575361233"
                      className="phone-link mobile-bold"
                    >
                      <span className="p-1 call-text">Call Us</span>
                    </a>
                  </div>
                </div>
                <div className="clip-line overflow-hidden">
                  <div className="clip-text barlow sub-head ms-lg-5 sub-head-text">
                    <Link
                      to="/contact"
                      className="text-white py-2 px-2 no-underline hover:opacity-80 transition-opacity"
                    >
                      <span className="text-white ">
                        LOCATED IN{" "}
                        <span className="spaced-underline-location">
                          NORFOLK, VIRGINIA
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </h1>
          </div>
        )}
      </div>

      {videoLoaded && (
        <>
          <div className="pt-4">
            <div className="">
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                <h2 className="mb-lg-1 mt-lg-5 mt-2 barlow spaced-underline-mission text-gray-600 mobile-header-mission text-center">
                  OUR MISSION
                  <div className="mt-2 inline-block w-full">
                    <img src={flag} className="w-full max-w-[420px] mx-auto" alt="Flag" />
                  </div>
                </h2>
                  <p className="text-justify px-lg-0 px-4 pb-lg-5 mb-5 mission-text  text-gray-600">
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
                 <div className="pb-5 mb-5 px-lg-0 px-5">
              <AccordionServices />
            </div>
                </div>
                <div className="col-lg-3"></div>
              </div>
            </div>
          </div>

          <div className="bg-slate-100">
            {/* <div className="container mb-5">
              <div
                ref={missionRef}
                className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-center"
              >
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
                    className="p-lg-3 p-2 service-hover border rounded mb-lg-0"
                  >
                    <div className="mb-4 mt-lg-5 mt-4">
                      <i
                        className={`fas ${feature.icon} text-gray-600 fa-2x`}
                      ></i>
                    </div>
                    <h2 className="spaced-underline-card-header card-header text-gray-800 barlow text-md md:text-xl mb-3">
                      {feature.title}
                    </h2>
                    <p className="text-gray-600 card-text mb-lg-5 mb-2">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="row">
              <div className="col-lg-12">
                <Tricare />
              </div>
            </div>

            <div className="row bg-slate-100">
              <div className="col-lg-4"></div>
              <div className="col-lg-4 py-5 px-4">
                
                <ContactForm
                  onSubmit={handleSubmit}
                  loading={loading}
                  error={errorMessage}
                  successMessage={successMessage}
                />
              </div>
              <div className="bottom-form"></div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;

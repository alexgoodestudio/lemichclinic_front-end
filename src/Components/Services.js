import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import img1 from "./images/1.avif";
import img2 from "./images/2.avif";
import img3 from "./images/3.avif";
import "../style.css";

function Services() {
  const [activeOverlay, setActiveOverlay] = useState(null);
  const scrollEnabledRef = useRef(true);
  const serviceRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        let closestEntry = null;
        let minDistance = window.innerHeight;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect;
            const distanceToCenter = Math.abs(
              rect.top + rect.height / 2 - window.innerHeight / 2
            );

            if (distanceToCenter < minDistance) {
              minDistance = distanceToCenter;
              closestEntry = entry;
            }
          }
        });

        if (closestEntry && scrollEnabledRef.current) {
          const newOverlay = closestEntry.target.getAttribute("data-overlay");
          setActiveOverlay((prev) =>
            prev === newOverlay ? prev : newOverlay
          );
        }
      },
      { threshold: [0.1, 0.6, 0.5, 0.7, 1], rootMargin: "0px 0px -40% 0px" }
    );

    const elements = [...serviceRefs.current];

    elements.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      elements.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      observer.disconnect();
    };
  }, []);

  const handleCardClick = (overlay) => {
    scrollEnabledRef.current = false;
    setActiveOverlay((prev) => (prev === overlay ? null : overlay));

    setTimeout(() => {
      scrollEnabledRef.current = true;
    }, 1500);
  };

  return (
    <div className="d-flex flex-column bg-slate-50">
      <Helmet>
        <meta
          name="description"
          content="The Lemich Clinic | Mental health services for veterans and active duty military in Norfolk, VA."
        />
        <title>
          Exclusive Services | Norfolk, VA | Military Mental Health Services
        </title>
      </Helmet>

      <div className="container py-5 flex-grow-1">
        <div className="row mb-3">
          <div className="col-12">
            <h1 className="text-4xl mb-4 text-start text-gray-800">
              Exclusive Services.
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <p className="text-justify mb-4 text-md text-gray-600 border rounded bg-slate-100 p-3">
              For current clients, we have a selection of services provided by
              our team to support you in your journey to better mental health.
              Prices and availability may vary, so please talk to our office
              staff about options for you.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Card 1 */}
          <div className="col-lg-4 col-md-6 mb-3">
            <div
              className="service-card"
              data-overlay="overlay1"
              ref={(el) => (serviceRefs.current[0] = el)}
              onClick={() => handleCardClick("overlay1")}
            >
              <img src={img1} alt="Service 1" className="service-image" />
              <div
                className={`service-overlay service-overlay1 ${
                  activeOverlay === "overlay1" ? "visible-overlay" : ""
                }`}
              >
                <h3 className="text-white barlow text-xl font-semibold mb-4">
                  Summary Letters
                </h3>
                <p className="text-white text-start p-3">
                  Only for Active Duty Military Service Members. This letter
                  will outline the diagnosis that the client has, confirm and
                  give a brief description of their session attendance, and give
                  advice and confirmation of their clinical needs. PRICE:
                  $40/letter
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6 mb-3">
            <div
              className="service-card"
              data-overlay="overlay2"
              ref={(el) => (serviceRefs.current[1] = el)}
              onClick={() => handleCardClick("overlay2")}
            >
              <img src={img2} alt="Service 2" className="service-image" />
              <div
                className={`service-overlay service-overlay2 ${
                  activeOverlay === "overlay2" ? "visible-overlay" : ""
                }`}
              >
                <h3 className="text-white barlow text-xl font-semibold mb-4">
                  NEXUS Letters
                </h3>
                <p className="text-white text-start p-3">
                  Only for Veterans who have been out of Active Duty Military
                  Service for more than one year. This letter is a compilation
                  of your medical history that explains the connection between
                  current medical condition(s) and military service. PRICE:
                  $180/letter
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6 mb-3">
            <div
              className="service-card"
              data-overlay="overlay3"
              ref={(el) => (serviceRefs.current[2] = el)}
              onClick={() => handleCardClick("overlay3")}
            >
              <img src={img3} alt="Service 3" className="service-image" />
              <div
                className={`service-overlay service-overlay3 ${
                  activeOverlay === "overlay3" ? "visible-overlay" : ""
                }`}
              >
                <h3 className="text-white barlow text-xl font-semibold mb-4">
                  Group Therapy
                </h3>
                <p className=" text-start mb-4">
                  To register for a group and get cost/payment information,
                  click the{" "}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf772Z4DElgOFl_7u2GM71MB6xB3g-qOYMmjd1-Rlu4EVoz_Q/viewform"
                    className="text-white accent underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    link
                  </a>{" "}
                  to register or call our office.
                </p>
                <ul className="list-disc text-white text-start pe-3 ps-3">
                  <li className="pb-3 mb-2">
                    <span className="spaced-underline">Betrayed Partners:</span>{" "}
                    Mondays @ 12pm - 1pm
                  </li>
                  <li className="pb-2">
                    <span className="spaced-underline">
                      Men's Relationship Skills:
                    </span>{" "}
                    Every other Thursday @ 5pm - 6:30pm
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

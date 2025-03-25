import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import img1 from "./images/1.avif";
import img2 from "./images/2.avif";
import img3 from "./images/3.avif";
import "../style.css";

function Services() {
  const activeOverlay = useRef("overlay1"); // Initialize with the first overlay (e.g., "overlay1")
  const serviceRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        let maxVisibility = 0;
        let mostVisibleElement = null;

        // Iterate over the entries
        entries.forEach((entry) => {
          console.log(entry.target, entry.intersectionRatio); // Check the intersection ratio

          // Update the most visible element if the current one is more visible
          if (entry.isIntersecting && entry.intersectionRatio > maxVisibility) {
            maxVisibility = entry.intersectionRatio;
            mostVisibleElement = entry.target;
          }
        });

        // Remove .in-view class from all cards
        serviceRefs.current.forEach((el) => {
          if (el) el.classList.remove("in-view");
        });

        // If there's a most visible element, update the overlay ref and add the .in-view class
        if (mostVisibleElement) {
          const overlayId = mostVisibleElement.getAttribute("data-overlay");
          if (activeOverlay.current !== overlayId) {
            activeOverlay.current = overlayId; // Update the active overlay
            mostVisibleElement.classList.add("in-view");
          }
        }
      },
      { threshold: [0.3, 0.5, 0.7, 1] }
    );

    // Start observing each service card
    const elements = serviceRefs.current;
    elements.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup observer on component unmount
    return () => {
      elements.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div className="d-flex flex-column">
      <Helmet>
        <meta
          name="description"
          content="The Lemich Clinic | Mental health services for veterans and active duty military in Norfolk, VA."
        />
        <title>Exclusive Services | Norfolk, VA | Military Mental Health Services</title>
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
            <p className="text-justify mb-4 text-lg text-gray-600 border rounded bg-slate-100 p-3">
              For current clients, we have a selection of services provided by our team to support you in your journey to better mental health.
              Prices and availability may vary, so please talk to our office staff about options for you.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="service-card" data-overlay="overlay1" ref={(el) => (serviceRefs.current[0] = el)}>
              <img src={img1} alt="Service 1" className="service-image" />
              <div className={`service-overlay service-overlay1 ${activeOverlay.current === "overlay1" ? "visible-overlay" : ""}`}>
                <h3 className="text-white text-xl font-semibold mb-2">
                  Summary Letters
                </h3>
                <p className="text-blue-white text-start">
                  Only for Active Duty Military Service Members.
                  This letter will outline the diagnosis that the client has, confirm and give a brief description of their session attendance, and give advice and confirmation of their clinical needs.
                  PRICE: $40/letter
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-3">
            <div className="service-card" data-overlay="overlay2" ref={(el) => (serviceRefs.current[1] = el)}>
              <img src={img2} alt="Service 2" className="service-image" />
              <div className={`service-overlay service-overlay2 ${activeOverlay.current === "overlay2" ? "visible-overlay" : ""}`}>
                <h3 className="text-white text-xl font-semibold mb-2">
                  NEXUS Letters
                </h3>
                <p className="text-blue-white text-start">
                  Only for Veterans who have been out of Active Duty Military Service for more than one year.
                  This letter is a compilation of your medical history that explains the connection between current medical condition(s) and military service.
                  PRICE: $180/letter
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-3">
            <div className="service-card" data-overlay="overlay3" ref={(el) => (serviceRefs.current[2] = el)}>
              <img src={img3} alt="Service 3" className="service-image" />
              <div className={`service-overlay service-overlay3 ${activeOverlay.current === "overlay3" ? "visible-overlay" : ""}`}>
                <h3 className="text-white text-xl font-semibold mb-2">
                  Group Therapy
                </h3>
                <ul className="text-blue-white text-start">
                  <li><span>Active Duty Females:</span> Fridays 9am - 10am</li>
                  <li><span>Military Spouse Support:</span> Thursdays 4pm - 5pm</li>
                  <li><span>Couples Counseling:</span> Every other Thursday 5pm - 6:30pm</li>
                  <li><span>Betrayed Partners:</span> Mondays 12pm - 1pm</li>
                  <li><span>Men's Relationship Skills:</span> Every other Thursday 5pm - 6:30pm</li>
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

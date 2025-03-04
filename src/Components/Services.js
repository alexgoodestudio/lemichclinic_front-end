import { useEffect } from "react";
import { Helmet } from "react-helmet";
import img1 from "./images/1.avif";
import img2 from "./images/2.avif";
import img3 from "./images/3.avif";
import "../style.css";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let activeCard = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeCard = entry.target;
          }
        });

        // Remove "show" from all, then add it only to the active one
        document.querySelectorAll(".service-card").forEach((card) => {
          card.classList.remove("show", "active");
        });

        if (activeCard) {
          activeCard.classList.add("show", "active");
        }
      },
      { threshold: 0.5 }
    );

    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card) => observer.observe(card));

    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Helmet>
        <meta
          name="description"
          content="Contact us at The Lemich Clinic | Experts in mental health services for veterans and military personnel in Norfolk, VA."
        />
        <title>Exclusive Services | Norfolk, VA | Military Mental Health Services</title>
      </Helmet>

      <div className="container py-5 flex-grow-1">
        {/* Header Section */}
        <div className="row mb-3">
          <div className="col-12">
            <h1 className="text-4xl mb-4 text-start text-gray-800 mb-1">
              Exclusive Services.
            </h1>
          </div>
        </div>

        {/* Description Section */}
        <div className="row">
          <div className="col-lg-12">
            <p className="text-justify mb-4 text-lg text-gray-600 border rounded bg-slate-100 p-4">
              For current clients, we have a selection of services provided by our team to support you in your journey to better mental health. Prices and availability may vary, so please talk to our office staff about options for you.
            </p>
          </div>
        </div>

        {/* Services Cards Section */}
        <div className="row">
          {/* Card 1 */}
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="service-card">
              <img src={img1} alt="Service 1" className="service-image" />
              <div className="service-overlay1">
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

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="service-card">
              <img src={img2} alt="Service 2" className="service-image" />
              <div className="service-overlay2">
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

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="service-card">
              <img src={img3} alt="Service 3" className="service-image" />
              <div className="service-overlay3">
                <h3 className="text-white text-xl font-semibold mb-2">
                  Group Therapy
                </h3>
                <ul className="text-blue-white text-start">
                  <li><span className="">Active Duty Females:</span> Fridays 9am - 10am</li>
                  <li><span className="">Military Spouse Support:</span> Thursdays 4pm - 5pm</li>
                  <li><span className="">Couples Counseling:</span> Every other Thursday 5pm - 6:30pm</li>
                  <li><span className="">Betrayed Partners:</span> Mondays 12pm - 1pm</li>
                  <li><span className="">Men's Relationship Skills:</span> Every other Thursday 5pm - 6:30pm</li>
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

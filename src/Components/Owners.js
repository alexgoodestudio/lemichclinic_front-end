import img4 from "./images/lemichs.avif";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Helmet } from "react-helmet";

function Owners() {
  const logoRef = useRef(null); // Reference for the logo

  useEffect(() => {
    window.scrollTo(0, 0);

    // Ensure the animation runs only after the component is mounted
    gsap.fromTo(
      logoRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="">
      <Helmet>
        <meta
          name="description"
          content="Meet the founders of The Lemich Clinic: Gregory and Jennifer Lemich, experts in mental health services for veterans and military personnel in Norfolk, VA."
        />
        <title>Meet The Owners | The Lemich Clinic | Norfolk, VA</title>
      </Helmet>

      {/* Image Section */}
      <div className="row d-flex justify-content-center align-items-center">
        <h1 className="text-4xl hideFull pb-3 ps-4 mt-5 mb-4 owners-mobile-text text-start px-2 text-gray-800 mb-0">
          Meet The Owners.
        </h1>
        <div className="col-lg-6 order-1 order-lg-2 text-center p-lg-0">
          {/* <div className="zoom-owners"> */}
            <img
              ref={logoRef}
              src={img4}
              alt="Gregory and Jennifer Lemich"
              className="h-100"
            />
          {/* </div> */}
        </div>

        {/* Text Section */}
        <div className="col-lg-6 order-2 order-lg-1 px-lg-5 px-4">
          <h2 className="text-insurance-header-mobile hideFull">
            Gregory and Jennifer Lemich
          </h2>
          <div className="p-lg-5 p-1">
            <h1 className="text-4xl hideMobile owners-mobile-text text-start text-gray-800">
              Meet The Owners.
            </h1>
            <div className="text-center">
              <p className="text-md md:text-md lg:text-lg text-gray-600 text-justify mt-3 mb-4">
                The Lemich Clinic was founded by Gregory and Jennifer Lemich.
                Jennifer is a 22-year US Navy retiree and current Navy employee.
                Gregory holds a PhD in Counselor Education and Supervision, and is
                an adjunct professor at Old Dominion University. Together, they
                have been happily married for 9 years and live in Norfolk,
                Virginia, with their{" "}
                <Link to="/login" className="text-gray-600 normalize">
                  French Bulldog
                </Link>{" "}
                and two cats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Owners;

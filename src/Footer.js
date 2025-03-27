import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="bg-slate-200 noise px-5 pt-3 pb-1  items-center text-center row">
      <div className="col-lg-3"></div>
      <div className="col-lg-6">
      <p className="footer-text-1">© The Lemich Clinic | Norfolk, Virginia </p>

      <p className="footer-text-2">
        Providing expert military mental health counseling services in Norfolk,
        Virginia. {" "}
        <a href="/contact" className="text-blue-600">
          Contact us
        </a>{" "}
        for more information.
      </p>
      </div>
      {/* <div className="col-lg-1"></div> */}

      <div className="col-lg-2">
      {/* <a
      href="https://www.psychologytoday.com/us/therapists/the-lemich-clinic-for-military-mental-health-norfolk-va/755325"
      target="_blank"
      rel="noopener noreferrer"
      className=" text-warning tiny d-flex hover:underline"
    >
      Review
    </a> */}
      </div>
    </footer>
  );
}

export default Footer;

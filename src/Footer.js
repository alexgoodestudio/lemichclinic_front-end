import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="blueCombo2 noise px-5 pt-3 pb-1  items-center text-center row">
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
      <div className="col-lg-3 text-start"></div>
    </footer>
  );
}

export default Footer;

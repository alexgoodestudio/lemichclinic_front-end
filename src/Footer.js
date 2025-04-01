import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="bg-slate-200 noise px-6 pt-12 pb-8 text-center md:text-left">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl">
        <div className="flex flex-col space-y-3 md:pr-6 text-start">
          <h4 className="font-semibold text-xl text-gray-800">The Lemich Clinic</h4>
          <p className="text-sm text-gray-600 leading-relaxed">Norfolk, Virginia</p>
          <p className="text-sm text-gray-600 leading-relaxed">Providing expert military mental health counseling with compassionate care.</p>
        </div>
        <div className="flex flex-col space-y-3 text-start">
          <h4 className="font-semibold text-xl text-gray-800">Services</h4>
          <a href="/exclusive-services-norfolk" className="footer-link ml-2">Our Services</a>
          <a href="/tricare-health-insurance" className="footer-link ml-2">Insurance</a>
          <a href="/contact" className="footer-link ml-2">Schedule an Appointment</a>
        </div>
        <div className="flex flex-col space-y-3 text-start">
          <h4 className="font-semibold text-xl text-gray-800">About</h4>
          <a href="/team-norfolk" className="footer-link ml-2">Our Team</a>
          <a href="/owners-norfolk" className="footer-link ml-2">Clinic Owners</a>
        </div>
        <div className="flex flex-col space-y-3 text-start">
          <h4 className="font-semibold text-xl text-gray-800">Support</h4>
          <a href="/contact" className="footer-link ml-2">Contact Us</a>
          <a href="/login" className="footer-link ml-2">Client Login</a>
        </div>
      </div>
      <div className="text-sm text-gray-600 mt-10 border-t pt-4 text-center">
        © {new Date().getFullYear()} The Lemich Clinic | Norfolk, Virginia
      </div>
    </footer>
  );
}

export default Footer;
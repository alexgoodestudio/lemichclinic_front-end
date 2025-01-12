import React, { useEffect } from "react";
import { gsap } from "gsap";
import img4 from "./images/lemichs.avif"; 



function Owners() {
  useEffect(() => {
    // Fade-in animation for the entire card
    gsap.from(".owner-card", {
      opacity: 0,
      y: 50, // Slide up from below
      duration: 1.2,
      ease: "power2.out",
    });

    // Fade-in and scaling animation for the image
    gsap.from(".owner-image", {
      opacity: 0,
      scale: 0.75, // Start 25% smaller
      duration: 1.2,
      ease: "power2.out",
      delay: 0.2, // Slight delay for a cascading effect
    });

    // Fade-in animation for the text
    gsap.from(".owner-text", {
      opacity: 0,
      y: 20, // Slide up slightly
      duration: 1.2,
      ease: "power2.out",
      delay: 0.4, // Trigger after the image
    });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-8 owner-card">
        <div className="text-center">
          <img
            src={img4}
            alt="Gregory and Jennifer Lemich"
            className="w-1/2 h-auto mx-auto rounded-full border-4 owner-image"
          />
          <h1 className="text-3xl font-bold text-blue-700 mt-6 owner-text">
            Owners
          </h1>
          <p className="text-gray-700 mt-4 owner-text">
            The Lemich Clinic was founded by Gregory and Jennifer Lemich.
            Jennifer is a 22-year US Navy retiree and current Navy employee.
            Gregory has his PhD in Counselor Education and Supervision and is
            an adjunct professor at Old Dominion University. They have been
            married 9 happy years and live in Norfolk, Virginia with their
            French Bulldog and two cats.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Owners;

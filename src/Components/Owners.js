import React, { useEffect } from "react";
import { gsap } from "gsap";
import img4 from "./images/lemichs.avif"; 


function Owners() {
  useEffect(() => {
    // Smooth fade-in and scaling for the owner card
    gsap.from(".owner-card", {
      opacity: 0,
      y: 20,
      duration: 1.5,
      ease: "power3.out",
    });

    // Fade-in and smooth scaling for the image
    gsap.from(".owner-image", {
      opacity: 0,
      scale: 0.9, // Slightly smaller at first for smooth scaling
      duration: 1.5,
      ease: "power3.out",
      delay: 0.2,
    });

    // Text animations with slight upwards motion
    gsap.from(".owner-text", {
      opacity: 0,
      y: 30,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.4,
    });
  }, []);

  return (
    <div className=" min-h-screen flex items-center justify-center ">

      <div className="rounded-2xl w-full max-w-3xl p-8 owner-card">
        <div className="text-center">
          <img
            src={img4}
            alt="Gregory and Jennifer Lemich"
            className="w-72 h-72 mx-auto rounded-full owner-image"
          />
       
          <h1 className="text-4xl  thin text-gray-800 mt-6 owner-text">
            Meet the Owners
          </h1>
          <p className="text-lg text-gray-600 mt-4 owner-text">
            The Lemich Clinic was founded by Gregory and Jennifer Lemich. 
            Jennifer is a 22-year US Navy retiree and current Navy employee. 
            Gregory holds a PhD in Counselor Education and Supervision, and 
            is an adjunct professor at Old Dominion University. 
            Together, they have been happily married for 9 years and live in 
            Norfolk, Virginia, with their French Bulldog and two cats.
          </p>
      
        </div>
      </div>
    </div>
  );
}

export default Owners;

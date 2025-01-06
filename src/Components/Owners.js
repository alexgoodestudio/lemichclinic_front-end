import React from "react";
import img4 from "./images/lemichs.avif";

function Owners() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-8">
        <div className="text-center">
          <img
            src={img4}
            alt="Gregory and Jennifer Lemich"
            className="w-48 h-48 mx-auto rounded-full border-4 "
          />
          <h1 className="text-3xl font-bold text-blue-700 mt-6">Owners</h1>
          <p className="text-gray-700 mt-4">
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

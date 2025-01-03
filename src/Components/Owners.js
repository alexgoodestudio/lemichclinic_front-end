import React from "react";
import img4 from "./images/lemichs.avif"

function Owners() {
  return (
    <div>
        <img src={img4} className="w-50"/>
      <h1 className="ivy">Owners</h1>
      <p>
        The Lemich Clinic was founded by Gregory and Jennifer Lemich. Jennifer
        is a 22-year US Navy retiree and current Navy employee. Gregory has his
        PhD in Counselor Education and Supervision and is an adjunct professor
        at Old Dominion University. They have been married 9 happy years and
        live in Norfolk, Virginia with their French Bulldog and two cats.{" "}
      </p>
    </div>
  );
}

export default Owners;

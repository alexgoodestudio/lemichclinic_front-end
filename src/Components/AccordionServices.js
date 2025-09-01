import React, { useState } from "react";

const accordionData = [
  {
    icon: "fa-user-circle",
    title: "Personalized",
    text: "You are matched with a therapist that fits your needs and style. We take the time to get to know you to make the right pairing.",
  },
  {
    icon: "fa-layer-group",
    title: "Varied",
    text: "We have a large variety of clinician specialties to take care of your needs, including trauma, suicidal ideations, major depression, anxiety, anger, OCD, and perinatal concerns.",
  },
  {
    icon: "fa-flag",
    title: "Specialized",
    text: "As most of our clients are on active duty, we specialize in military-specific concerns, including PCS issues, deployments, and transitioning to civilian life.",
  },
  {
    icon: "fa-file-alt",
    title: "Prepared",
    text: "Our owner, Dr. Lemich, is well-versed in military and VA paperwork, assisting with LIMDU, Med Board, VA, and Security Clearance paperwork if medically necessary.",
  },
];

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-xl mx-auto text-start">
      {accordionData.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="flex items-center justify-between w-full py-3 text-left"
            onClick={() => toggle(index)}
          >
            <span className="flex items-center gap-2 text-lg font-medium">
              <i className={`fas ${item.icon}`}></i> {item.title}
            </span>
            <span>{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="p-3 text-gray-700">{item.text}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;

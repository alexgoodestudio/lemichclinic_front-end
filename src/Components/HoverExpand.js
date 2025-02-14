import React, { useState } from "react";

function HoverExpand({ triggerText, expandedContent }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="relative inline-block font-big ">
      {/* Trigger Text */}
      <span
        className=" cursor-pointer whitespace-nowrap"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {triggerText}
      </span>

      {/* Expanded Content */}
      {isHovered && (
        <div
          className="absolute medium z-10  mobile-expand-text blueCombo shadow-lg rounded3 p-3 mt-2 max-w-lg expandStyle text-gray-700"
          style={{
            overflow: "hidden",
            wordWrap: "break-word",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {expandedContent}
        </div>
      )}
    </div>
  );
}

export default HoverExpand;

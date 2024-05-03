

import React, { useState } from "react";

function Button({
  children,
  bgColor = "var(--primary-gradient)",
  hoverColor = "var(--primary-gradient)",
  textColor = "white",
  onClick,
  className,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverColorNew, setHoverColor] = useState(bgColor);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setHoverColor(hoverColor); // Change to the hover color
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoverColor(bgColor); // Change back to the original color
  };

  return (
    <button
      className={`min-w-40  rounded-lg px-8 py-3 text-md font-medium ${className}`}
      // style={{transition: 'all 0.3s ease'}}
      style={{
        background: hoverColorNew,
        color: textColor,
        transition: "all 0.3s ease",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

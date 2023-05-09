import React, { useState } from "react";
import "./toggle.css";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  const toggleClassName = `toggle ${isOn ? "on" : "off"}`;

  return (
    <div className={toggleClassName} onClick={handleClick}>
      <div className="toggle-handle"></div>
    </div>
  );
}

export default Toggle;

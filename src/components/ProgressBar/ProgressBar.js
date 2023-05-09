import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ value, max }) => {
  return (
    <progress
      value={value}
      max={max}
      style={{ borderRadius: "10px", height: "13px" }}
    />
  );
};

export default ProgressBar;

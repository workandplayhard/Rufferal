import React from "react";

export default function TwitterSearch() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input placeholder="Enter your twitter username" />
      <button>Submit</button>
    </div>
  );
}

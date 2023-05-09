import React from "react";
import "./ExampleGiveAway.css";

export default function ExampleGiveAway() {
  return (
    <div className="ExampleGiveAwayMainContainer">
      <div className="ExampleGiveAwayInnerContainer">
        <div className="UpperContainer">
          <h1>Example Give Away!</h1>
          <h3>Enter your Giveaway details:</h3>
          <h5> “Just Complete Actions Below”</h5>
          <h5> Prize: .1 ETH + 1000 RUFF!</h5>
          <h4>Total Entries: 834</h4>
          <h5>Time Left: 4 Days 0:10:37 UTC</h5>
        </div>
        <div className="InnerContainer">
          <button>Your Entries: 0</button>
          <button>Your Entries: 0</button>
          <button>Your Entries: 0</button>
          <button>Your Entries: 0</button>
          <button>Your Entries: 0</button>
          <button>Your Entries: 0</button>
          <button>Your Entries: 0</button>
          <button>Your Entries: 0</button>
        </div>
        <div>
          <button className="SelectButton">Select</button>
        </div>
      </div>
    </div>
  );
}

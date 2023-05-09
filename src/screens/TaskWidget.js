import React from "react";
import "./TaskWidget.css";

export default function TaskWidget() {
  return (
    <div>
      <div>
        <span style={{ fontSize: "35px", fontWeight: "700" }}>Task Widget</span>
      </div>
      <div className="RowDirectionContainer">
        <div className="LeftContainer">
          <div className="EntriesMainContainer" style={{ paddingLeft: "5px" }}>
            <div className="EntriesContainer">
              <p className="EntryCount">0</p>
              <span
                style={{ fontSize: "14px", fontWeight: "300" }}
                className="EntryDescription"
              >
                Your Entries
              </span>
            </div>
            <div className="EntriesContainer">
              <p className="EntryCount">10</p>
              <span
                style={{ fontSize: "14px", fontWeight: "300" }}
                className="EntryDescription"
              >
                Total Entries
              </span>
            </div>
            <div className="EntriesContainer">
              <span className="EntryCount">4 Days</span>
              <p style={{ fontWeight: "700", fontSize: "17px" }}>0:10:37 UTC</p>
              <span
                style={{ fontSize: "15px", fontWeight: "300" }}
                className="EntryDescription"
              >
                Time Left
              </span>
            </div>
          </div>
          <div>
            <span style={{ paddingLeft: "2px" }}>
              YOUR TASKS-WIN 5000 $RUFF
            </span>
            <div className="MainTaskTextContainer">
              <div className="TaskTextColumn">
                <p>Tweet@Your Project and receive 5 likes</p>
                <p>Feb 19, 2023 10:45AM</p>
              </div>
              <button style={{ backgroundColor: "#54CA95", width: "20%" }}>
                +1
              </button>
            </div>
            <div className="MainTaskTextContainer">
              <div className="TaskTextColumn">
                <p>Tweet@Your Project and receive 5 likes</p>
                <p>Feb 19, 2023 10:45AM</p>
              </div>
              <button style={{ backgroundColor: "#54CA95", width: "20%" }}>
                +3
              </button>
            </div>
            <div className="MainTaskTextContainer">
              <div className="TaskTextColumn">
                <p>Tweet@Your Project and receive 5 likes</p>
                <p>Feb 19, 2023 10:45AM</p>
              </div>
              <button style={{ backgroundColor: "#54CA95", width: "20%" }}>
                +5
              </button>
            </div>
            <div className="MainTaskTextContainer">
              <div className="TaskTextColumn">
                <p>Tweet@Your Project and receive 5 likes</p>
                <p>Feb 19, 2023 10:45AM</p>
              </div>
              <button style={{ backgroundColor: "#54CA95", width: "20%" }}>
                +4
              </button>
            </div>
          </div>
        </div>
        <div className="RightContainer">
          <p className="widgetApiHeading">Giveaway Widget API</p>
          <p className="CreateGiveAwayText">
            <b>Create a Giveaway</b> - Load a bounty or giveaway and <br></br>{" "}
            distribute rewards for completing different tasks .
          </p>
          <p className="StartNowText">Start Now &#8594;&#10095;</p>
        </div>
      </div>
    </div>
  );
}

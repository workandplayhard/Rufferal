import React from "react";
import "./ConfirmDeposit.css";
import Toggle from "../components/toggle/toggle";

export default function ConfirmDeposit() {
  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <div className="innerCard">
          <div className="addressText">
            <p className="upperContainerText">
              Deposit<b>ERC-21</b>to this address:
            </p>
            <p className="upperContainerText">
              0x742d3 5Cc6634C0 532925a3b84 4Bc454e4438f44e
            </p>
          </div>
          <div className="lowerContainer">
            <div className="ToggleContainer">
              <p>Vested</p> <Toggle /> <p>Non-Vested</p>
            </div>
            <div>
              <button
                className="confirmButton"
                style={{
                  backgroundColor: "black",
                  width: "200px",
                  height: "60px",
                }}
              >
                <p
                  style={{
                    width: "100%",
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Confirm
                </p>
              </button>
            </div>
            <div>
              <p style={{ fontSize: "25px" }}>Once your Erc-20 is sent continue:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

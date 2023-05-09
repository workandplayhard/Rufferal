import React from "react";
import "./GiveAway.css";
import Toggle from "../components/toggle/toggle";

export default function GiveAway() {
  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <div className="innerCard">
          <div className="addressText">
            <p className="upperContainerText" style={{ width: "100%",justifyContent:'left' }}>
              <span style={{ paddingRight: "5px", fontWeight: "300" }}>
                Deposit
              </span>
              <span style={{ paddingRight: "5px", fontWeight: "700" }}>
                1500 RUFF
              </span>
              <span style={{ paddingRight: "5px", fontWeight: "300" }}>
                to this address:
              </span>
            </p>
            <div className="EnterAmountText">
              <p className="upperContainerText" style={{fontSize:20}}>
                0x3058026FaA939fa34046d11EfccDF3a83B2e0457
              </p>
              <p className="upperContainerText" style={{ fontWeight: 800 }}>
                *You are rewarding 0 RUFF
              </p>
              <p className="upperContainerText" style={{ fontWeight: 800,marginTop:-30 }}>
                for a total ofㅤ<u>25</u>ㅤentries !!!
              </p>
            </div>
          </div>


          <div className="lowerContainerToogle">
            <div className="ToggleContainer">
              <p>Vested</p> <Toggle /> <p>Non-Vested</p>
            </div>
            <div>
              <button
                className="confirmButton"
                style={{
                  backgroundColor: "black",
                  width: "140px",
                  height: "50px",
                  
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
              <p style={{ fontSize: "15px" }}>Once your Erc-20 is sent continue:</p>
            </div>
            <div>
              <p style={{ fontSize: "10px" }}>We take a 1% vesting fee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./SendERC20.css";
import Opensea_Icon from "./../images/Opensea_Icon.png";

export default function SendERC20() {
  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <div className="innerCard">
          <div className="addressText">
            <p className="upperContainerText" style={{ gap: "5px",marginLeft:-120 }}>
              <span style={{ fontWeight: "400" }}>Deposit </span>{" "}
              <span style={{ fontWeight: "bold" }}> ERC-721</span>{" "}
            </p>
            <div
              className="EnterAmountText"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <p
                className="upperContainerText"
                style={{
                  fontWeight: 700,
                  paddingLeft: "20px",
                  fontSize: "15.5px",
                }}
              >
                Enter the amount & token you want to Giveaway:
              </p>
              <p
                className="upperContainerText"
                style={{ paddingLeft: "40px", fontWeight: "400",marginTop:-20 }}
              >
                Transfer manually or through OpenSea
              </p>
            </div>
          </div>
          <div className="lowerContainer">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "80px" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  alignItems: "center",
                  
                }}
              >
                <img
                  src={Opensea_Icon}
                  alt="open sea"
                  style={{ width: "40px", height: "40px" }}
                />
                <p
                  className="OpenSeaText"
                  style={{ fontWeight: "900", fontSize: "30px" }}
                >
                  OpenSea
                </p>
                <input
                  type="checkbox"
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
              <div style={{ paddingTop: "10px" }}>
                <button
                  className="confirmButton"
                  style={{
                    backgroundColor: "black",
                    height: "60px",
                    width: "150px",
                    marginLeft:"40px"
                  }}
                >
                  <p
                    style={{
                      width: "100%",
                      textAlign: "center",
                      fontSize: "27px",
                    }}
                  >
                    Send
                  </p>
                </button>
              </div>
            </div>
            {/* <div>
                <p>Once your Erc-20 is sent continue:</p>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

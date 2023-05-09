import React from "react";
import "./MyWallet.css";
import { IoPersonCircleSharp } from "react-icons/io5";

import MetaMask_Icon from "./../images/MetaMask_Icon.png";
import Bitkeep_Icon from "./../images/Bitkeep_Icon.png";
import Coinbase_Icon from "./../images/Coinbase_icon.png";
import Ledger_Icon from "./../images/Ledger_Icon.png";
import Phantom_Icon from "./../images/Phantom_Icon.jpg";
import Walletconnect_Icon from "./../images/Walletconnect_Icon.png";

export default function MyWallet() {
  return (
    <div className="OuterWalletContainer">
      <div className="InnerWalletContainer">
        <div className="MyWalletTextContainer">
          <IoPersonCircleSharp size={34} />
          <p className="MyWalletActualText"><b>My wallet</b></p>
        </div>
        {/* <div className="MiddleContainer"></div> */}
        <div
          className="MainLowerContainer"
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <p
            style={{
              paddingTop: "20px",
              fontSize: "14px",
              textAlign: "left",
              width: "80%",
              opacity:0.7
            }}
          >
            If you don't have a <span style={{ color: "#2482E2" }}>wallet</span>{" "}
            yet, you can select a <br /> provider and create one now.
          </p>
          <div className="LowerMyWalletContainer">
            <div className="SelectWalletLinks">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  paddingLeft: "5px",
                }}
              >
                <img
                  src={MetaMask_Icon}
                  alt="MetaMask logo"
                  className="MetamaskImageIcon"
                />
                <p style={{ fontWeight: "800" }}>MetaMask</p>
              </div>

              <button
                style={{
                  width: "70px",
                  backgroundColor: "#2181E2",
                  height: "30px",
                  border: "none",
                  borderRadius:8
                }}
              >
                <p
                  style={{ width: "100%", textAlign: "center", color: "white" }}
                >
                  Popular
                </p>
              </button>
            </div>
            <div
              className="SelectWalletLinks"
              style={{
                height: "110px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  paddingLeft: "5px",
                }}
              >
                <img
                  src={Coinbase_Icon}
                  alt="MetaMask logo"
                  className="MetamaskImageIcon"
                />
                <p style={{ fontWeight: "800" }}>Coinbase Wallet</p>
              </div>
              {/* <button style={{ width: "30%" }}>
                <p style={{ width: "100%", textAlign: "center" }}>Popular</p>
              </button> */}
            </div>
            <div
              className="SelectWalletLinks"
              style={{
                height: "110px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  paddingLeft: "5px",
                }}
              >
                <img
                  src={Walletconnect_Icon}
                  alt="MetaMask logo"
                  className="MetamaskImageIcon"
                />
                <p style={{ fontWeight: "800" }}>Walletconnect</p>
              </div>
              {/* <button style={{ width: "30%" }}>
                <p style={{ width: "100%", textAlign: "center" }}>Popular</p>
              </button> */}
            </div>
            <div
              className="SelectWalletLinks"
              style={{
                height: "110px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  paddingLeft: "5px",
                  alignItems: "center",
                }}
              >
                <img
                  src={Ledger_Icon}
                  alt="MetaMask logo"
                  className="MetamaskImageIcon"
                />
                <p style={{ fontWeight: "800" }}>Ledger</p>
              </div>
              {/* <button style={{ width: "30%" }}>
                <p style={{ width: "100%", textAlign: "center" }}>Popular</p>
              </button> */}
            </div>
            <div
              className="SelectWalletLinks"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  paddingLeft: "5px",
                  alignItems: "center",
                }}
              >
                <img
                  src={Phantom_Icon}
                  alt="MetaMask logo"
                  className="MetamaskImageIcon"
                />
                <p style={{ fontWeight: "800" }}>Phantom</p>
              </div>
              <button
                style={{
                  width: "70px",
                  backgroundColor: "lightgray",
                  height: "30px",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <p
                  style={{
                    width: "100%",
                    textAlign: "center",
                    color: "#4F4A46",
                  }}
                >
                  Solana
                </p>
              </button>
            </div>
            <div
              className="SelectWalletLinks"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  paddingLeft: "5px",
                  alignItems: "center",
                }}
              >
                <img
                  src={Bitkeep_Icon}
                  alt="MetaMask logo"
                  className="MetamaskImageIcon"
                />
                <p style={{ fontWeight: "800" }}>BitKeep</p>
              </div>
              <button
                style={{
                  width: "100px",
                  backgroundColor: "lightgray",
                  height: "30px",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <p
                  style={{
                    width: "100%",
                    textAlign: "center",
                    color: "#4F4A46",
                  }}
                >
                  BNB Chain
                </p>
              </button>
            </div>
            <div
              className="SelectWalletLinksShowMoreButton"
              style={{
                height: "80px",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <button className="ShowMoreButton" style={{ height: "10px" }}>
                <p
                  style={{
                    width: "100%",
                    textAlign: "center",
                    fontWeight: "800",
                    color: "black",
                  }}
                >
                  Show More
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

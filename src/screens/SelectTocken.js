import React from "react";
import "./SelectTocken.css";
import ETH_Logo from "./../images/ETH_Logo.png";
import ETH_Icon from "./../images/ETH_Icon.png";
// import inch_Icon from "./../images/1inch_Icon.jpg";
import Dai_Icon from "./../images/Dai_Icon.png";
import USDC_Icon from "./../images/USDC_Icon.png";
import USDT_Icon from "./../images/USDT_Icon.png";
import WBTC_Icon from "./../images/WBTC_Icon.png";
import Inch_Icon from "./../images/Inch_Icon.png";
import Aave_Icon from "./../images/Aave_Icon.jpg";
import Arcblock_Icon from "./../images/Arcblock_Icon.png";
import Alchemy_Icon from "./../images/Alchemy_Icon.png";
import { IoSearch } from "react-icons/io5";

export default function SelectTocken() {
  return (
    <div className="MainSelectTokenContainer">
      <div className="InnerTockenCard">
        <div className="UpperTokenTextContainer">
          <span
            style={{
              fontSize: "18px",
              paddingLeft: "20px",
              paddingTop: "10px",
              fontWeight: "bold",
            }}
          >
            Select a token
          </span>
          <span
            style={{
              fontSize: "20px",
              paddingRight: "20px",
              paddingTop: "10px",
            }}
          >
            X
          </span>
        </div>
        <div className="InputContainer">
          <IoSearch style={{ transform: "translateX(30px)" }} />
          <input
            placeholder="Search name or paste address"
            style={{
              paddingLeft: "30px",
              width: "80%",
              height: "40px",
              borderRadius: "10px",
              backgroundColor: "#F5F6FC",
              border: "1px solid gray",
            }}
          />
        </div>
        <div className="MainIconsBox">
          <div className="IconButton">
            <button
              style={{
                height: "40px",
                width: "80px",
                backgroundColor: "white",
              }}
            >
              <img
                src={ETH_Icon}
                alt="eth logo"
                style={{ width: "30px", height: "30px" }}
              />{" "}
              ETH
            </button>
            <button
              style={{
                height: "40px",
                width: "80px",
                backgroundColor: "white",
              }}
            >
              <img
                src={Dai_Icon}
                alt="eth logo"
                style={{ width: "20px", height: "30px" }}
              />{" "}
              DAI
            </button>
            <button
              style={{
                height: "40px",
                width: "85px",
                backgroundColor: "white",
              }}
            >
              <img
                src={USDC_Icon}
                alt="eth logo"
                style={{ width: "25px", height: "25px" }}
              />{" "}
              USDC
            </button>
          </div>
          <div className="IconButton">
            <button
              style={{
                height: "40px",
                width: "85px",
                backgroundColor: "white",
              }}
            >
              <img
                src={USDT_Icon}
                alt="eth logo"
                style={{ width: "30px", height: "30px" }}
              />{" "}
              USDT
            </button>
            <button
              style={{
                height: "40px",
                width: "85px",
                backgroundColor: "white",
                gap: "2px",
              }}
            >
              <img
                src={WBTC_Icon}
                alt="eth logo"
                style={{ width: "25px", height: "25px" }}
              />{" "}
              WBTC
            </button>
            <button
              style={{
                height: "40px",
                width: "85px",
                backgroundColor: "white",
              }}
            >
              <img
                src={ETH_Logo}
                alt="eth logo"
                style={{ width: "20px", height: "28px" }}
              />{" "}
              WETH
            </button>
          </div>
        </div>
        <div className="BottomEtherContainer" style={{ opacity: "0.5" }}>
          <img
            src={ETH_Icon}
            alt="eth logo"
            style={{ width: "40px", height: "40px" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "20px",
            }}
          >
            <p className="EtherBottomText">Ether</p>
            <span style={{ opacity: "0.6" }}>ETH</span>
          </div>
        </div>
        <div className="BottomEtherContainer">
          <img
            src={ETH_Logo}
            alt="eth logo"
            style={{ width: "40px", height: "40px" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "20px",
            }}
          >
            <p className="EtherBottomText">Wrapped Ether</p>
            <span style={{ opacity: "0.4" }}>WETH</span>
          </div>
        </div>
        <div className="BottomEtherContainer">
          <img
            src={Inch_Icon}
            alt="eth logo"
            style={{ width: "40px", height: "40px" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "20px",
            }}
          >
            <p className="EtherBottomText">1inch</p>
            <span style={{ opacity: "0.4" }}>1INCH</span>
          </div>
        </div>
        <div className="BottomEtherContainer">
          <img
            src={Aave_Icon}
            alt="eth logo"
            style={{ width: "40px", height: "40px" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "20px",
            }}
          >
            <p className="EtherBottomText">Aave</p>
            <span style={{ opacity: "0.4" }}>AAVE</span>
          </div>
        </div>
        <div className="BottomEtherContainer">
          <img
            src={Arcblock_Icon}
            alt="eth logo"
            style={{ width: "40px", height: "40px" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "20px",
            }}
          >
            <p className="EtherBottomText">Arcblock</p>
            <span style={{ opacity: "0.4" }}>ABT</span>
          </div>
        </div>
        <div className="BottomEtherContainer">
          <img
            src={Alchemy_Icon}
            alt="eth logo"
            style={{ width: "40px", height: "40px" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "20px",
            }}
          >
            <p className="EtherBottomText">Alchmey Pay</p>
            <span style={{ opacity: "0.4" }}>ACH</span>
          </div>
        </div>
      </div>
    </div>
  );
}

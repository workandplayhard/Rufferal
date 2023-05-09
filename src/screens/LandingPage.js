import React from "react";
import "./Landing.css";
import Image_2 from "./../images/Image_2.png";
import Image_1 from "./../images/Image_1.png";

export default function LandingPage() {
  return (
    <div
      className="OuterContainer"
      style={{
        backgroundImage: `url(${Image_2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        className="InnerCard"
        style={{
          backgroundImage: `url(${Image_1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "80vh",
          width: "30vw",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: "90px",
          }}
        >
          <div className="UpperRufferalText">
            <p className="RufferalText1">Welcome to RUFFeral!!</p>
            <p className="RufferalText2">What service would you like to use?</p>
          </div>
          <div>
            <button className="TaskWidgetButton" style={{ borderRadius: "0" }}>
              <span
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                + Create New
              </span>
            </button>
          </div>
          <div>
            <button className="SmallCouponButton" style={{ borderRadius: "0" }}>
              <span>My Giveaways</span>
              <span style={{ fontSize: "12px" }}>(0)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

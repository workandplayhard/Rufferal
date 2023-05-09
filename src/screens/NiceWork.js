import React from "react";
import "./NiceWork.css";
import logo_blue_background from "./../images/logo_blue_background.png";

export default function NiceWork() {
  return (
    <div>
      <div className="LoadingOuterContainer">
        <div className="LoadingInnerContainer">
          <div className="ImageContainer">
            <img
              src={logo_blue_background}
              alt="logo blue"
              className="LogoBlue"
              style={{width:400,height:400}}
            />
            <div style={{fontSize:24}}>Nice Work !</div>
          </div>
        </div>
      </div>
    </div>
  );
}

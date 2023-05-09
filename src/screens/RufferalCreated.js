import React from "react";
import "./RufferalCreated.css";
import ProgressBar from "../components/ProgressBar/ProgressBar";
// import Image_4 from "./../images/Image_4.png";
import Image_3 from "./../images/Image_3.png";
import Medium_icon from "./../images/Medium_icon.png";
import Twitter_Icon from "./../images/Twitter_Icon.png";
import shareIcon from "./../images/share.png";
import dogImg from "./../images/dog.png";
import arrow from "./../images/Icon.png";
import advertising from "./../images/advertise.png";
import Telegram from "./../images/telegram.png";
import TikTok from "./../images/TikTok.png";

export default function RufferalCreated() {
  const progress = 200000;
  const maxProgress = 4000000;
  return (
    <div className="outerRufferalContainer">

      <div className="innerRufferalContainer">

        <div className="UpperSuccessContainer">
          <div className="RufferalHeadingContainer">
            <p className="RufferalHeading"><b>RUFFeral Created!</b></p>
          </div>
          <div className="SuccessTextContainer">
            <p>
              You Successfully created a <b><u>Giveaway</u> with a +1500 RUFF Reward!</b> <br />Now
              share it with your <b>Community!</b>
            </p>
          </div>
          <div style={{ display: 'flex', marginLeft: "-70px", marginTop: "-10px" }}>
            <p className="shareRufferallSuccess" style={{ paddingTop: "25px", marginLeft: "70px" }}>
              <u>Share</u>
            </p>
            <img src={shareIcon} style={{ position: 'absolute' }} />
          </div>
        </div>
        <div className="LowerRaidContainer">
          {/* ,backgroundColor:"red",paddingInline:"27.5%",borderRadius:8 */}
          <div className="HeaderContainer" style={{ height: "140px" }}>
            <div className="circle" />
            <img className="dogUpperImg" src={dogImg} />
            {/* <p className="RufferalRaidHead">Rufferal Raid</p> */}
            {/* <ProgressBar value={progress} max={maxProgress} /> */}
            {/* <div className="RufferalRangeContainer">
              <p className="RufferalRange" style={{ paddingTop: "5px" }}>
                200,000 RUFF
              </p>
              <p className="RufferalRange" style={{ paddingTop: "5px" }}>
                4,000,000 RUFF
              </p>
            </div> */}
            <div className="DescriptionContainer">
              <p className="Description">Description </p>
              <img className="DescriptionArrow" src={arrow} />
            </div>
            <p className="ruffCreator">Rufferal Creator: 0x10345..</p>
            <div className="Info">
              <div className="InfoData">
                <p style={{fontSize:30}}>0</p>
                <p style={{fontSize:10}}>Your Entries</p>
              </div>
              <div className="InfoData">
                <p style={{fontSize:30}}>0 days</p>
                <p style={{fontSize:10}}>0:00:00 UTC</p>
                <p style={{fontSize:10}}>Time Left</p>
              </div>
              <div className="InfoData">
                <p style={{fontSize:30}}>0</p>
                <p style={{fontSize:10}}>Total Entries</p>
              </div>
            </div>
          </div>

          <div className="RufferalRaidMiddleContainer">
            {/* <p className="RufferalRaidWinText">Your Tasks - Win 2,000 RUFF</p> */}
            <div className="RufferalRaidFinished">
              <input type="checkbox" className="taskCheckBox"/>
              <img
                src={Twitter_Icon}
                alt="twitter logo"
                className="TwitterImage"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "60%",
                }}
              >
                <p className="TweetText"><b>Tweet @YourProject and receive 5 likes</b></p>
                <span style={{ opacity: "0.6", fontSize: "10px" }}>
                  Feb 19, 2023 10:45 AM
                </span>
              </div>
              <button className="ClaimButton">
                <p className="buttonText">Claim</p>
              </button>
            </div>
            
            <div className="RufferalRaidFinished">
              <input type="checkbox" className="taskCheckBox"/>
              <img
                src={Telegram}
                alt="telegram logo"
                className="TelegramImage"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "60%",
                }}
              >
                <p className="TweetText"><b>Refer 5 people to the Telegram, WIN $100</b></p>
                <span style={{ opacity: "0.6", fontSize: "10px" }}>
                  Feb 28, 2023 4:10 PM
                </span>
              </div>
              <button className="ClaimButton">
                <p className="buttonText">Claim</p>
              </button>
            </div>
            <div className="RufferalRaidFinished">
              <input type="checkbox" className="taskCheckBox"/>
              <img
                src={TikTok}
                alt="tiktok logo"
                className="TikTokImage"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "60%",
                }}
              >
                <p className="TweetText"><b>Do a dance on TikTok</b></p>
                <span style={{ opacity: "0.6", fontSize: "10px" }}>
                  Mar 04, 2023 3:35 PM
                </span>
              </div>
              <button className="ClaimButton">
                <p className="buttonText">Claim</p>
              </button>
            </div>
          </div>
          <div className="BottomRaidContainer">
            <img src={advertising} className="advertising"/>
          </div>
        </div>
      </div>
    </div>
  );
}

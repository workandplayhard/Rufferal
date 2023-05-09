import React from "react";
import "./RewardInput.css";

const RewardInput = (props) => {
  
  return (
    <div style={{ width: 500, height: "180px", marginBottom: "10px" }}>
      <div className="NameYourReward" style={{ textAlign: "center",marginLeft:-150 }}>
        <b>Reward</b> <span style={{ opacity: "0.6" }}><i>Name your Reward</i></span>
      </div>
      <div className="NYRInput">
        <textarea
        onChange={(event) => {props.rewardData(event.target.value)}}
        required
          style={{
            
            height: "140px",
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default RewardInput;

import React from "react";
import "./EnterPersonalWallet.css";


const EnterPersonalWallet = (props) => {
 

  return (
    <div className="checkboxAddressContainer" style={{width:'100%'}}>
      <span className="CheckBoxTextMain">
        <b>Enter your personal wallet address:{" "}</b>
        <span style={{ fontSize: "16px", opacity: "0.6" }}><i>(Required)</i></span>
      </span>
      <div
        className="newContractAddressDiv"
        style={{ display: "flex", justifyContent: "left" }}
      >
        <input
          type="text"
          // placeholder="Contract Address"
          className="newContractAddress"
          required
        />
      </div>
    </div>
  )
};

export default EnterPersonalWallet;

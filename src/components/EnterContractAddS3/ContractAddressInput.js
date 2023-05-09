import React from "react";
import "./ContractAddressInput.css";


const ContractAddressInput = (props) => {
 

  return (
    <div className="checkboxAddressContainer" style={{width:'100%'}}>
      <span className="CheckBoxTextMain">
        <b>Enter your project's contract address:{" "}</b>
        <span style={{ fontSize: "16px", opacity: "0.6" }}><i>(Optional)</i></span>
      </span>
      <div
        className="newContractAddressDiv"
        style={{ display: "flex", justifyContent: "left" }}
      >
        <input
          type="text"
          // placeholder="Contract Address"
          className="newContractAddress"
        />
      </div>
    </div>
  )
};

export default ContractAddressInput;

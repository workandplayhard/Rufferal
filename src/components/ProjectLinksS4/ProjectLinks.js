import React from "react";
import "./ProjectLinks.css";

const ProjectLinks = (props) => {
  
  return (
    <div className="main-input-container">
      <div style={{ width: "100%", textAlign: "center" }}>
        <span className="CheckBoxTextM">
          {" "}
          <b>Enter Official Project Links:{" "}</b>
          <span style={{ fontSize: "16px", opacity: "0.6" }}><i>(Optional)</i></span>
        </span>
      </div>
      <div className="icon-row" style={{ width: "100%" }}>
        <input
          placeholder=" ...Twitter.com/yourproject"
          style={{ height: "20px",marginTop:5,marginRight:20,marginLeft:25,opacity:0.8,width:175,height:25,borderColor: "rgba(0,0,0,0.2)",borderWidth:1.25,borderRadius:4 }}
          onChange={(event) => {props.projectLinkState(event.target.value)}}
        />
        <span className="icon dex-tools"></span>
        <span className="icon twitter"></span>
        <span className="icon bsc-explorer"></span>
        <span className="icon telegram"></span>
        {/* <span className="icon blockchainETH"></span> */}
      </div>
      {/* <div className="dexToolIn-div">
        <input
          type="text"
          className="DexToolsIn"
          placeholder="Dex Tools Link"
        />
      </div>
      <div className="dexToolIn-div">
        <input
          type="text"
          className="DexToolsIn"
          placeholder="Dex Tools Link"
        />
      </div>
      <div className="dexToolIn-div">
        <input type="text" className="DexToolsIn" placeholder="Other link" />
      </div>
      <div className="dexToolIn-div">
        <input
          type="text"
          className="DexToolsIn"
          placeholder="Dex Tools Link"
        />
      </div>
      <div className="dexToolIn-div">
        <input
          type="text"
          className="DexToolsIn"
          placeholder="Dex Tools Link"
        />
      </div>
      <div className="dexToolIn-div">
        <input
          type="text"
          className="DexToolsIn"
          placeholder="Dex Tools Link"
        />
      </div>
      <div className="dexToolIn-div">
        <input
          type="text"
          className="DexToolsIn"
          placeholder="Dex Tools Link"
        />
      </div> */}
    </div>
  );
};

export default ProjectLinks;

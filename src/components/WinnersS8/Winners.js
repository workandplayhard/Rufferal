import React from "react";
import "./Winners.css";

const Winners = (props) => {
  
  
  return (
    <div
      className="ChooseWinnerContainer"
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        fontSize: "14px",
        marginTop:20,
        justifyContent:'center'
      }}
    >
      <span className={"theWinners"} style={{ textAlign: "left",textDecoration:"underline" }}><b>Choose # of winners</b> </span>
      <input
        onChange={(event) => {props.chooseWinnerData(event.target.value)}}
        type="text"
        className="smallInputField"
        maxLength="5"
        size="5"
        style={{ width: 50, marginLeft: "10px" }}
        placeholder=""
      />
      <span style={{ marginLeft: "10px",color:"rgba(0,0,0,0.5)" }}>ㅤㅤOR split evenly:</span>
      <input
      onClick={()=> {props.splitEvenlyData(true)}}
        type="checkbox"
        className="exampleCheckbox"
        style={{ marginLeft: "10px", transform: "scale(1.3)" }}
      />
    </div>
  );
};

export default Winners;

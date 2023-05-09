import React from "react";
import "./Promotiontype.css";

const PromotionType = (props) => {
  
  return (
    <div
      className="promotion-type-container"
      style={{ width: "100%", textAlign: "center" }}
    >
      <div style={{ width: "100%", textAlign: "center",marginLeft:-15,marginTop:-30 }}>
        <span className="CheckBoxTextM2" style={{ color: "black" }}>
          {" "}
          <b>Choose promotion type{" "}</b>
          <span style={{ fontSize: "16px", opacity: "0.6" }}>
            <i>Select all that apply</i>
          </span>
        </span>
      </div>

      <ol style={{ width: "100%",justifyContent:"center",marginLeft:10 }}>
        {" "}
        {/*removed the className */}
        <div className="Checkbox_Align_box">
          <ol
            className="checkbox-list"
            // style={{ marginRight: "auto", marginLeft: "auto" }}
          >
            <li className="first-list">
              <label className="first-label">
                <div className="first-div">
                  {/* Display a heading for the first checkbox */}
                  <p className="checkbox-label" style={{ color: "black" }}>
                    <span style={{ opacity: "0.6",textAlign:"left" }}>
                      White List/<br/>
                      Private saleㅤㅤ
                    </span>
                  </p>
                  <input type="checkbox" className="first-checkbox" checked={props.checkboxValue !== ""}
            onChange={props.onCheckboxChange}/>
                  
                </div>

                {/* Display a placeholder for the first checkbox */}
                {/* <span className="checkbox-placeholder">(Private sale)</span> */}
              </label>
            </li>
            <li className="first-list">
              <label className="first-label">
                <div className="first-div">
                  {/* Display a heading for the first checkbox */}
                  <p className="checkbox-label" style={{ color: "black" }}>
                    <span style={{ opacity: "0.6",textAlign:"left" }}>
                      Giveaway Token<br/>
                      (ERC-20)
                    </span>
                  </p>
                  <input type="checkbox" className="first-checkbox" />
                </div>

                {/* Display a placeholder for the first checkbox */}
                {/* <span className="checkbox-placeholder">(Private sale)</span> */}
              </label>
            </li>
            <li className="first-list">
              <label className="first-label">
                <div className="first-div">
                  {/* Display a heading for the first checkbox */}
                  <p className="checkbox-label" style={{ color: "black" }}>
                    <span style={{opacity: "0.6",textAlign:"left" }}>
                      Giveaway<br/>
                      Something else!
                    </span>
                  </p>
                  <input type="checkbox" className="first-checkbox" />
                </div>

                {/* Display a placeholder for the first checkbox */}
                {/* <span className="checkbox-placeholder">(Private sale)</span> */}
              </label>
            </li>
            <li className="first-list">
              <label className="first-label">
                <div className="first-div">
                  {/* Display a heading for the first checkbox */}
                  <p className="checkbox-label" style={{ color: "black" }}>
                    <span style={{ opacity: "0.6",textAlign:"left" }}>
                      Giveaway NFT<br/>
                      (ERC-721/ 1155)
                    </span>
                  </p>
                  <input type="checkbox" className="first-checkbox" />
                </div>

                {/* Display a placeholder for the first checkbox */}
                {/* <span className="checkbox-placeholder">(Private sale)</span> */}
              </label>
            </li>
          </ol>
        </div>
      </ol>
    </div>
  );
};

export default PromotionType;

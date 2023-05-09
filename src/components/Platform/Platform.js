import React from "react";
import "./Platform.css";

function Platform(props) {
    return (
        <div className="block" style={{ gap: "20px", ...(props.icon !== undefined ? { marginLeft: -50 } : {}) }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",

                }}
            >
                {props.icon !== undefined && (
                    <div
                        className="Section_2_Icon_Pic"
                        style={{ backgroundImage: "url(" + props.icon + ")" }}
                    ></div>
                )}
                <span class="name">{props.platform}</span>
            </div>

            <input type="checkbox" class="checkbox" style={{marginLeft:props.margin}}
                onChange={props.handleCheckboxChange} />
        </div>
    );
}

export default Platform;
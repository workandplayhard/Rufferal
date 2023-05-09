import React from "react";
import "./PromoDuration.css";

function PromoDuration() {
    return (
        <div>
            <div
                className="Section_2_Inner_Heading_2"
                style={{ width: "100%", textAlign: "center", marginLeft: 15, marginTop: 20 }}
            >
                Duration:{" "}
                <span className="Extra_Text_1">
                    {" "}
                    <span style={{ opacity: "0.6" }}>
                        (How long would you like the promotion to last?)
                    </span>
                </span>{" "}
            </div>

            <div
                className="Section_2_Seg_2"
                style={{
                    width: 400,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: -50
                }}
            >
                <input type="text" required className="Section_2_Seg_2_Input" />
            </div>
        </div>
    );
}

export default PromoDuration;
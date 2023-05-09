import React from "react";
import "./CounterParty.css";

function CounterParty(props) {
    return (
        <div className="CounterPartyContainer">
            <div
                className="CounterParty_Inner_Heading_2"
                style={{ width: "100%", textAlign: "left"}}
            >
                Counter-party: <span className="CounterParty_Text_1" style={{ opacity: 0.5 }}> (Optional)</span>{" "}
            </div>

            <div
                className="CounterParty_2_Seg_2"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                    justifyContent: "left",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        width: 400,
                        justifyContent: "center",
                        display: "flex",
                        marginLeft: -75
                    }}
                >
                    <input type="text" className="CounterParty_2_Seg_2_Input" onChange={(event) => { props.counterPartyData(event.target.value) }} />
                </div>
                <span
                    style={{
                        fontSize: "16px",
                        opacity: "0.6",
                        textAlign: "left",
                        width: "100%",
                        marginLeft: 20
                    }}
                >
                    + add more
                </span>
            </div>
        </div>
    );
}

export default CounterParty;
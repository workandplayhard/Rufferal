import React,{useState} from "react";
import "./GiveAwayButton.css";
import { addDoc,collection } from "firebase/firestore";
//import { db } from "../SwitchS1/firebase";


function GiveAwayButton() {
  


    return (
        <div>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px",
                }}
            >
                <button //onClick={createPromoter}
                    className="Section_2_Inner_Button_1"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0",
                        width: 200,
                        marginTop: 90
                    }}
                >
                    <span style={{ width: "100%", textAlign: "center", margin: "0" }}>
                        <b>+ Create Giveaway!</b>
                    </span>
                </button>
            </div>
        </div>
    );
}

export default GiveAwayButton;
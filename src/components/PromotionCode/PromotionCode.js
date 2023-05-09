import React from "react";
import "./PromotionCode.css";

function PromotionCode(props) {
    return (
        <div className="PromoCodeContainer">
            <div
                className="PromoCode_Inner_Heading_2"
                style={{ width: "100%", textAlign: "center" }}
            >
                Promotion code OPTIONAL {" "}
                <span className="PromoCode_Text_1">
                    {" "}
                    <span style={{ opacity: "0.6" }}>
                        (Add a code to participate in this Giveaway)
                    </span>
                </span>{" "}
            </div>

            <div
                className="PromoCode_Seg_2"
                style={{
                    width: 400,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    
                }}
            >
                <input
                    onChange={(event) => { props.promotionCodeData(event.target.value) }}
                    type="text"
                    className="PromoCode_Seg_2_Input"
                    placeholder="(Leave blank if NO promo code...)"
                    style={{ fontSize: "12px" }}
                />
            </div>
        </div>
    );
}

export default PromotionCode;
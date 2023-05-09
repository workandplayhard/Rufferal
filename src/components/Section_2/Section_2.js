import React, { useState } from "react";
import "./Section_2.css";
import Image_4 from "./../images/Image_4.png";
import Image_6 from "./../images/Image_6.png";
import Image_7 from "./../images/Image_7.png";
import Image_8 from "./../images/Image_8.png";
import Image_9 from "./../images/Image_9.png";
import Image_10 from "./../images/Image_10.png";
import Image_11 from "./../images/Image_11.png";
import Winners from "../WinnersS8/Winners";
// require('dotenv').config();
import createPromoter from '../../HomePage';


const Section2 = (props) => {
  const [chooseWinner, setChooseWinner] = useState(0)
  const [checkedCount, setCheckedCount] = useState(0);


  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      if (checkedCount >= 3) {
        alert("Max socials added");
        event.target.checked = false;
        return;
      }
      setCheckedCount((prevState) => prevState + 1);
    } else {
      setCheckedCount((prevState) => prevState - 1);
    }
  };

  const chooseWinnerBridge = (chooseWinnerValue) => {
    setChooseWinner(chooseWinnerValue)
    console.log(chooseWinner)
    return
  }

  // Get the Twitter checkbox element
  document.addEventListener('DOMContentLoaded', function () {
    const twitterCheckbox = document.querySelector('twitter-checkbox');

    // Add a click event listener to the Twitter checkbox
    twitterCheckbox.addEventListener('click', function () {
      // If the checkbox is checked
      if (twitterCheckbox.checked) {
        // Redirect the user to the Twitter OAuth login page
        window.location.href = `https://api.twitter.com/oauth/authorize?oauth_token=[your_oauth_token]`;
      }
    });
  });

  return (
    <div className="Section_1_Box_1">
      <div className="Section_1_Inner_Box_1">
        {/* <div
          className="Section_2_Inner_Heading_2"
          style={{ textAlign: "center", marginLeft: 130 }}
        >
          Total Amount of Entries{" "}
          <span className="Extra_Text_1">
            {" "}
            <span style={{ opacity: "0.6" }}>
              (Total amount of entries to complete Giveaway )
            </span>
          </span>{" "}
        </div>

        <div
          className="Section_2_Seg_2"
          style={{ display: "flex", justifyContent: "center", marginLeft: 72, width: 400 }}
        >
          <input type="text" className="Section_2_Seg_2_Input" required onChange={(event) => { props.totalEntriesData(event.target.value) }} />
        </div> */}
        {/* <div
          className="Section_2_Inner_Heading_2"
          style={{ textAlign: "center", marginLeft: 150, marginTop: 30 }}
        >
          Max Amount of Entries per User{" "}
          <span className="Extra_Text_1">
            {" "}
            <span style={{ opacity: "0.6" }}>
              (Max amount of entries allowed per User)
            </span>
          </span>{" "}
        </div>

        <div
          className="Section_2_Seg_2"
          style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
            marginLeft: 72,
            width: 400
          }}
        >
          <input type="text" className="Section_2_Seg_2_Input" required onChange={(event) => { props.maxEntriesEachData(event.target.value) }} />
        </div> */}
        {/* <Winners chooseWinnerData={chooseWinnerBridge} /> */}
        {/* <div
          className="Section_2_Inner_Heading_2"
          style={{ width: "100%", textAlign: "center", marginLeft: 30, marginTop: 20 }}
        >
          What Platforms would you like to add?{" "}
          <span className="Extra_Text_1">
            {" "}
            <span style={{ opacity: "0.6" }}>Select all that apply.</span>
          </span>{" "}
        </div>

        <div className="Section_2_Seg_2">
          <section style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: 'center',

              }}
            >
              <div className="Section_2_Icon_Box_1">
                <div
                  className="Section_2_Icon_Pic"
                  style={{ backgroundImage: "url(" + Image_4 + ")" }}
                ></div>

                <div className="Section_2_Inner_text_1">Twitter</div>

                <label className="container2">
                  <input type="checkbox" style={{ width: "30px" }} id="twitter-checkbox"
                    // onClick={(event) => {
                    //   if (event.target.checked) {
                    //     alert('Click OK to authorize your Twitter account');
                    //     window.location.href='https://api.twitter.com/oauth/authorize?oauth_token=your_oauth_token';
                    //   }
                    // }} 
                    onChange={handleCheckboxChange} />
                  <span className="checkmark2"></span>
                </label>

              </div>

              <br />

              <div className="Section_2_Icon_Box_2">
                <div className="Section_2_Inner_text_1">
                  Worth # of Entries{" "}
                </div>

                <input
                  onChange={(event) => { props.worthEntriesData(event.target.value) }}
                  required
                  placeholder="2"
                  type="text"
                  style={{ width: "60px", backgroundColor: "white" }}
                />
              </div>
            </div>

            <br />

            <div className="textArea">
              <div style={{ marginTop: -60, marginRight: 20 }}>#1</div>
              <textarea style={{ height: 80, textAlign: 'left', opacity: 0.6 }} onChange={(event) => { props.taskMessageData(event.target.value) }} required placeholder="Tweet @YourProject and receive 5 Likes. Add #RUFF and get 10 RUFF!!"></textarea>
            </div>

            <br />

            <div
              className="Flex_This_1"
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginLeft: 50,
                marginTop: -10
              }}
            >
              <span style={{opacity:0.6}}>+ add another task</span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 100,
                  

                }}
              >
                <span
                  className="Section_2_Inner_text_1"
                  style={{ fontSize: "14px", padding: "5px",opacity:0.6 }}
                >
                  Required
                </span>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round" style={{}}></span>
                </label>
              </div>
            </div>

            <br />

            <div style={{ marginLeft: 150 }}>
              <div class="block" style={{ gap: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",

                  }}
                >
                  <div
                    className="Section_2_Icon_Pic"
                    style={{ backgroundImage: "url(" + Image_6 + ")" }}
                  ></div>
                  <span class="name">Telegram</span>
                </div>

                <input type="checkbox" class="checkbox" style={{ marginLeft: 0 }}
                  //   onClick={(event) => {
                  //   if (event.target.checked) {
                  //     alert('Click OK to authorize your Telegram account');
                  //     window.location.href='https://oauth.telegram.org/auth?bot_id=your_bot_id&redirect_uri=your_redirect_uri&auth_url=your_auth_url';
                  //   }
                  // }} 
                  onChange={handleCheckboxChange} />
              </div>
              <div class="block" style={{ gap: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <div
                    className="Section_2_Icon_Pic"
                    style={{ backgroundImage: "url(" + Image_7 + ")" }}
                  ></div>
                  <span class="name">Instagram</span>
                </div>

                <input type="checkbox" class="checkbox" style={{ marginLeft: -5 }}
                  //   onClick={(event) => {
                  //   if (event.target.checked) {
                  //     alert('Click OK to authorize your Instagram account');
                  //     window.location.href='https://api.instagram.com/oauth/authorize?client_id=your_client_id&redirect_uri=your_redirect_uri&response_type=code';
                  //   }
                  // }} 
                  onChange={handleCheckboxChange} />
              </div>
              <div class="block" style={{ gap: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <div
                    className="Section_2_Icon_Pic"
                    style={{ backgroundImage: "url(" + Image_8 + ")" }}
                  ></div>
                  <span class="name">Medium</span>
                </div>

                <input type="checkbox" class="checkbox" style={{ marginLeft: 7.5 }}
                  //   onClick={(event) => {
                  //   if (event.target.checked) {
                  //     alert('Click OK to authorize your Medium account');
                  //     window.location.href='https://medium.com/m/oauth/authorize?client_id=your_client_id&scope=basicProfile,publishPost&state=your_state&response_type=code&redirect_uri=your_redirect_uri';
                  //   }
                  // }} 
                  onChange={handleCheckboxChange} />
              </div>
              <div class="block" style={{ gap: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <div
                    className="Section_2_Icon_Pic"
                    style={{ backgroundImage: "url(" + Image_9 + ")" }}
                  ></div>
                  <span class="name">Youtube</span>
                </div>

                <input type="checkbox" class="checkbox" style={{ marginLeft: 7 }}
                  //   onClick={(event) => {
                  //   if (event.target.checked) {
                  //     alert('Click OK to authorize your Instagram account');
                  //     window.location.href='https://accounts.google.com/o/oauth2/auth?client_id=your_client_id&redirect_uri=your_redirect_uri&scope=https://www.googleapis.com/auth/youtube.upload&response_type=code&access_type=offline&approval_prompt=force';
                  //   }
                  // }} 
                  onChange={handleCheckboxChange} />
              </div>
              <div class="block" style={{ gap: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <div
                    className="Section_2_Icon_Pic"
                    style={{ backgroundImage: "url(" + Image_10 + ")" }}
                  ></div>
                  <span class="name">TikTok</span>
                </div>

                <input type="checkbox" class="checkbox" style={{ marginLeft: 18 }}
                  //   onClick={(event) => {
                  //   if (event.target.checked) {
                  //     alert('Click OK to authorize your TikTok account');
                  //     window.location.href='https://open-api.tiktok.com/platform/oauth/connect/?client_key=your_client_key&redirect_uri=your_redirect_uri&response_type=code&scope=user.info.share&state=your_state';
                  //   }
                  // }} 
                  onChange={handleCheckboxChange} />
              </div>
              <div class="block" style={{ gap: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <div
                    className="Section_2_Icon_Pic"
                    style={{ backgroundImage: "url(" + Image_11 + ")" }}
                  ></div>
                  <span class="name">Discord</span>
                </div>

                <input type="checkbox" class="checkbox" style={{ marginLeft: 10 }}
                  //   onClick={(event) => {
                  //   if (event.target.checked) {
                  //     alert('Click OK to authorize your Discord account');
                  //     window.location.href='https://discord.com/api/oauth2/authorize?client_id=your_client_id&redirect_uri=your_redirect_uri&response_type=code&scope=identify email&state=your_state';
                  //   }
                  // }}
                  onChange={handleCheckboxChange} />
              </div>
              <div class="block" style={{ gap: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <div
                    className="Section_2_Icon_Pic_Other"

                  ></div>
                  <span class="name">Other</span>
                </div>

                <input type="checkbox" class="checkbox" style={{ marginLeft: 23 }}
                  //   onClick={(event) => {
                  //   if (event.target.checked) {
                  //     alert('Click OK to authorize your Discord account');
                  //     window.location.href='https://discord.com/api/oauth2/authorize?client_id=your_client_id&redirect_uri=your_redirect_uri&response_type=code&scope=identify email&state=your_state';
                  //   }
                  // }}
                  onChange={handleCheckboxChange} />
              </div>
            </div>
          </section>
        </div> */}

        {/* <div
          className="Section_2_Inner_Heading_2"
          style={{ width: "100%", textAlign: "center", marginLeft: 60 }}
        >
          Promotion code OPTIONAL {" "}
          <span className="Extra_Text_1">
            {" "}
            <span style={{ opacity: "0.6" }}>
              (Add a code to participate in this Giveaway)
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

            marginLeft: 65
          }}
        >
          <input
            onChange={(event) => { props.promotionCodeData(event.target.value) }}
            type="text"
            className="Section_2_Seg_2_Input"
            placeholder="(Leave blank if NO promo code...)"
            style={{ fontSize: "12px" }}
          />
        </div> */}

        {/* <div
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
            marginLeft: 65
          }}
        >
          <input type="text" required className="Section_2_Seg_2_Input" />
        </div> */}

        {/* <div
          className="Section_2_Inner_Heading_2"
          style={{ width: "100%", textAlign: "left", marginLeft: 145 }}
        >
          Counter-party: <span className="Extra_Text_1" style={{ opacity: 0.5 }}> (Optional)</span>{" "}
        </div>

        <div
          className="Section_2_Seg_2"
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
              marginLeft: -95
            }}
          >
            <input type="text" className="Section_2_Seg_2_Input" onChange={(event) => { props.counterPartyData(event.target.value) }} />
          </div>
          <span
            style={{
              fontSize: "16px",
              opacity: "0.6",
              textAlign: "left",
              width: "100%",
              marginLeft: 300
            }}
          >
            + add more
          </span>
        </div> */}

        {/* <br /> */}
        {/* <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <button onClick={createPromoter}
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
        </div> */}
      </div>
      
    </div>

  );
};



export default Section2;

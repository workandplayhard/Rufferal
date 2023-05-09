import React,{useState} from "react";
import "./PlatformsToAdd.css";
import Image_4 from "./../images/Image_4.png";
import Image_6 from "./../images/Image_6.png";
import Image_7 from "./../images/Image_7.png";
import Image_8 from "./../images/Image_8.png";
import Image_9 from "./../images/Image_9.png";
import Image_10 from "./../images/Image_10.png";
import Image_11 from "./../images/Image_11.png";
import Platform from "../Platform/Platform";

function PlatformsToAdd(props) {
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

    return (
        <div>
            <div
                className="Platforms_Inner_Heading_2"
                style={{ width: "100%", textAlign: "center", marginLeft: 30, marginTop: 20 }}
            >
                What Platforms would you like to add?{" "}
                <span className="Platforms_Text_1">
                    {" "}
                    <span style={{ opacity: "0.6" }}>Select all that apply.</span>
                </span>{" "}
            </div>

            <div className="Platforms_2_Seg_2">
                <section style={{ width: "100%" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            justifyContent: 'center',

                        }}
                    >
                        <div className="Platforms_2_Icon_Box_1">
                            <div
                                className="Platforms_2_Icon_Pic"
                                style={{ backgroundImage: "url(" + Image_4 + ")" }}
                            ></div>

                            <div className="Platforms_2_Inner_text_1">Twitter</div>

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

                        <div className="Platforms_2_Icon_Box_2">
                            <div className="Platforms_2_Inner_text_1">
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

                    <div className="PlatformstextArea">
                        <div style={{ marginTop: -60, marginRight: 20 }}>#1</div>
                        <textarea style={{ height: 80, textAlign: 'left', opacity: 0.6,marginLeft:0 }} onChange={(event) => { props.taskMessageData(event.target.value) }} required placeholder="Tweet @YourProject and receive 5 Likes. Add #RUFF and get 10 RUFF!!"></textarea>
                    </div>

                    <br />

                    <div
                        className="Flex_This_1"
                        style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            marginTop: -10,
                        }}
                    >
                        <span style={{ opacity: 0.6 }}>+ add another task</span>
                        <div
                            className="Separator"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                              


                            }}
                        >
                            <span
                                className="Platforms_2_Inner_text_1"
                                style={{ fontSize: "14px", padding: "5px", opacity: 0.6 }}
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

                    <div className={"ProjectsContainer"}>
                        
                        <Platform icon={Image_6} margin={0} platform={"Telegram"} handleCheckboxChange={handleCheckboxChange}/>
                        <Platform icon={Image_7} margin={-5} platform={"Instagram"} handleCheckboxChange={handleCheckboxChange}/>
                        <Platform icon={Image_8} margin={7.5} platform={"Medium"} handleCheckboxChange={handleCheckboxChange}/>
                        <Platform icon={Image_9} margin={7} platform={"Youtube"} handleCheckboxChange={handleCheckboxChange}/>
                        <Platform icon={Image_10} margin={18} platform={"TikTok"} handleCheckboxChange={handleCheckboxChange}/>
                        <Platform icon={Image_11} margin={12} platform={"Discord"} handleCheckboxChange={handleCheckboxChange}/>
                        <Platform platform={"Other"} margin={23} handleCheckboxChange={handleCheckboxChange}/>
                        
                        
                        
                    </div>
                </section>
            </div>
        </div>
    );
}

export default PlatformsToAdd;
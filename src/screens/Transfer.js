import React, { PureComponent } from "react";
import "./Transfer.css";
import SearchInput from "../components/SearchInput";
import { IoCartOutline, IoCardOutline } from "react-icons/io5";
import InputComponent from "../components/Input";
import Opensea_Icon from "./../images/Opensea_Icon.png";
import Blue_Icon from "./../images/Blue_Icon.jpg";
import Burger from "../components/BurgerMenu";

export default class Transfer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isSmallScreen: window.innerWidth <= 750,
    };
  }

  handleResize = () => {
    this.setState({ isSmallScreen: window.innerWidth <= 750 });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    const { isSmallScreen } = this.state;
    return (
      <div className="MainTransferContainer">
        <div className="TransferContainer">
          <div className="TransferInnerContainer">
            <div className="upperContainer">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "10px",
                }}
              >
                <img
                  src={Opensea_Icon}
                  alt="Open Sea"
                  style={{ width: "30px", height: "30px" }}
                />
                <p className="Opeansea">OpenSea</p>
              </div>
              <div style={{ width: "50%" }}>
                <SearchInput />
              </div>
              {isSmallScreen ? (
                <div
                  className="small-screen-links"
                  style={{
                    width: "5%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "40px",
                  }}
                >
                  <Burger />
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "row",fontWeight:'bold' }}>
                  <div>
                    <p className="navText">Drops</p>
                  </div>
                  <div>
                    <p className="navText">Stats</p>
                  </div>
                  <div>
                    <p className="navText">Resources</p>
                  </div>
                </div>
              )}

              <div>
                <img
                  src={Blue_Icon}
                  alt="Blue Icon"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <div>
                <IoCartOutline size={30} />
              </div>
              <div>
                <IoCardOutline size={30} />
              </div>
            </div>
            <div className="middleSection">
              <h1 style={{marginBottom:36}}>Transfer</h1>
              <div className="blackContainer"></div>
            </div>
            <div className="lowerContainer">
              <div>
                <p className="transferNFTText" style={{marginRight:280}}>Transfer "NFT" to:</p>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InputComponent />
              </div>
              <div
                className="TransferButtonContainer"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border:0
                }}
              >
                <button className="TransferButton">
                  <p style={{ textAlign: "center", width: "100%" }}>Transfer</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

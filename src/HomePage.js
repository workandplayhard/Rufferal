import React from "react";
import "./App.css";
import SwitchButton from "./components/SwitchS1/SwitchButton";
import logo from "./icons/logo.png";
// import SocialMediaCheckboxes from "./components/SocialMediaCheckBoxesS9/SocialMediaCheckboxes";
import Web3 from "web3";
import Checkboxes from "./components/CheckboxesS2/Checkboxes";
import ContractAddressInput from "./components/EnterContractAddS3/ContractAddressInput";
import PromotionType from "./components/PromotionTypeS5/PromotionType";
// import Winners from "./components/WinnersS8/Winners";
import ProjectLinks from "./components/ProjectLinksS4/ProjectLinks";
import RewardInput from "./components/RewardInputS8/RewardInput";
//import SubmitButton from "./components/SubmitButton/SubmitButton";
import Section2 from "./components/Section_2/Section_2";
import { Link } from "react-router-dom";
import { database } from "./components/Db/firebase";
//import {addDoc, collection, getDocs} from 'firebase/firestore'
import GiveawayName from "./components/NameGiveAway/NameGiveAway";
//import EnterPersonalWallet from "./components/EnterPersonalWallet/EnterPersonalWallet";
// import Section2InnerButton1 from "./components/Section_2/Section2InnerButton1/Section2InnerButton1";
//import { TransactionContext } from "./context/TransactionContext";
import EnterUserName from "./components/EnterUserName/EnterUserName";
import { useState } from "react";
import TotalAmountEntries from "./components/TotalAmountEntries/TotalAmountEntries";
import MaxAmountOfEntries from "./components/MaxAmountOfEntries/MaxAmountOfEntries";
import Winners from "./components/WinnersS8/Winners";
import PlatformsToAdd from "./components/PlatformsToAdd/PlatformsToAdd";
import PromotionCode from "./components/PromotionCode/PromotionCode";
import PromoDuration from "./components/PromoDuration/PromoDuration";
import CounterParty from "./components/CounterParty/CounterParty";
import GiveAwayButton from "./components/GiveAwayButton/GiveAwayButton";

const Home = () => {

  const [chooseWinner, setChooseWinner] = useState('')

  //connecting to metamask wallet
  //const {connectWallet} = useContext(TransactionContext);

  const chooseWinnerBridge = (chooseWinnerValue) => {
    setChooseWinner(chooseWinnerValue)
    console.log(chooseWinner)
    return
  }

  

  const componentDidMount = () => {
    if (window.ethereum) {
      window.ethereum.enable().then(() => {
        const web3 = new Web3(window.ethereum);
        // Now you can use the web3 instance to interact with the user's wallet
        web3.eth.getAccounts().then(console.log);
      });
    }
  }


  
    return (
      <>
      
        <div className="App">
          <div
            className="card"
          >
            <img src={logo} style={{margin:20}}/>
            <form>
              <div className="toggle-container">
                <span className="toggle-text-left"> Ethereum</span>
                <SwitchButton
                  onChange={(checked) =>
                    console.log("Switch toggled:", checked)
                  }
                />
                <span className="toggle-text-right"> Binance Smart Chain</span>
              </div>
              <div>&nbsp;</div>
              <Checkboxes />
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <ContractAddressInput/>
              <ProjectLinks/>
              <div>&nbsp;</div>
              <PromotionType/>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <RewardInput/>
              <GiveawayName/>
              <TotalAmountEntries/>
              <MaxAmountOfEntries/>
              <Winners chooseWinnerData={chooseWinnerBridge}/>
              <PlatformsToAdd/>
              <PromotionCode/>
              <PromoDuration/>
              <CounterParty/>
              <GiveAwayButton/>
              {/* <Section2/> */}
            </form>
          </div>
        </div>
      </>
    );
  }

export default Home;

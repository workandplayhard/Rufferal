import React, { useState } from "react";
import "./SwitchButton.css";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
import FirebaseContext from "../Db/firebaseContext";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const SwitchButton = (props) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = async () => {
    setIsToggled(!isToggled);
    if (props.onChange) {
      props.onChange(!isToggled);
    }
    if (isToggled) {
      // Switch to Ethereum
      console.log("Switching to Ethereum");
      window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x1" }], // Ethereum mainnet ID
      });
    } else {
      // Switch to BSC
      console.log("Switching to Binance Smart Chain");
      window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x38", // Binance Smart Chain mainnet ID
            chainName: "Binance Smart Chain",
            nativeCurrency: {
              name: "BNB",
              symbol: "BNB",
              decimals: 18,
            },
            rpcUrls: ["https://bsc-dataseed1.binance.org/"],
            blockExplorerUrls: ["https://bscscan.com/"],
          },
        ],
      }).then(() => {
        // Create a profile on the Firebase Realtime Database with the wallet address as the username
        const walletAddress = window.ethereum.selectedAddress;
        console.log(`Wallet Address: ${walletAddress}`);
        
        if (walletAddress) {
          const profilesRef = ref(database, "CreateCompetitions/" + walletAddress);
          onValue(profilesRef, (snapshot) => {
            if (!snapshot.exists()) {
              set(profilesRef, {
                username: walletAddress,
                createdAt: Date.now(),
                chainName: "Binance Smart Chain",
              });
              console.log(`Profile created for ${walletAddress}`);
            } else {
              console.log(`Profile already exists for ${walletAddress}`);
            }
          });
        } else {
          console.log("Wallet address is null, cannot create user profile");
        }        
      }).catch((error) => {
        console.error(error);
      });
    }
  };
  

  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={handleToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default SwitchButton;

import React, { useState, useEffect, useCallback } from "react";
//import "./NameGiveAway.css";
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import debounce from "lodash/debounce";
import "./NameGiveAway.css";

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: 'AIzaSyDQEmS1YEQokQYkw5qAFuUS1z_hHJ7GSGQ',
    authDomain: 'rufferal-official.firebaseapp.com',
    projectId: 'rufferal-official',
    storageBucket: 'rufferal-official.appspot.com',
    messagingSenderId: '351485421127',
    appId: '1:351485421127:web:3a3b8a6325369f3ccaf362',
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const NameGiveAway = () => {
  const [giveawayName, setGiveAway] = useState("");

  const updateGiveawayName = useCallback(
    debounce((name) => {
      const ethereum = window.ethereum;
      if (!ethereum) {
        console.error("MetaMask not installed");
        return;
      }

      const walletAddress = ethereum.selectedAddress;
      if (!walletAddress) {
        console.error("Wallet address not found");
        return;
      }

      const userRef = ref(database, `CreateCompetitions/${walletAddress}`);
      set(userRef, {
        createdAt: Date.now(),
        username: walletAddress,
        giveawayName: name,
      })
        .then(() => {
          console.log(`Giveaway name saved to database for ${walletAddress}`);
        })
        .catch((error) => {
          console.error(
            `Error saving giveaway name to database for ${walletAddress}:`,
            error
          );
        });
    }, 5000),
    []
  );

  useEffect(() => {
    updateGiveawayName(giveawayName);
  }, [giveawayName, updateGiveawayName]);

  return (
    <div style={{ textAlign: "center" }}>
      <span type="text" className="GiveAwayName">
        <b>Name your Giveaway {" "}</b>
        <span style={{opacity: "0.6",marginLeft:10 }}>
          <i>Can also mean a promotion</i>
        </span>
      </span>
      <div className="GiveAwayInput">
        <textarea
          onChange={(event) => {
            setGiveAway(event.target.value);
          }}
          
        ></textarea>
      </div>
    </div>
  );
};

export default NameGiveAway;

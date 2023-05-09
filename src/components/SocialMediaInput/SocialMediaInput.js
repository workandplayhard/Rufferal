import React, { useState, useEffect, useCallback } from "react";
//import "./SocialMediaInput.css";
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import debounce from "lodash/debounce";

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

const SocialMediaInput = () => {
  const [mediainputSocial, setGiveAway] = useState("");

  const updateMediainputSocial = useCallback(
    debounce((social) => {
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
        usersocial: walletAddress,
        mediainputSocial: social,
      })
        .then(() => {
          console.log(`Mediainput social saved to database for ${walletAddress}`);
        })
        .catch((error) => {
          console.error(
            `Error saving mediainput social to database for ${walletAddress}:`,
            error
          );
        });
    }, 5000),
    []
  );

  useEffect(() => {
    updateMediainputSocial(mediainputSocial);
  }, [mediainputSocial, updateMediainputSocial]);

  return (
    <div style={{ textAlign: "center" }}>
      <span type="text" classSocial="MediaInputSocial">
        <b>Social your Mediainput {" "}</b>
        <span style={{opacity: "0.6",marginLeft:10 }}>
          <i>Can also mean a promotion</i>
        </span>
      </span>
      <div classSocial="GiveAwayInput">
        <textarea
          onChange={(event) => {
            setGiveAway(event.target.value);
          }}
          required
          style={{
            margin: 2,
            marginLeft:180,
            height: "140px",
            width: 500,
            backgroundColor: "white",
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default SocialMediaInput;

import React from "react";
import "./Checkboxes.css";
import { useState, useCallback, useEffect } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";

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

const CheckBoxes = () => {
  const [yesSelected, setYesSelected] = useState(false);
  const [noSelected, setNoSelected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  // Get the wallet address of the current user
  useEffect(() => {
    const getWalletAddress = async () => {
      const ethereum = window.ethereum;
      if (ethereum) {
        const accounts = await ethereum.request({ method: "eth_accounts" });
        if (accounts && accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
      }
    };
    getWalletAddress();
  }, []);

  const handleCheckboxChange = (selectedValue) => {
    setYesSelected(selectedValue);
    setNoSelected(!selectedValue);

    console.log("Checkbox value:", selectedValue);

    // Update the database with the new checkbox value
    const profilesRef = ref(database, `CreateCompetitions/${walletAddress}`);
    set(profilesRef, {
      createdAt: Date.now(),
      username: walletAddress,
      ruffRewardsInterest: selectedValue,
    })
      .then(() => {
        console.log(
          `Checkbox value saved to database for ${walletAddress}:`,
          selectedValue
        );
      })
      .catch((error) => {
        console.error(
          `Error saving checkbox value to database for ${walletAddress}:`,
          error
        );
      });
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%" }}>
        <p style={{ width: "100%",marginLeft:-20 }}>
          {" "}
          <b>Are you interested in RUFF rewards?:(Y/N)</b>
        </p>
      </div>
      <div className="CheckBoxContainerS2" style={{ paddingTop: "20px" }}>
        <label>
          <span style={{ marginRight: "10px",opacity:0.5 }}>Yes</span>
          <input
            type="checkbox"
            className="YesCheckS2"
            checked={yesSelected}
            onChange={() => handleCheckboxChange(true)}
          />
        </label>
        <label style={{ gap: "10px" }}>
          <span style={{ marginRight: "10px",opacity:0.5 }}>No</span>
          <input
            type="checkbox"
            className="NoCheckS2"
            checked={noSelected}
            onChange={() => handleCheckboxChange(false)}
          />
        </label>
      </div>
    </div>
  );
};

export default CheckBoxes;

import React, { useState, useEffect, useCallback } from "react";
import "./EnterUserName.css";
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import debounce from "lodash/debounce";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const EnterPersonalWallet = () => {
  const [username, setUsername] = useState("");

  const updateUsername = useCallback(
    debounce((name) => {
      // Update the database with the new username
      const userRef = ref(database, "CreateCompetitions/CompCreators");
      set(userRef, {
        username: name
      })
        .then(() => {
          console.log("Username saved to database");
        })
        .catch((error) => {
          console.error("Error saving username to database:", error);
        });
    }, 10000),
    []
  );

  useEffect(() => {
    updateUsername(username);
  }, [username, updateUsername]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="checkboxAddressContainer" style={{ width: "100%" }}>
      <span className="CheckBoxTextMain">
        <b>Enter your username: {" "}</b>
        <span style={{ fontSize: "16px", opacity: "0.6" }}>
          <i>(Required)</i>
        </span>
      </span>
      <div
        className="newContractAddressDiv"
        style={{ display: "flex", justifyContent: "left" }}
      >
        <input
          type="text"
          className="newContractAddress"
          required
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
    </div>
  );
};

export default EnterPersonalWallet;

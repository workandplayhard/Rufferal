import React, { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";

function InputComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ width: 400, height: "40px" ,borderRadius:8}}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="eg. 0xled... or destination.eth destination.lons"
      />
      <span
        style={{
          transform: "translateX(-100%)",
          position:'absolute',
          marginLeft:400
        }}
      >
        <IoTrashOutline />
      </span>
    </div>
  );
}

export default InputComponent;

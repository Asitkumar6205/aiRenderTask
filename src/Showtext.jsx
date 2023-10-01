import React, { useState } from "react";
import './App.css';

function Showtext() {
  const [inputValue, setInputValue] = useState("");
  const [displayedValue, setDisplayedValue] = useState("");
  const [flag, setFlag] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter" && inputValue != "") {
      setFlag(true);
      setDisplayedValue("You entered: " + inputValue);
      setInputValue("");
    }
    else{
      setFlag(false)
    }
    console.log(flag)
  };

  return (
    <div>
      <h2>Enter a value:</h2>
      <input
        type="text"
        placeholder="Press Enter"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterPress}
      />
      {flag ? <div className="displayDiv">{displayedValue}</div>  : <></>}
    </div>
  );
}

export default Showtext;

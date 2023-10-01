import React, { useState } from "react";
import Showtext from "./Showtext";
import "./App.css";

const semifinalResults = {
  Uruguay: "Won",
  Netherlands: "Lost",
  Spain: "Won",
  Germany: "Lost",
};

function App() {
  const [quote, setQuote] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [helpVisible, setHelpVisible] = useState(false);

  const getQuoteOfTheDay = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        let randomQuote = Math.floor(Math.random() * data.length);
        setQuote(data[randomQuote].text);
      });
  };

  const handleDropdownChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="App">
      <h1>Quote of the Day</h1>
      <button onClick={getQuoteOfTheDay}>Get Quote</button>
      <p>{quote}</p>

      <div className="fifa">
        <h2>FIFA 2010 Semifinal Results</h2>
        <select onChange={handleDropdownChange} value={selectedCountry}>
          <option value="">Select a Country</option>
          {Object.keys(semifinalResults).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <p>
          {selectedCountry && `Result: ${semifinalResults[selectedCountry]}`}
        </p>
      </div>

      <Showtext></Showtext>

      <div className="help">
        <button
          onMouseEnter={() => setHelpVisible(true)}
          onMouseLeave={() => setHelpVisible(false)}
        >
          ?
        </button>
        {helpVisible && (
          <div className="help-popup">
            <ul>
              <li>Click the button to get a random quote of the day.</li>
              <li>
                Select a country from the dropdown to see its FIFA 2010
                semifinal result.
              </li>
              <li>Enter text and press enter to display it in a box.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

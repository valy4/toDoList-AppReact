import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function addItem() {
    setItems((prevItem) => {
      return [...prevItem, inputText];
    });
    setInputText("");
  }
  return (
    <div className="App">
      <h1 className="title">To do list app</h1>
      <div className="textPlace">

        <input
          type="text"
          style={{ color: "white" }}
          placeholder="Add items"
          value={inputText}
          onChange={handleChange}
        ></input>
        <button onClick={addItem} disabled={!inputText}>Add</button>
        {items.length ?
          <div className="itemsList">
            {items.map((item) => (
              <li>{item}</li>

            ))}
          </div> : null}
      </div>
    </div >
  );
}

export default App;

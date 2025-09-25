import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [chips, setChips] = useState([]);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setChips((prev) => [...prev, input]);
      // console.log("chips list", chips);
      setInput("");
    }
  };
  const handleChipDelete = (idx) => {
    // console.log("delete function called " + idx);
    const updatedChips = [...chips];
    updatedChips.splice(idx, 1);
    // console.log("updated chips list:- ", updatedChips);
    setChips(updatedChips);
    console.log(chips);
  };
  return (
    <div className="App">
      <h1>Chips Input</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => handleInputChange(e)}
        onKeyDown={(e) => handleEnterKey(e)}
      />
      <div className="chip__list">
        {chips &&
          chips.map((chip, idx) => {
            return (
              <div key={idx} className="chip__container">
                <span className="chip__container--title">{chip}</span>
                <button
                  className="chip__container--delete"
                  onClick={() => handleChipDelete(idx)}
                >
                  ❌
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

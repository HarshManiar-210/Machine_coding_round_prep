import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import "./styles.css";

export default function App() {
  const [progress, setProgress] = useState(0);
  const handleProgressChange = (e) => {
    if (!(e.target.value < 0 || e.target.value > 100)) {
      setProgress(e.target.value);
    }
  };
  return (
    <div className="App">
      <h1>Progress bar</h1>
      <input
        type="number"
        onChange={(e) => handleProgressChange(e)}
        min="0"
        max="100"
      />
      <ProgressBar progress={progress} />
    </div>
  );
}

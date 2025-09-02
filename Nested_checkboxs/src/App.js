import "./styles.css";
import jsonData from "../src/utils/data.json";
import { useState } from "react";
import Checkbox from "./components/Checkbox";
export default function App() {
  const [data, setData] = useState(jsonData);
  // console.log(data);
  const [active, setActive] = useState({});
  return (
    <div className="App">
      <h1>
        Nested Checkboxes
        <Checkbox data={data} active={active} setActive={setActive} />
      </h1>
    </div>
  );
}

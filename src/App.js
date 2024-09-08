import { useState } from "react";
import "./App.css";
import ValueDisplay from "./components/valueDisplay";

function App() {
  const [currentValue, setCurrentValue] = useState("");

  const handleChange = (event) => {
    setCurrentValue(event.target.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={currentValue}
        onChange={handleChange}
        placeholder="Введите текст"
      />
      <ValueDisplay value={currentValue} />
    </div>
  );
}
export default App;

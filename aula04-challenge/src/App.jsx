import { useState } from "react";
import "./App.css";
import Currency from "./components/Currency.jsx";
import Value from "./components/Value.jsx";
import Output from "./components/Output.jsx";

function App() {
  const [value, setValue] = useState(0);
  const [from, setFrom] = useState("BRL");
  const [to, setTo] = useState("USD");

  function handleValue(value) {
    setValue(value);
  }

  return (
    <>
      <Value value={value} onValue={handleValue} />
      <Currency from={from} to={to} onFrom={setFrom} onTo={setTo} />
      <Output value={value} from={from} to={to} />
    </>
  );
}

export default App;

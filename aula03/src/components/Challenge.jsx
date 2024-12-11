import { useState } from "react";

const Teste = () => {
  let timeNow = new Date(Date.now());

  const [data, setData] = useState(timeNow);
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function handleStep(interval) {
    setStep((step) => step + interval);
  }
  function handleCount(step) {
    let newDate = new Date(data);
    let day = newDate.getDate();
    newDate.setDate(day + step);

    setData(newDate);
    setCount((count) => count + step);
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={() => handleStep(-1)}>-</button>
        <p>Step:{step}</p>
        <button onClick={() => handleStep(1)}>+</button>
      </div>
      <div style={{ display: "flex" }}>
        <button onClick={() => handleCount(-step)}>-</button>
        <p>Count:{count}</p>
        <button onClick={() => handleCount(step)}>+</button>
      </div>
      <p>
        {count > 0
          ? `${count} days from `
          : count == 0
          ? ""
          : `${count} days ago `}
        today is {data.toDateString()}
      </p>
    </>
  );
};
export default Teste;

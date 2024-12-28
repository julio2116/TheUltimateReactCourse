import { useEffect, useState } from "react";

const Currency = ({ from, to, onFrom, onTo }) => {
  const [currency, setCurrency] = useState("");

  useEffect(function () {
    async function fetchData() {
      const res = await fetch(`https://api.frankfurter.dev/v1/currencies`);
      const data = await res.json();
      setCurrency(data);
    }
    fetchData();
  }, []);

  return (
    <>
      {currency !== "" && (
        <>
          <select value={from} onChange={(e) => onFrom(e.target.value)}>
            {Object.keys(currency).map((cur) => (
              <option value={cur} key={cur}>
                {cur}
              </option>
            ))}
          </select>
          <select value={to} onChange={(e) => onTo(e.target.value)}>
            {Object.keys(currency).map((cur) => (
              <option value={cur} key={cur}>
                {cur}
              </option>
            ))}
          </select>
          {console.log(currency)}
        </>
      )}
    </>
  );
};
export default Currency;

import { useEffect, useState } from "react";

const Output = ({ value, from, to }) => {
  const [rate, setRate] = useState("");
  useEffect(
    function () {
      async function fetchData() {
        if (from === to) return setRate(value);
        const res = await fetch(
          `https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`
        );
        const data = await res.json();
        setRate(Object.values(data.rates) * value);
      }
      fetchData();
    },
    [from, to, value]
  );

  return (
    <>
      {rate !== "" && (
        <>
          <p>{rate.toFixed(2)}</p>
        </>
      )}
    </>
  );
};
export default Output;

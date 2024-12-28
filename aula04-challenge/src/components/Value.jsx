const Value = ({ value, onValue }) => {
  return (
    <>
      <input type="number" value={value} onChange={(e) => onValue(Number(e.target.value))} />
    </>
  );
};
export default Value;

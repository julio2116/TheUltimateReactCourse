import { useReducer } from "react";
import "./App.css";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "disabled":
      return { ...state, disabled: !state.disabled };

    default:
      throw new Error("Action Unknown");
  }
}

function App() {
  const [{ disabled }, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1 className="header">useReducer Bank Account</h1>
      <span className="information">
        <span>Balance: X</span>
        <span>Loan: X</span>
      </span>
      <div className="buttons">
      <button
          className="button"
          disabled={!disabled}
          onClick={() => dispatch({ type: "disabled" })}
        >
          Open account
        </button>
        <button
          className="button"
          disabled={disabled}
          onClick={() => dispatch({ type: "disabled" })}
        >
          Deposit
        </button>
        <button
          className="button"
          disabled={disabled}
          onClick={() => dispatch({ type: "disabled" })}
        >
          Withdraw
        </button>
        <button
          className="button"
          disabled={disabled}
          onClick={() => dispatch({ type: "disabled" })}
        >
          Request a loan of 5000
        </button>
        <button
          className="button"
          disabled={disabled}
          onClick={() => dispatch({ type: "disabled" })}
        >
          Pay loan
        </button>
        <button
          className="button"
          disabled={disabled}
          onClick={() => dispatch({ type: "disabled" })}
        >
          Close account
        </button>
      </div>
    </>
  );
}
export default App;

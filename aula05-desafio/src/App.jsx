import { useReducer } from "react";
import "./App.css";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  loanActive: false
};
function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return { ...state, isActive: true, balance: 500 };
    case "deposit":
      return { ...state, balance: state.balance + Number(action.payload) };
    case "withdraw":
      return { ...state, balance: state.balance - Number(action.payload) };
    case "requestLoan":
      return { ...state, loan: 5000, balance: state.loanActive ? state.balance : state.balance + 5000, loanActive: true };
    case "payLoan":
      return { ...state, balance: state.loanActive ? state.balance - 5000 : state.balance, loanActive: false, loan: 0 };
    case "closeAccount":
      return { ...state, isActive: state.balance === 0 && state.loan === 0 ? false : state.isActive };
    default:
      throw new Error("Action Unknown");
  }
}

function App() {
  const [{ isActive, balance, loan }, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1 className="header">useReducer Bank Account</h1>
      <span className="information">
        <span>Balance: {balance}</span>
        <span>Loan: {loan}</span>
      </span>
      <div className="buttons">
        <button
          className="button"
          disabled={isActive}
          onClick={() => dispatch({ type: "openAccount" })}
        >
          Open account
        </button>
        <button
          className="button"
          disabled={!isActive}
          onClick={() => dispatch({ type: "deposit", payload: 150 })}
        >
          Deposit 150
        </button>
        <button
          className="button"
          disabled={!isActive}
          onClick={() => dispatch({ type: "withdraw", payload: 50 })}
        >
          Withdraw 50
        </button>
        <button
          className="button"
          disabled={!isActive}
          onClick={() => dispatch({ type: "requestLoan" })}
        >
          Request a loan of 5000
        </button>
        <button
          className="button"
          disabled={!isActive}
          onClick={() => dispatch({ type: "payLoan" })}
        >
          Pay loan
        </button>
        <button
          className="button"
          disabled={!isActive}
          onClick={() => dispatch({ type: "closeAccount" })}
        >
          Close account
        </button>
      </div>
    </>
  );
}
export default App;

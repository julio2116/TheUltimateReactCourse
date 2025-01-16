import { createContext, useContext, useReducer } from "react";

const searchContext = createContext();

const initialValue = {
  searchResult: [],
};

function reduce(state, action) {
  switch (action.type) {
    case "search":
      return {
        ...state,
        searchResult: action.payload,
      };
    default:
      throw new Error("Uknown action");
  }
}

function SearchProvider({ children }) {
  const [{ searchResult }, dispatch] = useReducer(reduce, initialValue);

  return (
    <>
      <searchContext.Provider
        value={{
          searchResult,
          dispatch,
        }}
      >
        {children}
      </searchContext.Provider>
    </>
  );
}
function useSearch() {
  const context = useContext(searchContext);
  return context;
}
export { SearchProvider, useSearch };

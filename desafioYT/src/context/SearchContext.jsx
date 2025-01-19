import { createContext, useContext, useReducer } from "react";

const searchContext = createContext();

const initialValue = {
  searchResult: [],
  videoId: '',
  clickVideo: false,
};

function reduce(state, action) {
  switch (action.type) {
    case "search":
      return {
        ...state,
        searchResult: action.payload,
      };
    case 'click':
      return {
        ...state,
        videoId: action.payload,
        clickVideo: true,
      }
    default:
      throw new Error("Uknown action");
  }
}

function SearchProvider({ children }) {
  const [{ searchResult, videoId, clickVideo }, dispatch] = useReducer(reduce, initialValue);

  return (
    <>
      <searchContext.Provider
        value={{
          searchResult,
          videoId,
          clickVideo,
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

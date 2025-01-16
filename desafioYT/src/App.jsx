import "./App.css";
import MainBody from "./components/MainBody";
import Header from "./components/Header";
import HomePage from "./HomePage";
import { SearchProvider } from "./context/SearchContext";

const App = () => {
  return (
    <>
      <SearchProvider>
        <HomePage>
          <Header />
          <MainBody />
        </HomePage>
      </SearchProvider>
    </>
  );
};

export default App;

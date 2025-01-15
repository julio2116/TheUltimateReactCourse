import "./App.css";
import MainBody from "./components/MainBody";
import Header from "./components/Header";
import HomePage from "./HomePage";

const App = () => {
  return (
    <>
      <HomePage>
        <Header />
        <MainBody />
      </HomePage>
    </>
  );
};

export default App;

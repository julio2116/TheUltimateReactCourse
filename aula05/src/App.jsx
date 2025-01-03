import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Loader from "./components/Loader.jsx";
import Error from "./components/Error.jsx";
import StartScreen from "./components/StartScreen.jsx";
import Question from "./components/Question.jsx";
import NextButton from "./components/NextButton.jsx";
import Progress from "./components/Progress.jsx";
import FinishScreen from "./components/FinishScreen.jsx";
import Footer from "./components/Footer.jsx";
import Timer from "./components/Timer.jsx";

const SECS_PER_QUESTION =  30;

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: SECS_PER_QUESTION,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active", secondsRemaining: state.questions.length * SECS_PER_QUESTION };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return { ...state, status: "active", index: 0, answer: null, points: 0 };
    case "tick":
      return { ...state, secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? 'finished' : state.status
       };
    default:
      throw new Error("Action Unknown");
  }
}

function App() {
  const [{ questions, status, index, answer, points, highscore, secondsRemaining }, dispatch] =
    useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(function () {
    async function dataFetch() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch {
        dispatch({ type: "dataFailed" });
      }
    }
    dataFetch();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "Error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              answer={answer}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;

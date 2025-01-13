import { createContext, useContext, useReducer } from "react";

const QuestionsContext = createContext();

function QuestionsProvider({ children }) {
    const SECS_PER_QUESTION = 30;

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
                return {
                    ...state, secondsRemaining: state.secondsRemaining - 1,
                    status: state.secondsRemaining === 0 ? 'finished' : state.status
                };
            default:
                throw new Error("Action Unknown");
        }
    }
    const [{ questions, status, index, answer, points, highscore, secondsRemaining }, dispatch] =
        useReducer(reducer, initialState);
    const numQuestions = questions.length;
    const maxPossiblePoints = questions.reduce(
        (prev, cur) => prev + cur.points,
        0
    );
    return (
        <>
            <QuestionsContext.Provider value={{
                questions,
                status,
                index,
                answer,
                points,
                highscore,
                secondsRemaining,
                numQuestions,
                maxPossiblePoints,
                dispatch
            }}>
                {children}
            </QuestionsContext.Provider>
        </>
    )
}
function useQuestions(){
    const context = useContext(QuestionsContext);
    return context;
}
export {useQuestions, QuestionsProvider}
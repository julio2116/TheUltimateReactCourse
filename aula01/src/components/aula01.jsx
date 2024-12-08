import { useEffect } from "react";
import { useState } from "react";
import Message from './Message.jsx'

const aula01 = () => {
    const [advice, setAdvice] = useState("");
    const [count, setCount] = useState(0)

    async function getAdvice(){
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json()
        setAdvice(data.slip.advice);
        setCount(c=>c+1);
    }
    useEffect(()=>{
        getAdvice();
    },[])
    return(
        <>
            <h1>{advice}</h1>
            <button onClick={getAdvice}>Get Advice</button>
            <Message count={count}/>
        </>
    )
}
export default aula01
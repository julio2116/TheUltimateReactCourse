import './App.css'
import Cep from './components/Cep.jsx'
import Address from './components/Address.jsx'
import { useState } from "react"

function App() {

  const [cep, setCep] = useState('');
  function handleCep(e){
      let cep = e.target.value;
      setCep(cep);
  }

  return (
    <>
      <Cep cep={cep} onHandleCep={handleCep}/>
      <Address cep={cep}/>
    </>
  )
}

export default App

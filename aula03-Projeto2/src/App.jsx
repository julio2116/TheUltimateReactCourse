import "./App.css";
import Logo from "./components/Logo.jsx";
import Form from "./components/Form.jsx";
import PackingList from "./components/PackingList.jsx";
import Stats from "./components/Stats.jsx";
import {useState} from 'react'

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item){
    setItems((items)=>[...items, item]);
    console.log(items)
  }
  function handleDeleteItem(id){
    setItems((items)=>items.filter((item)=>item.id !== id))
  }
  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem}/>
      <Stats />
    </>
  );
}

export default App;

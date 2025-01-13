import { useEffect, useState } from 'react';
import './App.css'

const key = 'AIzaSyCB0gEZJ25Whe87CQvgsKGlMT6_pS8Wpdo';
function App() {
  const [data, setData] = useState();

  async function fetchData(termo) {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&q=${termo}&type=video`);
    const data = await res.json();
    setData(data);
  }
  function handleSearch(e){
    e.preventDefault()
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    fetchData(data.video);
  }

  return (
    <>
      <form onSubmit={(e) => { handleSearch(e) }}>
        <label htmlFor="video">Digite o nome de um video</label>
        <input type="text" name='video' />
        <button>Buscar</button>
      </form>
      {data?.items &&
      data.items.map(item=>(
        <img src={item.snippet.thumbnails.high.url}/>
      ))}
    </>
  )
}

export default App

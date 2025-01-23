import { useEffect, useState } from "react";
import { useSearch } from "../context/SearchContext";
import styles from "./SearchBox.module.css";
import { useNavigate } from "react-router";

const SearchBox = () => {
  const navigate = useNavigate();
  const { dispatch, videoInfo, searchResult } = useSearch();
  const [ listIds, setListIds ] = useState('');
  const key = "AIzaSyCB0gEZJ25Whe87CQvgsKGlMT6_pS8Wpdo";

  function fetchSearch(term) {
    async function fetchSearchResult(term) {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&q=${term}&maxResults=50`
      );
      const data = await res.json();
      const result = data.items.map(item => (item.id.videoId)).join();
      setListIds(result);
      dispatch({ type: "search", payload: data });
    }
    fetchSearchResult(term);
  }
  useEffect(function fetchteste() {
    async function fetchVideo() {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${listIds}&key=${key}`
      );
      const data = await res.json();
      dispatch({ type: "videoInfo", payload: data });
    }
    fetchVideo();
  }, [listIds, dispatch])

  function handleSearch(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    fetchSearch(data.value);
    navigate('/search')
  }
  return (
    <div className={styles.searchbox}>
      <form onSubmit={(e) => handleSearch(e)} className={styles.textsearchbox}>
        <div className={styles.inputbox}>
          <input
            name='value'
            className={styles.search}
            placeholder="Pesquisar"
            type="text"
          />
          <div className={styles.img}>
            <img src="./src/assets/kb.svg" alt="" />
          </div>
        </div>
        <button className={styles.lupa}>
          <img src="./src/assets/lupa.svg" alt="" />
        </button>
      </form>
      <span className={styles.microphone}>
        <img src="./src/assets/microphone.svg" alt="" />
      </span>
    </div>
  );
};
export default SearchBox;

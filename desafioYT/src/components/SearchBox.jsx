import { useSearch } from "../context/SearchContext";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const { dispatch } = useSearch();
  const key = "AIzaSyCB0gEZJ25Whe87CQvgsKGlMT6_pS8Wpdo";

  function fetchSearch(term) {
    async function fetchData(term) {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&q=${term}&type=video`
      );
      const data = await res.json();
      dispatch({ type: "search", payload: data });
    }
    fetchData(term);
}

function handleSearch(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    fetchSearch(data.value);
  }
  return (
    <div className={styles.searchbox}>
      <form onSubmit={(e)=>handleSearch(e)} className={styles.textsearchbox}>
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

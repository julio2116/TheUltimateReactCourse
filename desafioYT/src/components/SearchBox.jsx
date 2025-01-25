import styles from "./SearchBox.module.css";
import { useNavigate } from "react-router";

const SearchBox = () => {
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    const form = new FormData(e.target);
    if(e.target[0].value === '') return
    const data = Object.fromEntries(form);
    navigate(`/search?search=${data.value}`)
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

import styles from './SearchBox.module.css'
const SearchBox = () => {
    return (
        <div className={styles.searchbox}>
            <div className={styles.textsearchbox}>
                <div className={styles.inputbox}>
                    <input className={styles.search} placeholder="Pesquisar" type="text" />
                    <div className={styles.img}><img src="./src/assets/kb.svg" alt="" /></div>
                </div>
                <div className={styles.lupa}>
                    <img src="./src/assets/lupa.svg" alt="" />
                </div>
            </div>
            <span className={styles.microphone}>
                <img src="./src/assets/microphone.svg" alt="" />
            </span>
        </div>
    )
}
export default SearchBox
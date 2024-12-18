import styles from '../components/Header.module.css'

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <h1>To Do list</h1>
                <form action="">
                <input type="text" />
                <button>Add</button>
                </form>
            </div>
        </>
    )
}
export default Header
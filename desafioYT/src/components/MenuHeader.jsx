import styles from './MenuHeader.module.css'

const MenuHeader = () => {
    return (
        <>
            <div className={styles.imgs}>
                <div className={styles.menu}><img src="src/assets/menu.svg" alt="" /></div>
                <img className={styles.logo} src="src/assets/YTLogo.svg" alt="" />
                <span>BR</span>
            </div>
        </>
    )
}
export default MenuHeader
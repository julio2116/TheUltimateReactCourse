import styles from './MainBody.module.css'
import SideContent from './SideContent'
import SideMenu from './SideMenu'
const Body = () => {
    return(
        <main className={styles.body}>
            <SideMenu />
            <SideContent />
        </main>
    )
}
export default Body
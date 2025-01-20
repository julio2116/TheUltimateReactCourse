import { Link } from 'react-router'
import { useSearch } from '../context/SearchContext'
import styles from './MenuHeader.module.css'

const MenuHeader = () => {
    const {search} = useSearch()
    return (
        <>
            <div className={styles.imgs}>
                <div className={styles.menu}><img src="src/assets/menu.svg" alt="" /></div>
                <Link to='/'><img className={styles.logo} src="src/assets/YTLogo.svg" alt="" /></Link>
                <span>BR</span>
            </div>
        </>
    )
}
export default MenuHeader
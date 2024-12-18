import styles from '../components/Item.module.css'

const Item = ({children}) => {
    return(
        <>
            <li className={styles.item}>
                <input type="checkbox" />
                <span>{children}</span>
                <span>✏️</span>
                <span>🗑️</span>
            </li>
        </>
    )
}

export default Item
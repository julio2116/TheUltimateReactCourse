import styles from '../components/List.module.css'
import Item from './Item.jsx'
import Header from './Header.jsx'

const List = () => {
    return (
        <>
            <div className={styles.toDo}>
                <Header />
                <ul className={styles.list}>
                    <Item />
                    <Item>Outro exemplo</Item>
                    <Item>Este é um exemplo</Item>
                    <Item>Este é outro exemplo aaaaaaaaa</Item>
                </ul>
            </div>
        </>
    )
}

export default List
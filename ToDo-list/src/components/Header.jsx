import styles from '../components/Header.module.css'

const Header = ({onSetItem, onSetPriority, item, priority, onNewItem}) => {

    function handleNewItem(e){
        e.preventDefault();
        const id = crypto.randomUUID();
        if(!item) return

        const newItem = {item, priority, id}
        onNewItem(newItem);
        onSetItem('');
        onSetPriority('blue');
    }

    return (
        <>
            <div className={styles.header}>
                <h1>To Do list</h1>
                <form action="" onSubmit={handleNewItem}>
                <input type="text" value={item} onChange={onSetItem}/>
                <select name="" id="" value={priority} onChange={onSetPriority}>
                    <option value="blue">1</option>
                    <option value="green">2</option>
                    <option value="red">3</option>
                </select>
                <button>Add</button>
                </form>
            </div>
        </>
    )
}
export default Header
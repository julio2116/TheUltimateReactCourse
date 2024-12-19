import { useState } from 'react'
import styles from '../components/List.module.css'
import Item from './Item.jsx'
import Header from './Header.jsx'

const List = () => {

    const [item, setItem] = useState('');
    const [priority, setPriority] = useState('blue');
    const [allTasks, setAllTasks] = useState([]);

    function handleSetItem(e){
        if(e?.target?.value) return setItem(e.target.value);
        return setItem(e)
    }
    function handleSetPriority(e){
        if(e?.target?.value) return setPriority(e.target.value);
        return setPriority(e);
    }
    function NewItem(item){
        setAllTasks([...allTasks , item]);
    }
    function deleteItem(id){
        setAllTasks(allTasks.filter(task=>task.id === id ? false : true))
    }
    function updateItem(id, alter){
        console.log(alter)
        setAllTasks(allTasks.map(task=>task.id === id ? {...task, item:alter} : task))
    }

    return (
        <>
            <div className={styles.toDo}>
                <Header onSetItem={handleSetItem} onSetPriority={handleSetPriority} onNewItem={NewItem}
                item={item} priority={priority}/>
                <ul className={styles.list}>
                    {allTasks.map(task=>(
                        <Item task={task} onDeleteItem={deleteItem} onUpdateItem={updateItem} key={task.id}/>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default List
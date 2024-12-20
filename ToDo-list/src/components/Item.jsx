import { useState } from 'react'
import styles from '../components/Item.module.css'

const Item = ({ task, onDeleteItem, onUpdateItem }) => {
    const [checked, setChecked] = useState(false);
    const [edite, setEdite] = useState(false);
    const [editeTask, setEditeTask] = useState(task.item)
    
    function handleEdite(){
        setEdite(edite => !edite);
        if(!editeTask) return setEditeTask(task.item);
        if(edite === true) onUpdateItem(task.id, editeTask);
    }

    return (
        <>
            <li className={styles.item}>
                <input id='checkbox' type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)} />
                {edite === false ?
                    <span style={{ textDecoration: checked ? 'line-through' : '', color: task.priority }}>{task.item}</span>
                    : <input style={{width: '100px'}} value={editeTask} onChange={(e) => setEditeTask(e.target.value)} />
                }
                <span className={styles.button} onClick={handleEdite}>{edite === false ? '✏️' : '🗃️'}</span>
                <span className={styles.button} onClick={() => onDeleteItem(task.id)}>🗑️</span>
            </li>
        </>
    )
}

export default Item
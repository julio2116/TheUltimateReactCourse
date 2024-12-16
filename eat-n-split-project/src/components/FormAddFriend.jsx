import { useState } from 'react'
import Button from './Button.jsx'
const FormAddFriend = ({onClick}) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('https://i.pravatar.cc/48');

    function handleSubmit(e){
        const id = crypto.randomUUID()
        e.preventDefault();
        if(!name || !image) return
        const newFriend = {
            id, name, image: `${image}?=${id}`, balance:0
        }
        onClick(newFriend)

        setName('')
        setImage('https://i.pravatar.cc/48')
    }

    return(
        <>
            <form className='form-add-friend' action="" onSubmit={handleSubmit}>
                <label htmlFor="">👯‍♂️ Friend Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <label htmlFor="">🏞️ image url</label>
                <input type="text" value={image} onchange={(e)=>setImage(e.target.value)}/>
                <Button>Add</Button>
            </form>
        </>
    )
}
export default FormAddFriend
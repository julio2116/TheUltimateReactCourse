import { useState } from "react"
import Button from './Button.jsx'

const FormSplitBill = ({ friend, onSplitBill }) => {
    const [bill, setBill] = useState('');
    const [paidByUser, setPaidByUser] = useState('');
    const [whoIsPaying, setWhoIsPaying] = useState('user');

    const paidByFriend = bill ? bill - paidByUser : '';

    function handleSubmit(e){
        e.preventDefault();
        if(!bill || !paidByUser) return
        onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser)
    }

    return (
        <>
            <form action="" className='form-split-bill' onSubmit={handleSubmit}>
                <h2>Split a bill with {friend.name}</h2>
                <label htmlFor="">💰 Bill value</label>
                <input type="text" value={bill} onChange={e => setBill(Number(e.target.value))} />
                <label htmlFor="">🧍‍♂️ Your expense</label>
                <input type="text" value={paidByUser} onChange={e => setPaidByUser(
                    Number(e.target.value) > bill ? paidByUser : Number(e.target.value))} />
                <label htmlFor="">🧍 {friend.name}'s expense</label>
                <input type="text" value={paidByFriend} disabled />
                <label htmlFor="">🤑 Who's paying the bill?</label>
                <select name="" id="" value={whoIsPaying} onChange={e => setWhoIsPaying(e.target.value)}>
                    <option value="user">You</option>
                    <option value="friend">{friend.name}</option>
                </select>
                <Button>Split Bill</Button>
            </form>
        </>
    )
}
export default FormSplitBill
const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

import './App.css'
import FriendsList from './components/FriendsList.jsx'
import FormAddFriend from './components/FormAddFriend.jsx'
import Button from './components/Button.jsx'
import FormSplitBill from './components/FormSplitBill.jsx'
import { useState } from 'react'

function App() {
    const [showAddfriend, setShowAddFriend] = useState(false);
    const [friends, setFriends] = useState(initialFriends)

    function handleShowAddFriend(){
        setShowAddFriend(show=>!show)
    }
    function handleFriends(friend){
        setFriends(friends=>[...friends, friend]);
        setShowAddFriend(false);
    }

    return (
        <>
            <div style={{display:'flex', gap:'20px'}}>
                <div className='sidebar'>
                    <FriendsList friends={friends}/>
                    {showAddfriend &&
                    (<FormAddFriend onClick={handleFriends}/>)}
                    <Button onClick={handleShowAddFriend}>{showAddfriend ? 'Close' : 'Add friend'}</Button>
                </div>
                <FormSplitBill />
            </div>
        </>
    )
}

export default App

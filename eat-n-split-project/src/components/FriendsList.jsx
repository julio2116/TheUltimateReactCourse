import Friend from './Friend.jsx'

const FriendsList = ({friends}) => {

    return (
        <>
            <ul>
                {friends.map(friend=>
                    <Friend friend={friend} key={friend.id}/>
                )}
            </ul>
        </>
    )
}
export default FriendsList
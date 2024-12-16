import Button from './Button.jsx'
const Friend = ({friend}) => {
    return(
        <>
            <li>
                <img src={friend.image} alt={friend.name} />
                <div>
                <h3>{friend.name}</h3>
                <div className={friend.balance > 0 ? `green` : friend.balance < 0 ? `red` : ''}>
                {friend.balance > 0 ? `${friend.name} owes you $${friend.balance}`
                : friend.balance < 0 ? `You owe ${friend.name} $${friend.balance}`
                : `You and ${friend.name} are even`}
                </div>
                </div>
                <Button className="button">Select</Button>
            </li>
        </>
    )
}
export default Friend
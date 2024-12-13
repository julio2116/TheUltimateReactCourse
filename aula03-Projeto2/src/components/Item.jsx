import { useState } from "react";

const Item = ({ item, onDeleteItem }) => {
  const [packed, setPacked] = useState(item.packed);

  return (
    <>
      <li>
        <input type="checkbox" value={item.packed} onChange={()=>setPacked(!packed)}/>
        <span style={packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        {console.log(item.id)}
        <button onClick={()=>onDeleteItem(item.id)}>❌</button>
      </li>
    </>
  );
};
export default Item;

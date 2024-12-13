const Item = ({ item, onDeleteItem }) => {
  return (
    <>
      <li>
        <input type="checkbox" />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        {console.log(item.id)}
        <button onClick={()=>onDeleteItem(item.id)}>❌</button>
      </li>
    </>
  );
};
export default Item;

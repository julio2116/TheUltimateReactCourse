import Item from "./Item.jsx";

const PackingList = ({items, onDeleteItem}) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return <Item item={item} key={item.id} onDeleteItem={onDeleteItem}/>;
        })}
      </ul>
    </div>
  );
};
export default PackingList;

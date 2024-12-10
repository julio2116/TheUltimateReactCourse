const Pizza = ({ pizzaObj }) => {
  return (
    <>
      <li className={`pizza${pizzaObj.soldOut ? " sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
          <h2>{pizzaObj.name}</h2>
          <p>{pizzaObj.ingredients}</p>
          <span>{pizzaObj.soldOut ? "sold out" : pizzaObj.price}</span>
        </div>
      </li>
    </>
  );
};
export default Pizza;

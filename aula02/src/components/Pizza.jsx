const Pizza = ({ pizzaObj }) => {
  return (
    <>
      <div className="pizza">
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
          <h2>{pizzaObj.name}</h2>
          <p>{pizzaObj.ingredients}</p>
          <span>{pizzaObj.price}</span>
        </div>
      </div>
    </>
  );
};
export default Pizza;

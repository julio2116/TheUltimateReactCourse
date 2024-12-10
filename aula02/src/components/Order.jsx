const Order = ({ closeHour }) => {
  return (
    <div className="order">
      <p>We're open untill {closeHour}:00! Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
};
export default Order;

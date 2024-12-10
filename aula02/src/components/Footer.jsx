const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <>
      <footer className="footer">
        {isOpen && (
          <>
            <p>
              We're open untill {closeHour}:00! Come visit us or order online
            </p>
            <button className="btn">Order</button>
          </>
        )}
      </footer>
    </>
  );
};
export default Footer;

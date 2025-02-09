import styles from "./Submenu.module.css";
import { Link } from "react-router";

const Submenu = ({ items }) => {
  return (
    <>
      {items[0].header && <h3 className={styles.title}>{items[0].header}</h3>}
      <ul className={styles.lista}>
        {items.map(
          (item, index) =>
            item.icon && (
              <li className={styles.item} key={index}>
                <Link to={item.link}>
                  <img src={item.icon} alt="" />
                  <p>{item.title}</p>
                </Link>
              </li>
            )
        )}
      </ul>
    </>
  );
};
export default Submenu;

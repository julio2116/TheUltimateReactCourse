import styles from './Submenu.module.css'

const Submenu = ({items}) => {
  return (
    <>
      <ul className={styles.lista}>
        {items.map((item) => (
          <>
            <li className={styles.item}>
              <img src={item.icon} alt="" />
              <p>{item.title}</p>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};
export default Submenu;

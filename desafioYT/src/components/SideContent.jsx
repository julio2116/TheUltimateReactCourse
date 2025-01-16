import styles from "./SideContent.module.css";

import { useSearch } from "../context/SearchContext";

const SideContent = () => {
  const { searchResult } = useSearch();

  return (
    <>
    <ul className={styles.lista}>
      {searchResult?.items?.map((item) => (
        <li key={item.id.videoId}>
          <div>
            <img src={item.snippet.thumbnails.high.url} alt="" />
          </div>
        </li>
      ))}
    </ul>
    </>
  );
};
export default SideContent;

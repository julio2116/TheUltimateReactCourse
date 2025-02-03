import styles from "./SideContent.module.css";
import { useSearchResult } from "../hooks/UseSearchResult";
import SearchResultVideo from './SearchResultVideo'

const SideContent = () => {
  const result = useSearchResult()
  console.log(result);

  return (
    <>
      <div className={styles.boxListVideos}>
        <ul className={styles.list}>
          {result.map((item) => (
            item?.kind === 'video'
            ?
            <SearchResultVideo item={item}/>
            :
            item.kind === 'channel'
            ?
            <SearchResultChannel item={item}/>
            :
            ''
          ))}
        </ul>
      </div>
    </>
  );
};
export default SideContent;

import { useSearch } from "../context/SearchContext";
import styles from "./MainBody.module.css";
import SideContent from "./SideContent";
import SideMenu from "./SideMenu";
import VideoPlayer from "./VideoPlayer";
const Body = () => {
  const { clickVideo } = useSearch();
  return (
    <main className={styles.body}>
      {clickVideo ? (
        <VideoPlayer />
      ) : (
        <>
          <SideMenu />
          <SideContent />
        </>
      )}
    </main>
  );
};
export default Body;

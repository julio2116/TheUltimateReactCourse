import styles from "./SideContent.module.css";
import { useSearch } from "../context/SearchContext";
import { useNavigate } from "react-router";

const SideContent = () => {
  const { searchResult, dispatch } = useSearch();
  const navigate = useNavigate();

  function handleVideoSelected(videoId){
    dispatch({type: 'click', payload: videoId});
    navigate(`/video?id=${videoId}`);
  }

  return (
    <>
      <ul className={styles.lista}>
        {searchResult?.items?.map((item) => (
          <li key={item.id.videoId} className={styles.video}>
            <div>
              <img src={item.snippet.thumbnails.high.url} alt="" onClick={()=>handleVideoSelected(item.id.videoId)} />
            </div>
            <span className={styles.videoInfo}>
              <h2>{item.snippet.title}</h2>
            </span>
          </li>
        ))}
      </ul>
      {console.log(searchResult)}
    </>
  );
};
export default SideContent;

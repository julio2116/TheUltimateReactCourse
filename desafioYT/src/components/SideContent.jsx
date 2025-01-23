import styles from "./SideContent.module.css";
import { useSearch } from "../context/SearchContext";
import { useNavigate } from "react-router";

const SideContent = () => {
  const { searchResult, videoInfo, dispatch } = useSearch();
  const navigate = useNavigate();

  function handleVideoSelected(videoId){
    dispatch({type: 'click', payload: videoId});
    navigate(`/video?id=${videoId}`);
  }
  return (
    <>
    <div className={styles.teste}>
      <ul className={styles.lista}>
        {searchResult?.items?.map((item, index) => (
          <li key={item.id.videoId} className={styles.video}>
            <div>
              <img src={item.snippet.thumbnails.high.url} alt="" onClick={()=>handleVideoSelected(item.id.videoId)} />
            </div>
            <span className={styles.videoInfo}>
              <h4 onClick={()=>handleVideoSelected(item.id.videoId)}>{item.snippet.title}</h4>
              <p>{videoInfo?.items[index]?.statistics?.viewCount}</p>
            </span>
          </li>
        ))}
      </ul>
      </div>
      {console.log(searchResult)}
    </>
  );
};
export default SideContent;

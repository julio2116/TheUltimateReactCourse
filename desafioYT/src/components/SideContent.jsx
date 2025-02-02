import styles from "./SideContent.module.css";
import { useNavigate } from "react-router";
import { useSearchResult } from "../hooks/UseSearchResult";
import { handlePublishedTime, newContent } from "../ultils/publishedTime";
import { formatViwes } from "../ultils/FormatNumbers";
import { useCallback } from "react";

const SideContent = () => {
  const navigate = useNavigate();
  const result = useSearchResult()
  
  console.log(result);

  function handleVideoSelected(videoId) {
    navigate(`/watch?v=${videoId}`);
  }

  return (
    <>
      <div className={styles.boxListVideos}>
        <ul className={styles.list}>
          {result.map((item) => (
            <li key={item.videoId} className={styles.video}>
              <div
                className={styles.thumb}
                onClick={() => handleVideoSelected(item.videoId)}
              >
                <img src={item.thumb} alt="" />
                {item.kind === "video" ? (
                  <span className={styles.duration}>{item.duration}</span>
                ) : (
                  ""
                )}
              </div>
              <div className={styles.videoInfo}>
                <h4 onClick={() => handleVideoSelected(item.videoId)}>
                  {item.titleVideo}
                </h4>
                <div>
                  <span>{item.views ? formatViwes(item.views) : ""} viwes</span>
                  <span className={styles.publishedTime}>
                    {handlePublishedTime(item.published)}
                  </span>
                </div>
                <div className={styles.channel}>
                  <img className={styles.icon} src={item.icon} alt="" />
                  <span>{item.channelTitle}</span>
                </div>
                <span className={styles.content}>
                  {item.description}
                  {
                    <div>
                      {newContent(item.published) ? (
                        <span className={styles.newVideo}>New</span>
                      ) : item.definition === "hd" ? (
                        <span className={styles.hd}>HD</span>
                      ) : (
                        ""
                      )}
                    </div>
                  }
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default SideContent;

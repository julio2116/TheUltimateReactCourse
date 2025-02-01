import styles from "./SideContent.module.css";
import { useNavigate } from "react-router";
import { useSearchResult } from "../hooks/UseSearchResult";
import { handlePublishedTime, newContent } from "../ultils/publishedTime";
import { formatViwes } from "../ultils/FormatNumbers";

const SideContent = () => {
  const navigate = useNavigate();
  const result = useSearchResult();

  function handleVideoSelected(videoId) {
    navigate(`/watch?v=${videoId}`);
  }

  return (
    <>
      <div className={styles.teste}>
        <ul className={styles.lista}>
          {result.map((item) => (
            <li key={item.videoId} className={styles.video}>
              <div>
                <img
                  src={item.thumb}
                  alt=""
                  onClick={() => handleVideoSelected(item.videoId)}
                />
              </div>
              <span className={styles.videoInfo}>
                <h4 onClick={() => handleVideoSelected(item.videoId)}>
                  {item.titleVideo}
                </h4>
                <span>{item.views ? formatViwes(item.views) : ""} viwes</span>
                <span className={styles.publishedTime}>
                  {handlePublishedTime(item.published)}
                </span>
                <span style={{ display: "block" }}>
                  <img
                    src={item.icon}
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                    }}
                    alt=""
                  />
                  <span>{item.channelTitle}</span>
                </span>
                <span>{item.description}</span>
                {newContent(item.published) ? <span>new</span> : ""}
                {item.definition === "hd" ? <span>HD</span> : ""}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default SideContent;

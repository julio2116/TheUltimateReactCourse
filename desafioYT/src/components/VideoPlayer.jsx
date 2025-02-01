import styles from "./VideoPlayer.module.css";
import { useSearchParams } from "react-router";
import ReactPlayer from "react-player";
import { useState } from "react";

const VideoPlayer = ({ children }) => {
  const [id] = useSearchParams();
  const [played, setPlayed] = useState();
  const videoId = id.get("v");
  const video = `https://www.youtube.com/watch?v=${videoId}`;
  const width = "51%";
  const height = "75%";

  return (
    <>
      <div
        className={styles.videoBox}
        style={{ marginTop: "80px", borderRadius: "15px" }}
      >
        <ReactPlayer
          url={video}
          playing={true}
          width={width}
          height={height}
          controls={true}
          onProgress={(progress) => {
            setPlayed(progress.playedSeconds);
          }}
        />
        {children}
      </div>
    </>
  );
};
export default VideoPlayer;

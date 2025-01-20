import styles from './VideoPlayer.module.css'
import { useSearchParams } from "react-router";

const VideoPlayer = ({ children }) => {
  const [id] = useSearchParams();
  const videoId = id.get('id');
  const video = `//www.youtube.com/embed/${videoId}`

  return (
    <>
      <div className={styles.videoBox}>
        <iframe
          width="960"
          height="540"
          src={video}
          frameBorder={0}
          allow={'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'}
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen={true}
          style={{ marginTop: '80px', borderRadius: '15px' }}
        ></iframe>
        {children}
      </div>
    </>
  );
};
export default VideoPlayer;

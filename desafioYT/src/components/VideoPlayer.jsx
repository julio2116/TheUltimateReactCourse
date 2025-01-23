import styles from './VideoPlayer.module.css'
import { useSearchParams } from "react-router";
import ReactPlayer from 'react-player'

const VideoPlayer = ({ children }) => {
  const [id] = useSearchParams();
  const videoId = id.get('id');
  const video = `//www.youtube.com/embed/${videoId}`
  const width = '56%';
  const height = '75%';

  return (
    <>
      <div className={styles.videoBox} style={{ marginTop: '80px', borderRadius: '15px' }}>
        <ReactPlayer url={video} playing={true} width={width} height={height} controls={true} stopOnUnmount={false}/>
        {children}
      </div>
    </>
  );
};
export default VideoPlayer;

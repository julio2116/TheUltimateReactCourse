import RecomendedVideosList from "../components/RecomendedVideosList"
import VideoPlayer from "../components/VideoPlayer"

const VideoPage = () => {
    return (
        <>
            <VideoPlayer>
                <RecomendedVideosList />
            </VideoPlayer>
        </>
    )
}
export default VideoPage
// import { useEffect, useState } from "react";
import { useSearch } from "../context/SearchContext";

const VideoPlayer = () => {
  const { videoId } = useSearch();
  const video = `//www.youtube.com/embed/${videoId}`

  return (
    <>
      <iframe
        width="640"
        height="360"
        src={video}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen='true'
        style={{marginTop: '80px', borderRadius: '15px'}}
      ></iframe>
    </>
  );
};
export default VideoPlayer;

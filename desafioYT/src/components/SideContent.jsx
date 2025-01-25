import { useEffect, useState } from "react";
import styles from "./SideContent.module.css";
import { useNavigate, useSearchParams } from "react-router";

const SideContent = () => {
  const navigate = useNavigate();
  const [term] = useSearchParams();
  const termSearched = term.get("search");
  const [searchResult, setSearchResult] = useState([]);
  const [views, setViews] = useState([]);
  const [listIds, setListIds] = useState("");
  const key = "AIzaSyCB0gEZJ25Whe87CQvgsKGlMT6_pS8Wpdo";

  useEffect(
    function fetchSearch() {
      async function fetchSearchResult() {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&q=${termSearched}&maxResults=50`
        );
        const data = await res.json();
        setSearchResult(data);
        const result = data.items.map((item) => item.id.videoId).join();
        setListIds(result);
      }
      fetchSearchResult(term);
    },
    [setListIds, term, termSearched]
  );

  useEffect(
    function fetchteste() {
      async function fetchVideo() {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${listIds}&key=${key}`
        );
        const data = await res.json();
        setViews(data);
      }
      fetchVideo();
    },
    [listIds]
  );

  function handleVideoSelected(videoId) {
    navigate(`/video?id=${videoId}`);
  }
  return (
    <>
      <div className={styles.teste}>
        <ul className={styles.lista}>
          {searchResult?.items?.map((item, index) => (
            <li key={item.id.videoId} className={styles.video}>
              <div>
                <img
                  src={item.snippet.thumbnails.high.url}
                  alt=""
                  onClick={() => handleVideoSelected(item.id.videoId)}
                />
              </div>
              <span className={styles.videoInfo}>
                <h4 onClick={() => handleVideoSelected(item.id.videoId)}>
                  {item.snippet.title}
                </h4>
                <p>{views?.items[index]?.statistics?.viewCount}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default SideContent;

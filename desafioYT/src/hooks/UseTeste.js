import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

function useTeste() {
  const [term] = useSearchParams();
  const termSearched = term.get("search");
  const [searchResult, setSearchResult] = useState([]);
  const [views, setViews] = useState([]);
  const [viewsIds, setViewsIds] = useState("");
  const [channels, setChannels] = useState([]);
  const [channelsIds, setChannelsIds] = useState("");
//   const key = "AIzaSyCB0gEZJ25Whe87CQvgsKGlMT6_pS8Wpdo";
  const key = "AIzaSyDnrpgoUVD1uxJ8ijOdxhefHUb9ChiG9Bk";
  //   const key = "AIzaSyCvJM7ZW8I2K0JEnOO76qa9w0DUyrg8VrA";
  

  useEffect(
    function bigTeste() {
      async function fetchSearchResult() {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&q=${termSearched}&maxResults=5`
        );
        const data = await res.json();
        console.log(data);
        setSearchResult(data);
        const resultViwes = data.items.map((item) => item.id.videoId).join();
        const resultChannels = data.items
          .map((item) => item.snippet.channelId)
          .join();
        setViewsIds(() => resultViwes);
        setChannelsIds(() => resultChannels);
      }
      fetchSearchResult();
      async function fetchVideo() {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${viewsIds}&key=${key}`
        );
        const data = await res.json();
        setViews(() => data);
      }
      fetchVideo();
      async function fetchChannels() {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics,contentDetails,snippet&id=${channelsIds}&key=${key}`
        );
        const data = await res.json();
        setChannels(() => data);
      }
      fetchChannels();
    },
    [viewsIds, channelsIds, termSearched]
  );
  return [searchResult, views, channels];
}
export { useTeste };

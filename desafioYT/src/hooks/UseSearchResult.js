import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router";

function useSearchResult() {
  const [term] = useSearchParams();
  const termSearched = term.get("search_query");
  const [searchResult, setSearchResult] = useState([]);
  const [views, setViews] = useState([]);
  const [channels, setChannels] = useState([]);
  const lastSearchTerm = useRef("");
  // const key = "AIzaSyCB0gEZJ25Whe87CQvgsKGlMT6_pS8Wpdo";
  const key = "AIzaSyDnrpgoUVD1uxJ8ijOdxhefHUb9ChiG9Bk";
  // const key = "AIzaSyCvJM7ZW8I2K0JEnOO76qa9w0DUyrg8VrA";

  useEffect(
    function () {
      if (!termSearched || termSearched === lastSearchTerm.current) return;

      async function fetchData() {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&q=${termSearched}&maxResults=10`
        );
        const data = await res.json();
        setSearchResult(()=>data);

        const channelsIds = searchResult?.items
          ?.map((item) => item.snippet.channelId)
          .join();
        const viewsIds = searchResult?.items
          ?.map((item) => item.id.videoId)
          .join();

        const [viewsRes, channelsRes] = await Promise.all([
          fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${viewsIds}&key=${key}`
          ),
          fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=statistics,contentDetails,snippet&id=${channelsIds}&key=${key}`
          ),
        ]);
        const viewsData = await viewsRes.json();
        const channelsData = await channelsRes.json();

        setViews(() => viewsData);
        setChannels(() => channelsData);
      }
      fetchData();
    },
    [termSearched]
  );

  function joinObjectsVideos() {
    const allSearchResultsObjects = searchResult?.items?.map((item) => ({
      id: item.etag,
      kind: item.id.kind.split("#")[1],
      channelId: item.snippet.channelId,
      videoId: item.id.videoId,
      titleVideo: item.snippet.title,
      description: item.snippet.description,
      thumb: item.snippet.thumbnails.high.url,
      published: item.snippet.publishedAt,
    }));
    const allChannelsObject = channels?.items?.map((item) => ({
      channelId: item.id,
      icon: item.snippet.thumbnails.high.url,
      channelTitle: item.snippet.title,
    }));
    const allViewsObject = views?.items?.map((item) => ({
      videoId: item.id,
      views: item.statistics.viewCount,
      definition: item.contentDetails.definition,
      duration: formatTime(item.contentDetails.duration),
    }));
    const joinVideoChannel = allSearchResultsObjects?.map((item1) =>
      allChannelsObject
        ?.filter((item2) => item2.channelId === item1.channelId)
        .map((item2) => Object.assign({}, item1, item2))
    );

    const newJoinVideoChannel = joinVideoChannel
      ?.map((item) => item?.[0])
      .filter(Boolean);

    const joinVideoChannelViews = newJoinVideoChannel?.map((item1) =>
      allViewsObject
        ?.filter((item3) => item3.videoId === item1.videoId)
        .map((item3) => Object.assign({}, item1, item3))
    );
    const newJoinVideoChannelViews = joinVideoChannelViews
      ?.map((item) => item?.[0])
      .filter(Boolean);

    const others = newJoinVideoChannel
      ?.map((item1) =>
        newJoinVideoChannelViews?.some((item) => item.id === item1.id)
          ? null
          : item1
      )
      .filter((item) => item !== null);
    const result = [...(others || []), ...(newJoinVideoChannelViews || [])];

    return result;
  }
  function formatTime(duration) {
    const time = duration.slice(2, -1);
    let period = "";
    if (time.includes("M")) {
      period = time.replace("M", ":");
    }
    if (time.includes("H")) {
      period = period.replace("H", ":");
    }
    period = period.split(":");
    console.log(period[0])
    let result = `${period[0]}:`;
    if (period.length > 1) {
      for (let i = 1; i < period.length; i++) {
        if (period[i].length < 2) {
          result += `0${period[i]}:`;
        } else {
          result += `${period[i]}:`;
        }
      }
    }
    result = result.substring(0, result.length - 1);

    return result;
  }

  const result = joinObjectsVideos();
  return result;
}
export { useSearchResult };

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
  // const key = "AIzaSyCB0gEZJ25Whe87CQvgsKGlMT6_pS8Wpdo";
  // const key = "AIzaSyDnrpgoUVD1uxJ8ijOdxhefHUb9ChiG9Bk";
  const key = "AIzaSyCvJM7ZW8I2K0JEnOO76qa9w0DUyrg8VrA";

  useEffect(
    function () {
      async function fetchSearchResult() {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&q=${termSearched}&maxResults=5`
        );
        const data = await res.json();
        setSearchResult(data);
        const resultViwes = data?.items?.map((item) => item.id.videoId).join();
        const resultChannels = data.items
          .map((item) => item.snippet.channelId)
          .join();
        setViewsIds(() => resultViwes);
        setChannelsIds(() => resultChannels);
      }
      fetchSearchResult();
      async function fetchViews() {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${viewsIds}&key=${key}`
        );
        const data = await res.json();
        setViews(() => data);
      }
      fetchViews();
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

  function joinObjectsVideos() {


    const teste1 = searchResult?.items?.map((item) => ({
      id: item.etag,
      kind: item.id.kind,
      channelId: item.snippet.channelId,
      videoId: item.id.videoId,
      titleVideo: item.snippet.title,
      description: item.snippet.description,
      thumb: item.snippet.thumbnails.high.url,
      published: item.snippet.publishedAt,
    }));
    const teste2 = channels?.items?.map((item) => ({
      channelId: item.id,
      icon: item.snippet.thumbnails.high.url,
      channelTitle: item.snippet.title,
    }));
    const teste3 = views?.items?.map((item) => ({
      videoId: item.id,
      views: item.statistics.viewCount,
    }));
    const joinVideoChannel = teste1?.map((item1) =>
      teste2
        ?.filter((item2) => item2.channelId === item1.channelId)
        .map((item2) => Object.assign({}, item1, item2))
    );
    const newJoinVideoChannel = joinVideoChannel
      ?.map((item) => item?.[0])
      .filter(Boolean);

    const joinVideoChannelViews = newJoinVideoChannel?.map((item1) =>
      teste3
        ?.filter((item3) => item3.videoId === item1.videoId)
        .map((item3) => Object.assign({}, item1, item3))
    );
    const newJoinVideoChannelViews = joinVideoChannelViews
      ?.map((item) => item?.[0])
      .filter(Boolean);

    const others = newJoinVideoChannel?.map((item1) => newJoinVideoChannelViews?.some(item => item.id === item1.id) ? null : item1).filter(item => item !== null)
    const result = [...(others || []), ...(newJoinVideoChannelViews || [])]

    return result;
  }

  const result = joinObjectsVideos()
  return result
}
export { useTeste };

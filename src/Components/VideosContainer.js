import React from "react";
import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../Utils/Constants";
import { useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
// import WatchPage from "./WatchPage";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        return (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}

      {/* <VideoCard info={videos[0]}/> */}
    </div>
  );
};

export default VideosContainer;

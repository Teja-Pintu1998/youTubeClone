import React from "react";

const VideoCard = (props) => {
  const { info } = props;
  // console.log(info)
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails} = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-md rounded-xl">
      <img
        className="cursor-pointer rounded-lg"
        src={thumbnails?.standard?.url}
        alt="thumbnail"
      ></img>
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;

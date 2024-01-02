import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="px-6 py-2 m-2 shadow-lg w-[100%]">
      <div className="px-1 py-2 mx-1 my-2">
        <img className="w-[100%] h-[200px] rounded-xl" alt="video" src={thumbnails.high.url} />
      </div>
      <div className="p-1 m-1">
        <h1 className="font-bold">{title}</h1>
        <h1>{channelTitle}</h1>
        <h1>{statistics.viewCount}</h1>
      </div>
    </div>
  );
};

export default VideoCard;

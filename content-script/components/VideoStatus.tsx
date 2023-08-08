import { VideoData } from "../interfaces/video.interface";
import React from "react";

interface VideoStatusProps {
  video: VideoData;
}

const VideoStatus: React.FC<VideoStatusProps> = ({ video }) => {
  let color = "gray";
  if (video.status === "watched") color = "green";
  else if (video.status === "in-progress") color = "yellow";

  return (
    <span
      style={{
        backgroundColor: color,
        width: "10px",
        height: "10px",
        display: "inline-block",
        margin: "2px",
        fontSize: "8px",
      }}
    >
      {video.favorite && <>⭐</>}
    </span>
  );
};
export default VideoStatus;

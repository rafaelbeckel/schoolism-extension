import browser from "webextension-polyfill";
import React from "react";
import { useState, useEffect } from "react";
import VideoStatus from "./components/VideoStatus";
import { VideoData } from "./interfaces/video.interface";

const getVideosForCourse = (courseId: string): Array<VideoData> => {
  if (!courseId) return [];

  return new Array<VideoData>(
    {
      id: "1",
      status: "watched",
      favorite: false,
    },
    {
      id: "2",
      status: "in-progress",
      favorite: false,
    },
    {
      id: "3",
      status: "not-started",
      favorite: false,
    },
    {
      id: "4",
      status: "not-started",
      favorite: true,
    },
    {
      id: "5",
      status: "not-started",
      favorite: false,
    }
  );
};

interface StatusContainerProps {
  courseId: string;
}

const StatusContainer: React.FC<StatusContainerProps> = ({
  courseId,
}): JSX.Element => {
  const [videos, setVideos] = useState(new Array<VideoData>());

  console.log("status of courseId", courseId);

  useEffect(() => {
    const videos = getVideosForCourse(courseId) ?? [];
    console.log(`videos for course ${courseId}`, videos);

    setVideos(videos);
  }, []);

  return (
    <>
      {videos.map((video: VideoData) => (
        <VideoStatus video={video} />
      ))}
    </>
  );
};
export default StatusContainer;

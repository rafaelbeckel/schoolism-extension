import browser from "webextension-polyfill";
import React from "react";
import { useState, useEffect } from "react";
import VideoStatus from "./components/VideoStatus";
import { VideoData } from "./interfaces/video.interface";

const getVideosForCourse = (courseId: string): Array<VideoData> => {
  if (!courseId) return [];

  return [
    {
      id: "1",
      status: "watched",
      favorite: false,
    },
    {
      id: "2",
      status: "in-progress",
      favorite: true,
    },
    {
      id: "3",
      status: "not-started",
      favorite: false,
    },
    {
      id: "4",
      status: "not-started",
      favorite: false,
    },
    {
      id: "5",
      status: "not-started",
      favorite: false,
    },
  ];
};

interface CourseStatusProps {
  courseId: string;
}

const CourseStatus: React.FC<CourseStatusProps> = ({ courseId }) => {
  const [videos, setVideos] = useState(new Array<VideoData>());

  useEffect(() => {
    const videos = getVideosForCourse(courseId) ?? [];

    setVideos(videos);
  }, []);

  return (
    <>
      {!videos && <span>Course not visited yet</span>}
      {videos &&
        videos.map((video: VideoData) => {
          <VideoStatus video={video} />;
        })}
    </>
  );
};
export default CourseStatus;

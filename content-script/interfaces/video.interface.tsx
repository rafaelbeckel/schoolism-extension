type VideoStatus = "watched" | "in-progress" | "not-started";

export interface VideoData {
  id: string;
  status: VideoStatus;
  favorite: boolean;
}

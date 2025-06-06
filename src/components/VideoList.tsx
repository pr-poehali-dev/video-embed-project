import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Video {
  id: string;
  title: string;
  src: string;
  thumbnail: string;
  duration: string;
}

interface VideoListProps {
  videos: Video[];
  activeVideoId: string;
  onVideoSelect: (videoId: string) => void;
}

const VideoList: React.FC<VideoListProps> = ({
  videos,
  activeVideoId,
  onVideoSelect,
}) => {
  return (
    <div className="w-full max-w-md">
      <h3 className="text-xl font-semibold mb-4 text-white">Плейлист</h3>

      <div className="space-y-3">
        {videos.map((video) => (
          <Card
            key={video.id}
            className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
              activeVideoId === video.id
                ? "ring-2 ring-primary bg-primary/10"
                : "bg-gray-800/50 hover:bg-gray-700/50"
            }`}
            onClick={() => onVideoSelect(video.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-16 h-12 object-cover rounded"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded flex items-center justify-center">
                    <Icon
                      name={activeVideoId === video.id ? "Pause" : "Play"}
                      size={16}
                      className="text-white"
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-white truncate">
                    {video.title}
                  </h4>
                  <p className="text-sm text-gray-400">{video.duration}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button
        variant="outline"
        className="w-full mt-4 bg-transparent border-gray-600 text-white hover:bg-white/10"
      >
        <Icon name="Plus" size={16} />
        Добавить видео
      </Button>
    </div>
  );
};

export default VideoList;

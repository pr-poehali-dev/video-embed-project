import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface VideoPlayerProps {
  src: string;
  title: string;
  autoplay?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  title,
  autoplay = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current && autoplay) {
      videoRef.current.play().catch(console.error);
    }
  }, [autoplay]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-black rounded-lg overflow-hidden shadow-2xl">
      <video
        ref={videoRef}
        className="w-full h-auto"
        src={src}
        autoPlay={autoplay}
        muted={isMuted}
        loop
        controls={false}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={togglePlay}
              className="text-white hover:bg-white/20"
            >
              <Icon name={isPlaying ? "Pause" : "Play"} size={20} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMute}
              className="text-white hover:bg-white/20"
            >
              <Icon name={isMuted ? "VolumeX" : "Volume2"} size={20} />
            </Button>
          </div>

          <div className="text-white text-sm font-medium">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

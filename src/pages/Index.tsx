import React, { useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import VideoList from "@/components/VideoList";

const mockVideos = [
  {
    id: "1",
    title: "Космическое путешествие",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=200&h=150&fit=crop",
    duration: "10:34",
  },
  {
    id: "2",
    title: "Горные вершины",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop",
    duration: "8:42",
  },
  {
    id: "3",
    title: "Океанские волны",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=200&h=150&fit=crop",
    duration: "12:18",
  },
];

const Index = () => {
  const [activeVideoId, setActiveVideoId] = useState("1");

  const activeVideo =
    mockVideos.find((video) => video.id === activeVideoId) || mockVideos[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2"></h1>
          <p className="text-gray-300"></p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1">
            <VideoPlayer
              src={activeVideo.src}
              title={activeVideo.title}
              autoplay={true}
            />
          </div>

          <div className="lg:w-80">
            <VideoList
              videos={mockVideos}
              activeVideoId={activeVideoId}
              onVideoSelect={setActiveVideoId}
            />
          </div>
        </div>

        <footer className="text-center mt-12 text-gray-400">
          <p></p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

import React from "react";
import VideoPlayer from "@/components/VideoPlayer";

const Index = () => {
  const activeVideo = {
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    title: "Космическое путешествие",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2"></h1>
          <p className="text-gray-300"></p>
        </header>

        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            <VideoPlayer
              src={activeVideo.src}
              title={activeVideo.title}
              autoplay={true}
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

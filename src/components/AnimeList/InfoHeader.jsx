"use client";

import Image from "next/image";
import YouTube from "react-youtube";

const InfoHeader = ({ anime }) => {
  const option = {
    width: "1280",
    height: "720",
  };

  return (
    <div className="py-4 inline-flex gap-2 w-full">
      <div className="w-1/4">
        <Image src={anime.data.images.webp.image_url} alt={`Poster ${anime.data.title}`} width={400} height={600} className="rounded-lg object-cover aspect-[3/4] h-[450px] w-auto" />
      </div>

      <div className="w-3/4">
        <YouTube iframeClassName="rounded-md w-full h-[450px] hidden lg:block" videoId={anime.data.trailer.youtube_id} onReady={(e) => e.target.pauseVideo()} opts={option} />
      </div>
    </div>
  );
};

export default InfoHeader;

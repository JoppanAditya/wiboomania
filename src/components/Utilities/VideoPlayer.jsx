"use client";

import { X, Play } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";
import { motion } from "framer-motion";

const VideoPlayer = ({ youtubeId, title }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenTrailer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "1280",
    height: "720",
  };

  const playerVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: 100,
      x: 100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      transition: {
        type: "Tween",
        duration: 0.4,
        ease: "circIn",
      },
    },
    closed: {
      opacity: 0,
      scale: 0,
      y: 100,
      x: 100,
      transition: {
        type: "Tween",
        duration: 0.4,
        ease: "circOut",
      },
    },
  };

  const Player = () => {
    return (
      <motion.div variants={playerVariants} initial="hidden" animate={isOpen ? "visible" : "closed"} className="fixed right-4 bottom-4 w-[300px] md:w-[500px]">
        <div className="flex justify-between items-center p-2 bg-color-primary rounded-t-md w-full">
          <h2 className="text-lg font-bold truncate pr-2">{`Trailer ${title}`}</h2>
          <button onClick={handleOpenTrailer} className="hover:bg-color-red border border-color-light-100 hover:border-color-red rounded transition-all">
            <X size={24} />
          </button>
        </div>
        <YouTube iframeClassName="rounded-b-md aspect-[16/9] w-[300px] md:w-[500px] h-auto" videoId={youtubeId} onReady={(e) => e.target.pauseVideo()} opts={option} />
      </motion.div>
    );
  };

  const TrailerButton = () => {
    return (
      <button onClick={handleOpenTrailer} className="fixed flex items-center gap-1 right-4 bottom-4 p-2 bg-color-accent rounded-md hover:text-color-dark-300 hover:scale-105 transition-all shadow-md">
        Tonton Trailer <Play size={16} weight="fill" />
      </button>
    );
  };

  return <>{isOpen ? <Player /> : <TrailerButton />}</>;
};

export default VideoPlayer;

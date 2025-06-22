import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoMdPlay, IoMdPause } from "react-icons/io";
import { RiFullscreenLine } from "react-icons/ri";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";
import {
  clipReelAnimation,
  opacityAnimation,
  textSlideAnimation,
  textSlideSingleAnimation,
} from "@/anim/anim";

const Reel = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "00:00";
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const enterFullscreen = () => {
    if (!videoRef.current) return;

    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      setCurrentTime(current);
      setProgress((current / duration) * 100);
    }
  };

  return (
    <div className="size-full p-10 max-ds:p-5">
      <div className="mb-4 h-fit overflow-hidden">
        <motion.h2
          className="text-t text-[16px] font-medium font-azeret uppercase"
          variants={textSlideSingleAnimation}
          initial="initial"
          animate="animate"
        >
          Reel
        </motion.h2>
      </div>

      {[
        "MISSING:",
        "Origin: Nike WHQ",
        "Species: Phantom 6",
        "Size: Variable",
        "Characteristics: Hyper aggressive, highly dangerous, and absolutely lethal in the final third.",
        "IF FOUND, PLEASE REPORT IMMEDIATELY. ENGAGE AT YOUR OWN RISK.",
      ].map((text, i) => (
        <div key={i} className="h-fit overflow-hidden">
          <motion.p
            className="text-t/75 text-[12px] font-azeret uppercase"
            variants={textSlideAnimation}
            initial="initial"
            animate="animate"
            custom={i}
          >
            {text}
          </motion.p>
        </div>
      ))}

      <div className="">
        <div
          className="mt-8 mb-8 flex items-center justify-center"
          onClick={togglePlay}
        >
          <motion.video
            ref={videoRef}
            src="/missing.mp4"
            muted
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
            variants={clipReelAnimation}
            initial="initial"
            animate="animate"
            custom={0.5}
            className="w-full max-w-[640px] h-[450px] border border-bb object-cover z-10 max-lg:max-w-[100%]"
          />

          <div className="absolute text-t text-[12px] font-azeret uppercase z-10">
            {isPlaying && "PLAY REEL"}
          </div>
        </div>

        <motion.div
          className="flex flex-col items-center justify-between gap-4"
          variants={opacityAnimation}
          initial="initial"
          animate="animate"
          custom={0.5}
        >
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={togglePlay}>
                {isPlaying ? (
                  <IoMdPause size={20} className="text-t" />
                ) : (
                  <IoMdPlay size={20} className="text-t" />
                )}
              </button>
              <p className="text-t text-[12px] font-medium font-azeret uppercase">
                {formatTime(currentTime)}
              </p>
              <p className="text-t text-[12px] font-medium font-azeret uppercase">
                {formatTime(duration)}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button onClick={toggleMute}>
                {isMuted ? (
                  <FaVolumeXmark size={20} className="text-t/50" />
                ) : (
                  <FaVolumeHigh size={20} className="text-t/100" />
                )}
              </button>

              <button onClick={enterFullscreen}>
                <RiFullscreenLine size={20} className="text-t" />
              </button>
            </div>
          </div>

          <div className="w-full">
            <div className="relative h-1 bg-t/50 rounded">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${progress}%`,
                  transition: {
                    type: "tween",
                    ease: "linear",
                  },
                }}
                className="absolute top-0 left-0 h-1 bg-t z-20 rounded"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reel;

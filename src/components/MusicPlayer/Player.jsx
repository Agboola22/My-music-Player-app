import React, { useRef, useEffect } from "react";

const Player = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}) => {

  const ref = useRef(null);
  console.log("Player rendering - activeSong:", activeSong);
  console.log("Player rendering - audio src:", activeSong?.attributes?.previews?.[0]?.url);
  console.log("Player rendering - isPlaying:", isPlaying);
  

  useEffect(() => {
    if (!ref.current) return;

    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (ref.current) {
      ref.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (ref.current) {
      ref.current.currentTime = seekTime;
    }
  }, [seekTime]);

  return (
    <audio
      src={activeSong?.attributes?.previews?.[0]?.url}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;

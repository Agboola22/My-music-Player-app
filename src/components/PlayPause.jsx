import { Play, Pause } from "lucide-react";

const PlayPause = ({ isPlaying, song, handlePause, handlePlay, activeSong }) =>
  isPlaying && activeSong?.attributes?.name === song?.attributes?.name ? (
    <Pause size={30} className="text-gray-300" onClick={handlePause} />
  ) : (
    <Play size={30} className="text-gray-300" onClick={handlePlay} />  
  );
export default PlayPause;

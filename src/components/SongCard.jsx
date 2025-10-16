import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPuase from "./PlayPause";
import { setActiveSong, playPause } from "../redux/features/playerSlice";

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {
  // console.log(activeSong);
  const artists = song.attributes?.artistName?.split(", ") || [];
  const handlePauseClick = () => {};
  const handlePlayClick = () => {};

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black opacity-50 group-hover:flex ${
            activeSong?.attributes?.name === song.attributes?.name
              ? "flex bg-black opacity-50"
              : "hidden"
          }`}
        >
          <PlayPuase
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </div>
        <img
          alt="song_img"
          src={song.attributes?.artwork?.url}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>{song.attributes?.name}</Link>
        </p>
        <p className="text-sm text-gray-300 truncate mt-1">
          {artists.map((artist, idx) => (
            <span key={idx}>
              <Link
                to={
                  song.attributes?.artistName
                    ? `/artists/${artist}`
                    : "/top-artists"
                }
              >
                {artist}
              </Link>
              {idx < artists.length - 1 && ", "}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default SongCard;

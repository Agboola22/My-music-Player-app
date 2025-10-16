import { Error, Loader, SongCard } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery(); // fetch songs from API endpoint
  const {activeSong, isPlaying} = useSelector((state) => state.player); // gets state from redux
  const genreTitle = "Pop";
  const dispatch = useDispatch();

  if (isFetching) return <Loader title="Loading songs..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      {/* header and select button */}
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      {/* Songs */}
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.slice(0, 50).map((song, i) => (
          <SongCard key={song.id} song={song} i={i} isPlaying={isPlaying} activeSong={activeSong} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Discover;

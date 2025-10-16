import loader from "../assets/loader.svg";

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <img
      src={loader}
      alt="loading........."
      className="w-32 h-32 object-contain"
    />
    <h1 className="font-bold text-2xl text-white mt-3">
      {title || "loading......."}
    </h1>
  </div>
);

export default Loader;

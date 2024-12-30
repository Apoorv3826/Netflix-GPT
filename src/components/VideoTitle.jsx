const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center bg-gradient-to-r from-black to-transparent text-white p-4 md:p-8 lg:p-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {title}
      </h1>
      <p className="text-sm md:text-base lg:text-lg mb-6 max-w-md md:max-w-lg lg:max-w-xl">
        {overview}
      </p>
      <div className="flex flex-wrap gap-4">
        <button className="bg-white text-black py-2 px-6 md:py-3 md:px-8 text-lg rounded-lg hover:bg-opacity-80 transition-colors duration-300">
          Play
        </button>
        <button className="bg-gray-600 text-white py-2 px-6 md:py-3 md:px-8 text-lg rounded-lg bg-opacity-80 hover:bg-opacity-100 transition-colors duration-300">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

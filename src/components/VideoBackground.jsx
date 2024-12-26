import React from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const TrailerVideo = useSelector((store) => store.movies?.TrailerVideo);

  useMovieTrailer(movieId);

  // Construct the trailer URL
  const trailerUrl = TrailerVideo?.key
    ? `https://www.youtube.com/watch?v=${TrailerVideo.key}`
    : null;

  return (
    <div className="w-full h-screen overflow-hidden">
      {trailerUrl ? (
        <ReactPlayer
          url={trailerUrl}
          playing={true}
          muted={true}
          loop={true}
          width="100%"
          height="100%"
          className="object-cover"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <p className="text-white text-center mt-10">Trailer not available.</p>
      )}
    </div>
  );
};

export default VideoBackground;

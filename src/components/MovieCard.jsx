import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="flex-none w-36 md:w-48 lg:w-56 transition-transform duration-300 hover:scale-105 cursor-pointer">
      <img
        src={IMG_URL + posterPath}
        alt="Movie Poster"
        className="w-full h-auto rounded-lg shadow-md object-cover aspect-[2/3]"
      />
    </div>
  );
};

export default MovieCard;

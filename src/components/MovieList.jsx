import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies = [] }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold py-4 text-white">
        {title}
      </h2>
      <div className="flex overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] pb-4">
        <div className="flex gap-4">
          {movies.length === 0 ? (
            <p className="text-white">No movies available</p>
          ) : (
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))
          )}
        </div>
      </div>
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default MovieList;

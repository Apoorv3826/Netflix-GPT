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
            movies
              .filter((movie) => movie.Poster) // Filter movies that have a poster
              .map((movie) => (
                <MovieCard key={movie.imdbID} posterPath={movie.Poster} />
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

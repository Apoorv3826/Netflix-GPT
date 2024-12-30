import { useEffect } from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    console.log("Fetching from store: ", movies);
  }, [movies]);

  if (!movies) {
    return <p>Loading movies...</p>;
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="-mt-40 md:-mt-52 relative z-20 px-4 md:px-12">
        <MovieList title={"Now Playing"} movies={movies.PlayingMovies} />
        <MovieList title={"Upcoming"} movies={movies.UpcomingMovies} />
        <MovieList title={"Popular"} movies={movies.PopularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

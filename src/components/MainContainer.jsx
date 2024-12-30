import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.PlayingMovies);

  if (!movies || movies.length === 0) {
    return <p>No movies to display.</p>; // Fallback UI if no movies are available
  }

  const movie = movies[0];
  const { Title, Plot, imdbID } = movie;

  return (
    <div className="relative w-full">
      <VideoTitle title={Title} overview={Plot} />
      <VideoBackground movieId={imdbID} />
    </div>
  );
};

export default MainContainer;

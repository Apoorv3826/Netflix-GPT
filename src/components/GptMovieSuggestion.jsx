import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="px-4 md:px-8 py-8">
      <div className="max-w-7xl mx-auto bg-black/80 rounded-lg backdrop-blur-sm">
        <div className="p-6 space-y-8">
          {movieNames.map((movieName, index) => (
            <MovieList
              key={movieName.trim()}
              title={movieName.trim()}
              movies={movieResults[index] || []}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GptMovieSuggestion;

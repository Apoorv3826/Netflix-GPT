import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPlayingMovies } from "../utils/moviesSlice";

const usePlayingMovies = () => {
  const dispatch = useDispatch();

  const getPlayingMovies = async () => {
    const searchQueries = [
      "action",
      "comedy",
      "thriller",
      "horror",
      "drama",
      "popular",
      "2023",
      "new releases",
      "adventure",
      "sci-fi",
    ];

    const randomQuery =
      searchQueries[Math.floor(Math.random() * searchQueries.length)];

    const apiKey = process.env.REACT_APP_OMDB_API_KEY;

    try {
      const data = await fetch(
        `https://www.omdbapi.com/?s=${randomQuery}&apikey=${apiKey}`
      );

      const jsonData = await data.json();

      if (jsonData.Response === "True") {
        const movies = jsonData.Search.filter(
          (movie) => movie.Type === "movie"
        );
        dispatch(addPlayingMovies(movies));
      } else {
        console.error("No movies found for query:", randomQuery);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getPlayingMovies();
  }, []);

  return null;
};

export default usePlayingMovies;

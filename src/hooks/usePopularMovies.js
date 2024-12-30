import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const getPopularMovies = async () => {
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
        dispatch(addPopularMovies(movies));
      } else {
        console.error("No movies found for query:", randomQuery);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  if (loading) {
    return <p>Loading popular movies...</p>;
  }

  return null;
};

export default usePopularMovies;

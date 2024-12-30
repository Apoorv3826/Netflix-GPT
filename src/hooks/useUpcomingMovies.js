import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const getUpcomingMovies = async () => {
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
        dispatch(addUpcomingMovies(movies));
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
    getUpcomingMovies();
  }, []);

  if (loading) {
    return <p>Loading upcoming movies...</p>;
  }

  return null;
};

export default useUpcomingMovies;

import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );

      const jsonData = await response.json();

      // Filter trailers by type
      const filterData = jsonData.results.filter(
        (video) => video.type === "Trailer"
      );

      // Select the first trailer or set a fallback
      const trailer = filterData[0] || null; // Use `null` if no trailer is found

      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Error fetching trailer:", error);
      dispatch(addTrailerVideo(null)); // Dispatch null on error
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;

import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (imdbID) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieTrailer = async () => {
      const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY; // YouTube API Key

      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${imdbID} trailer&type=video&key=${apiKey}`
        );

        const jsonData = await response.json();

        const trailer = jsonData.items[0]?.id?.videoId || null;
        dispatch(addTrailerVideo(trailer)); // Dispatch the trailer data
      } catch (error) {
        console.error("Error fetching trailer:", error);
        dispatch(addTrailerVideo(null));
      }
    };

    if (imdbID) {
      getMovieTrailer();
    }
  }, [imdbID, dispatch]);
};

export default useMovieTrailer;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const usePlayingMovies = () => {
  const dispatch = useDispatch();
  const getPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addPlayingMovies(jsonData.results));
  };

  useEffect(() => {
    getPlayingMovies();
  }, []);
};

export default usePlayingMovies;

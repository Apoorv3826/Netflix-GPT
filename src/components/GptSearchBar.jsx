import React, { useRef } from "react";
import model from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleSearchClick = async () => {
    const search = searchText.current.value;
    const query = `
      Act as a Movie Recommendation System and suggest movies based on the query: "${search}". 
      Only respond with the names of 5-6 movies, separated by commas. 
      Do not include any additional information, categories, or notes.`;

    const result = await model.generateContent(query);

    const geminiMovies =
      result.response.candidates[0].content.parts[0].text.split(",");

    const promiseArray = geminiMovies.map((movie) => searchMovieTMDB(movie));
    const movieData = await Promise.all(promiseArray);

    dispatch(
      addGptMovies({ movieNames: geminiMovies, movieResults: movieData })
    );
  };

  return (
    <div className="pt-[8%] md:pt-[10%] px-4 md:px-0">
      <form className="max-w-3xl mx-auto" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col md:flex-row gap-4 bg-black/80 p-4 rounded-lg backdrop-blur-sm">
          <input
            ref={searchText}
            type="text"
            className="flex-1 px-4 py-3 rounded-lg bg-white/90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="What would you like to watch today?"
          />
          <button
            className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;

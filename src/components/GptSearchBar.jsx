import React, { useRef } from "react";
import model from "../utils/gemini";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieOMDb = async (movie) => {
    const data = await fetch(
      `http://www.omdbapi.com/?s=${movie}&apikey=a738727a`
    );
    const json = await data.json();
    console.log(json);

    // Return the Search array if the response is successful
    return json.Response === "True" ? json.Search : [];
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

    // Fetch movie data for each movie name from OMDb
    const promiseArray = geminiMovies.map((movie) =>
      searchMovieOMDb(movie.trim())
    );
    const movieData = await Promise.all(promiseArray);

    // Dispatch the movie names and their corresponding results to Redux store
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

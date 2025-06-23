import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";

import ai from "../utils/openai";
import { addGptMovieResult } from "../utils/gptSlice";
import useSearchMovieTMDB from "../hooks/useSearchMovieTMDB";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // search movie in TMDB

  const getSearchMovieTMDB = useSearchMovieTMDB();

  const handleGPTSearchClick = async () => {
    // console.log(searchText.current.value);
    // Make an API call to GPT API and get Movie Results

    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query:" +
    //   searchText.current.value +
    //   "only give me name of 5 Movies ,comma separated like the example result given ahead .Example Result:Kesari 2,Retro,Manada Kadalu,Raid 2";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // console.log(gptResults.choices);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest only 5 Indian movies (Bollywood and regional films like Telugu, Tamil, Malayalam, Kannada, etc.) for the query: '" +
      searchText.current.value +
      "'. Only give me the names of the 5 movies, comma-separated, like the example result given ahead. Example Result: Lagaan, Vikram, Jigarthanda DoubleX, Manjummel Boys, Kantara";

    const gptResults = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: gptQuery,
    });

    if (!gptResults.candidates) {
      // TODO:Write Error Handling
    }

    console.log(gptResults.candidates?.[0]?.content?.parts?.[0]?.text);
    // console.log(gptResults);
    // Tumbbad, Ratsasan, Pizza, Darna Mana Hai, Vishudha

    const gptMovies =
      gptResults.candidates?.[0]?.content?.parts?.[0]?.text.split(",");
    console.log(gptMovies);

    // For each movie it will search TMBD API
    const promsieArray = gptMovies.map((movie) => getSearchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promsieArray);
    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className=" pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black rounded-lg grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className=" col-span-3 m-4 py-2 px-4 bg-red-800 text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

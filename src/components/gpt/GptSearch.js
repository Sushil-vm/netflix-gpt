import React from "react";
import GptSearchBar from "../gpt/GptSearchBar";
import GptMovieSuggestion from "../gpt/GptMovieSuggestion";
import { BG_URL } from "../../utils/constants";
import Header from "../auth/Header";

const GptSearch = () => {
  return (
    <div>
      <Header />
      <div className="fixed -z-10">
        <img
          className="w-screen h-screen object-cover"
          src={BG_URL}
          alt="Netflix-Logo"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;

import axios, { CancelTokenSource } from "axios";
import { useEffect, useState } from "react";
import { options } from "../services/api-config";
import useData from "./useData";
import { Genre } from "./useGenres";
import { MovieQuery } from "../App";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  genre_ids: number[];
}

const useMovies = (movieQuery: MovieQuery) => {
  const baseURL = movieQuery.searchText ? "/search/movie" : "/discover/movie";

  const params = {
    include_adult: false,
    include_video: false,
    language: "en-US",
    page: 1,
    ...(movieQuery.searchText && { query: movieQuery.searchText }), // Include the 'query' parameter only if 'searchText' has a value
    with_genres: movieQuery.genre?.id,
    sort_by: movieQuery.sortOption,
    "vote_count.gte": 500,
  };

  return useData<Movie>(baseURL, "results", { params }, [movieQuery]);
};

// const useMovies = (movieQuery: MovieQuery) =>
//   useData<Movie>(
//     "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1",
//     "results",
//     {
//       params: {
//         with_genres: movieQuery.genre?.id,
//         sort_by: movieQuery.sortOption,
//         "vote_count.gte": 500,
//         query: movieQuery.searchText,
//       },
//     },
//     [movieQuery]
//   );

export default useMovies;

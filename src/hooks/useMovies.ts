import axios, { CancelTokenSource } from "axios";
import { useEffect, useState } from "react";
import { options } from "../services/api-config";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    genre_ids: number[];
  }

    
const useMovies = (selectedGenre:Genre | null) => useData<Movie>("/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc","results",{params: {with_genres: selectedGenre?.id}}, [selectedGenre?.id]);
// const useMovies = (selectedGenre:Genre | null) => useData<Movie>("/movie/top_rated?language=en-US&page=1","results",{params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useMovies;
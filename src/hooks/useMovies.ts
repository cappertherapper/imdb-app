import axios, { CancelTokenSource } from "axios";
import { useEffect, useState } from "react";
import { options } from "../services/api-config";
import useData from "./useData";

export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
  }

  
const useMovies = () => useData<Movie>("/movie/top_rated?language=en-US&page=1","results");

export default useMovies;
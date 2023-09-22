import axios, { CancelTokenSource, CanceledError } from "axios";
import { useEffect } from "react";
import { options } from "../services/api-config";
import React from "react";

export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
  }
  
  interface FetchMoviesResponse {
    results: Movie[];
  }

const useMovies = () => {
    const [movies, setMovies] = React.useState<Movie[]>([]);
    const [error, setError] = React.useState("");
  
    useEffect(() => {
        const cancelTokenSource: CancelTokenSource = axios.CancelToken.source();

        axios
        .request<FetchMoviesResponse>({
            ...options,
            cancelToken: cancelTokenSource.token,
          })
            .then(function (response) {
            setMovies(response.data.results);
            })
            .catch((err) => {
                if (axios.isCancel(err)) {
                  return;
                }
                setError(err.message);
              });
                
              return () => {
                cancelTokenSource.cancel();
              };
    }, []);

    return {movies, error};
}
export default useMovies;
import axios, { CancelTokenSource } from "axios";
import { useEffect, useState } from "react";
import { options } from "../services/api-config";

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
    const [movies, setMovies] = useState<Movie[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
        const cancelTokenSource: CancelTokenSource = axios.CancelToken.source();
        setLoading(true);

        axios
        .request<FetchMoviesResponse>({
            ...options("/movie/top_rated?language=en-US&page=1"),
            cancelToken: cancelTokenSource.token,
          })
            .then(function (response) {
            setMovies(response.data.results);
            setLoading(false);
            })
            .catch((err) => {
                if (axios.isCancel(err)) {
                  return;
                }
                setError(err.message);
                setLoading(false);
              });
                
              return () => {
                cancelTokenSource.cancel();
              };
    }, []);

    return {movies, error,isLoading};
}
export default useMovies;
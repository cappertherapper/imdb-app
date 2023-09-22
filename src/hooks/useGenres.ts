import axios, { CancelTokenSource } from "axios";
import { useEffect, useState } from "react";
import { options } from "../services/api-config";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    genres: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
        const cancelTokenSource: CancelTokenSource = axios.CancelToken.source();
        setLoading(true);

        axios
        .request<FetchGenresResponse>({
            ...options("/genre/movie/list?language=en"),
            cancelToken: cancelTokenSource.token,
          })
            .then(function (response) {
            setGenres(response.data.genres);
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

    return {genres, error,isLoading};

};

export default useGenres;
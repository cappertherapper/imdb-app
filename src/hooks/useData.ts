import axios, { AxiosRequestConfig, CancelTokenSource } from "axios";
import { useEffect, useState } from "react";
import { options } from "../services/api-config";


interface FetchResponse<T> {
    [key:string]: T[];
}

const useData = <T>(endpoint:string, responseKey:string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const cancelTokenSource: CancelTokenSource = axios.CancelToken.source();
      setLoading(true);

        axios
        .request<FetchResponse<T>>({
            ...options(endpoint),
            cancelToken: cancelTokenSource.token,
            ...requestConfig,
          })
            .then(function (response) {
            setData(response.data[responseKey]);
            setLoading(false);
            })
            .catch((err) => {
                if (axios.isCancel(err)) {
                  return;
                }
                setError(err.message);
                setLoading(false);
              });
                
              return () => cancelTokenSource.cancel();

    }, deps ? [...deps] : []);

    return {data, error,isLoading};

};

export default useData;
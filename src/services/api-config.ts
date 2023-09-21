
const apiKey = import.meta.env.VITE_API_KEY;


export const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    headers: {
      accept: "application/json",
      Authorization:apiKey,
    },
  };
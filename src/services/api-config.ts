
const auth = import.meta.env.VITE_API_KEY;

export const options = (appendStr: string) => ({
    method: "GET",
    url: `https://api.themoviedb.org/3${appendStr}`,
    headers: {
      accept: "application/json",
      Authorization:auth,
    },
  });

const auth = import.meta.env.VITE_AUTH;

export const options = (appendStr: string) => ({
    method: "GET",
    url: `https://api.themoviedb.org/3${appendStr}`,
    headers: {
      accept: "application/json",
      Authorization:auth,
    },
  });

const apiKey = import.meta.env.VITE_API_KEY;


export const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    headers: {
      accept: "application/json",
      Authorization:apiKey,
    },
  };


// export default axios.create({
//     baseURL:'https://api.themoviedb.org/3',
//     params: {
//         // accept:'application/json',
//         // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjZiZGM0ZThkZGFmYjEwZGVmYWJiNWY4MjVjYmU3NyIsInN1YiI6IjY1MGMxYzQ0NDRlYTU0MDBlMzIyMjA4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Naa2qU5eMWlWhW82GhalUjDPG7xtrzi3h98-N3fG1ug',
//         key:'e26bdc4e8ddafb10defabb5f825cbe77',
//     }
// })
import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
}

export const genreIcons: Record<number,string> = {
    28: "src/assets/icons8-action-50.png", // Action
    12: "src/assets/icons8-adventure-50.png", // Adventure
    16: "src/assets/icons8-animation-50.png", // Animation
    35: "src/assets/icons8-comedy-50.png", // Comedy
    80: "src/assets/icons8-arrest-50.png", // Crime
    99: "src/assets/icons8-documentary-50.png", // Documentary
    // 18: "/path-to-your-icons/drama-icon.svg", // Drama
    // 10751: "/path-to-your-icons/family-icon.svg", // Family
    // 14: "/path-to-your-icons/fantasy-icon.svg", // Fantasy
    // 36: "/path-to-your-icons/history-icon.svg", // History
    // 27: "/path-to-your-icons/horror-icon.svg", // Horror
    // 10402: "/path-to-your-icons/music-icon.svg", // Music
    // 9648: "/path-to-your-icons/mystery-icon.svg", // Mystery
    // 10749: "/path-to-your-icons/romance-icon.svg", // Romance
    // 878: "/path-to-your-icons/science-fiction-icon.svg", // Science Fiction
    // 10770: "/path-to-your-icons/tv-movie-icon.svg", // TV Movie
    // 53: "/path-to-your-icons/thriller-icon.svg", // Thriller
    // 10752: "/path-to-your-icons/war-icon.svg", // War
    // 37: "/path-to-your-icons/western-icon.svg", // Western
  };
  

const useGenres = () => useData<Genre>("/genre/movie/list?language=en","genres");

export default useGenres;
import useData from "./useData";
import placeHolder from "../assets/icons8-categorize-50.png"

export {placeHolder};

export interface Genre {
    id: number;
    name: string;
}



const useGenres = () => useData<Genre>("/genre/movie/list?language=en","genres");

export const genreIcons: Record<number,string> = {
    28: "src/assets/icons8-action-50.png", // Action
    12: "src/assets/icons8-adventure-50.png", // Adventure
    16: "src/assets/icons8-animation-50.png", // Animation
    35: "src/assets/icons8-comedy-50.png", // Comedy
    80: "src/assets/icons8-arrest-50.png", // Crime
    99: "src/assets/icons8-documentary-50.png", // Documentary
    18: "src/assets/icons8-drama-50.png", // Drama
    10751: "src/assets/icons8-family-50.png", // Family
    14: "src/assets/icons8-fantasy-50.png", // Fantasy
    36: "src/assets/icons8-history-50.png", // History
    27: "src/assets/icons8-horror-50.png", // Horror
    10402: "src/assets/icons8-musical-50.png", // Music
    9648: "src/assets/icons8-mystery-64.png", // Mystery
    10749: "src/assets/icons8-romance-50.png", // Romance
    878: "src/assets/icons8-science-fiction-50.png", // Science Fiction
    10770: "src/assets/icons8-tv-50.png", // TV Movie
    53: "src/assets/icons8-thriller-50.png", // Thriller
    10752: "src/assets/icons8-battle-50.png", // War
    37: "src/assets/icons8-western-50.png", // Western
  };
  
export default useGenres;
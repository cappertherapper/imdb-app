import useData from "./useData";
import placeHolder from "../assets/icons8-categorize-50.png";

export { placeHolder };

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () =>
  useData<Genre>("/genre/movie/list?language=en", "genres");

export const genreIcons: Record<number, string> = {
  28: "src/assets/icons8-action-96.png", // Action **
  12: "src/assets/icons8-adventure-64.png", // Adventure **
  16: "src/assets/icons8-animation-48.png", // Animation **
  35: "src/assets/icons8-comedy-64.png", // Comedy **
  80: "src/assets/icons8-police-48.png", // Crime **
  99: "src/assets/icons8-filming-64.png", // Documentary **
  18: "src/assets/icons8-drama-48.png", // Drama **
  10751: "src/assets/icons8-family-48.png", // Family **
  14: "src/assets/icons8-fantasy-48.png", // Fantasy --
  36: "src/assets/icons8-history-48.png", // History --
  27: "src/assets/icons8-horror-48.png", // Horror  --
  10402: "src/assets/icons8-music-48.png", // Music --
  9648: "src/assets/icons8-mystery-64.png", // Mystery --
  10749: "src/assets/icons8-romantic-movies-80.png", // Romance  --
  878: "src/assets/icons8-sci-fi-48.png", // Science Fiction --
  10770: "src/assets/icons8-tv-64.png", // TV Movie **
  53: "src/assets/icons8-thriller-48.png", // Thriller **
  10752: "src/assets/icons8-tank-64.png", // War **
  37: "src/assets/icons8-cowboy-48.png", // Western
};

export default useGenres;

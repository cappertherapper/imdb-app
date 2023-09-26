import { Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import SortSelector from "./components/SortSelector";

export interface MovieQuery {
  genre: Genre | null;
  sortOption: string;
}

function App() {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: ` "nav nav" "aside main"`, //For desktop
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr", //For desktop
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              onSelectGenre={(genre) => setMovieQuery({ ...movieQuery, genre })}
              selectedGenre={movieQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Flex paddingLeft={2} marginBottom={2}>
            <SortSelector
              onSelectSortOption={(sortOption) =>
                setMovieQuery({ ...movieQuery, sortOption })
              }
            />
          </Flex>
          <MovieGrid movieQuery={movieQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

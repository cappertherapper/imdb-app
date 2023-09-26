import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import SortSelector from "./components/SortSelector";
import MovieHeading from "./components/MovieHeading";

export interface MovieQuery {
  genre: Genre | null;
  sortOption: string;
  searchText: string;
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
          <NavBar
            onSearch={(search) => {
              setMovieQuery({ ...movieQuery, searchText: search });
            }}
          />
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
          <Box paddingLeft={2}>
            <MovieHeading gameQuery={movieQuery} />
            <Flex marginBottom={2}>
              <SortSelector
                onSelectSortOption={(sortOption) =>
                  setMovieQuery({ ...movieQuery, sortOption })
                }
              />
            </Flex>
          </Box>
          <MovieGrid movieQuery={movieQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

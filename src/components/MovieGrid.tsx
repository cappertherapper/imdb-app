import React, { useEffect } from "react";
import { options } from "../services/api-config";
import { SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";

const MovieGrid = () => {
  const { movies, error } = useMovies();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4, xl: 6 }}
        padding="10px"
        spacing={5}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;

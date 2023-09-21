import React, { useEffect } from "react";
import { options } from "../services/api-config";
import { Text } from "@chakra-ui/react";
import axios from "axios";
import useMovies from "../hooks/useMovies";

const MovieGrid = () => {
  const { movies, error } = useMovies();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.original_title}</li>
        ))}
      </ul>
    </>
  );
};

export default MovieGrid;

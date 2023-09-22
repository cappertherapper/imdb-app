import React from "react";
import { Movie } from "../hooks/useMovies";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Prop {
  movie: Movie;
}

const MovieCard = ({ movie }: Prop) => {
  return (
    <>
      <Card maxH="md" borderRadius={5} overflow="hidden">
        <Image src={"https://image.tmdb.org/t/p/w185" + movie.poster_path} />
        <CardBody>
          <Heading fontSize="1xl">{movie.title}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default MovieCard;

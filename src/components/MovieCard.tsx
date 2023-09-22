import React from "react";
import { Movie } from "../hooks/useMovies";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import Rating from "./Rating";

interface Prop {
  movie: Movie;
}

const MovieCard = ({ movie }: Prop) => {
  return (
    <>
      <Card>
        <Image
          height="278px"
          src={"https://image.tmdb.org/t/p/w185" + movie.poster_path}
          objectFit="fill"
        />
        <CardBody flex="1">
          <Heading fontSize="1xl">{movie.title}</Heading>
          <Rating rating={movie.vote_average} />
        </CardBody>
      </Card>
    </>
  );
};

export default MovieCard;

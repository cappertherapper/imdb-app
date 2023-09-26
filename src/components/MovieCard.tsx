import React from "react";
import { Movie } from "../hooks/useMovies";
import { Card, CardBody, Flex, Heading, Image } from "@chakra-ui/react";
import Rating from "./Rating";

interface Prop {
  movie: Movie;
}

const MovieCard = ({ movie }: Prop) => {
  return (
    <>
      <Card>
        <Image
          height="200px"
          src={"https://image.tmdb.org/t/p/w185" + movie.poster_path}
          objectFit="fill"
        />
        <CardBody>
          <Flex direction="column" alignItems="flex-end">
            <Rating rating={movie.vote_average} />
          </Flex>
          <Heading fontSize="1xl">{movie.title}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default MovieCard;

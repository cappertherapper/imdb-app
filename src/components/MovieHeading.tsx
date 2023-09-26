import { Heading } from "@chakra-ui/react";
import { MovieQuery } from "../App";

interface Props {
  gameQuery: MovieQuery;
}

const MovieHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.genre?.name || ""} Movies`;
  return (
    <Heading marginY={3} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default MovieHeading;

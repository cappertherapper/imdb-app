import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre, genreIcons, placeHolder } from "../hooks/useGenres";
import { useState } from "react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {data?.map((genre) => (
          <ListItem key={genre.id}>
            <HStack paddingY="5px">
              <Image
                boxSize="32px"
                background={"white"}
                borderRadius={8}
                src={genreIcons[genre.id] || placeHolder}
                alt={genre.name}
              ></Image>
              <Button
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize="md"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

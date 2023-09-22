import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MovieCardContainer = ({ children }: Props) => {
  return (
    <Box width="250px" height="375px" borderRadius={5} overflow="hidden">
      {children}
    </Box>
  );
};

export default MovieCardContainer;
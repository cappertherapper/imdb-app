import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MovieCardContainer = ({ children }: Props) => {
  return (
    <Box width="100%" borderRadius={5} overflow="hidden">
      {children}
    </Box>
  );
};

export default MovieCardContainer;

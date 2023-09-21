import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/imdb.svg";
import ColorModeToggle from "./ColorModeToggle";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="9px">
      <Image src={logo} boxSize="70px" />
      <ColorModeToggle />
    </HStack>
  );
};

export default NavBar;

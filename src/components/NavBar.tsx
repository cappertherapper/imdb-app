import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/imdb.svg";
import ColorModeToggle from "./ColorModeToggle";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="9px">
      <Image src={logo} boxSize="70px" />
      <SearchInput />
      <ColorModeToggle />
    </HStack>
  );
};

export default NavBar;

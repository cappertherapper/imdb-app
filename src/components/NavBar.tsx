import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/imdb.svg";
import ColorModeToggle from "./ColorModeToggle";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="9px">
      <Image src={logo} boxSize="70px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeToggle />
    </HStack>
  );
};

export default NavBar;

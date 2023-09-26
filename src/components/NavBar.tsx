import { Button, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/imdb.svg";
import ColorModeToggle from "./ColorModeToggle";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="9px">
      <Button
        onClick={() => window.location.reload()}
        padding="0"
        background="none"
      >
        <Image src={logo} paddingLeft={2} boxSize="100px" />
      </Button>
      <SearchInput onSearch={onSearch} />
      <ColorModeToggle />
    </HStack>
  );
};

export default NavBar;

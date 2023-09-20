import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/imdb.svg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="70px" />
      <Text>Nagivation Bar</Text>
    </HStack>
  );
};

export default NavBar;

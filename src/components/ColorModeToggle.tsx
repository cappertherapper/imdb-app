import { HStack, Switch, Text, color, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorModeToggle = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeToggle;

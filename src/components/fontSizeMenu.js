import React from "react";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import { Text, Box, IconButton } from "@chakra-ui/core";

function FontSizeMenu() {
  function changeFontSize(option) {
    for (let property in appState.fontSizes[appState.activeTemplate]) {
      if (option == "increase") {
        appState.fontSizes[appState.activeTemplate][property] += 1;
      } else {
        appState.fontSizes[appState.activeTemplate][property] -= 1;
      }
    }
  }
  return (
    <Box
      d="flex"
      m="1em"
      p="4px"
      alignItems="center"
      backgroundColor="#EDF2F7;"
      borderRadius="0.25em"
    >
      <Text fontWeight="600" ml=".5em">
        Font Size
      </Text>
      <Box ml="auto">
        <IconButton
          aria-label="Increase Font Size"
          size="sm"
          icon="add"
          mr="10px"
          onClick={() => changeFontSize("increase")}
        />
        <IconButton
          aria-label="Decrease Font Size"
          size="sm"
          icon="minus"
          onClick={() => changeFontSize("decrease")}
        />
      </Box>
    </Box>
  );
}

export default view(FontSizeMenu);

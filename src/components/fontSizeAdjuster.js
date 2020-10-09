import React from "react";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import { IconButton, Box, Text } from "@chakra-ui/core";

function FontMenu() {
  function increaseFontSize() {
    for (let key in appState.templateFontSizes) {
      appState.templateFontSizes[key] += 1;
    }
  }

  function decreaseFontSize() {
    for (let key in appState.templateFontSizes) {
      appState.templateFontSizes[key] -= 1;
    }
  }

  return (
    <Box d="flex" p="20px" alignItems="center">
      <Text>Adjust all font sizes by 1 pt: </Text>
      <IconButton
        onClick={increaseFontSize}
        aria-label="Increase Font Size"
        icon="add"
      />
      <IconButton
        onClick={decreaseFontSize}
        aria-label="Decrease Font Size"
        icon="minus"
      />
    </Box>
  );
}

export default view(FontMenu);

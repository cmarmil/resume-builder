import React from "react";
import { Box, Text } from "@chakra-ui/core";
import FontMenu from "components/fontSelectMenu.js";
import FontSizeMenu from "components/fontSizeMenu.js";
import TemplatePicker from "components/templatePicker.js";
import ColorPicker from "components/colorPicker.js";
import { view } from "@risingstack/react-easy-state";

function DesignScreen() {
  return (
    <React.Fragment>
      <Box>
        <Box d="flex" m="1em" alignItems="center">
          <FontMenu></FontMenu>
        </Box>
        <FontSizeMenu></FontSizeMenu>
        <Text m="1em">Theme Color:</Text>
        <ColorPicker></ColorPicker>
        <Box m="1em">
          <TemplatePicker></TemplatePicker>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default view(DesignScreen);

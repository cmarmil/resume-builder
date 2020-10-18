import React from "react";
import { Box, Text } from "@chakra-ui/core";
import FontMenu from "components/fontSelectMenu.js";
import TemplatePicker from "components/templatePicker.js";
import ColorPicker from "components/colorPicker.js";
import { view } from "@risingstack/react-easy-state";

function DesignScreen() {
  return (
    <React.Fragment>
      <Box>
        <Text ml="2em" mt="2em" className="quillFormLabel">Design</Text>
        <Text m="1em">Theme Color:</Text>
        <ColorPicker></ColorPicker>
        <Box>
          <FontMenu></FontMenu>
        </Box>
        <Box>
          <TemplatePicker></TemplatePicker>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default view(DesignScreen);

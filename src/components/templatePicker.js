import React from "react";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import { Box, Image, Text } from "@chakra-ui/core";
import OneColImage from "assets/oneCol.png";
import TwoColImage from "assets/twoCol.png";

function changeTemplate(templateName) {
  appState.activeTemplate = templateName;
}

function TemplatePicker() {
  return (
    <React.Fragment>
      <Text>Template Style: </Text>
      <Box d="flex" mb="1em" justifyContent="center">
        <Box
          as="button"
          w="40%"
          m="1em"
          className="templateButton"
          onClick={() => changeTemplate("oneColumn")}
        >
          <Image src={OneColImage} alt="One Column Template Image"></Image>
        </Box>
        <Box
          as="button"
          w="40%"
          m="1em"
          onClick={() => changeTemplate("twoColumn")}
          className="templateButton"
        >
          <Image src={TwoColImage} alt="Two Column Template Image"></Image>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default view(TemplatePicker);

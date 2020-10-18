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
        <Image
          tabIndex="0"
          onClick={() => changeTemplate("oneColumn")}
          className="templateButton"
          w="40%"
          m="1em"
          src={OneColImage}
        ></Image>
        <Image
          tabIndex="0"
          onClick={() => changeTemplate("twoColumn")}
          className="templateButton"
          w="40%"
          m="1em"
          src={TwoColImage}
        ></Image>
      </Box>
    </React.Fragment>
  );
}

export default view(TemplatePicker);

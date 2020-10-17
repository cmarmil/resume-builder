import React from "react";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import { Box, Image } from "@chakra-ui/core";
import OneColImage from "assets/oneCol.png";
import TwoColImage from "assets/twoCol.png";

function changeTemplate(templateName) {
 // appState.activeTemplate = templateName;
}

function TemplatePicker() {
  return (
    <Box d="flex" p="20px" justifyContent="center">
      <Image
        onClick={() => changeTemplate("oneColumn")}
        className="templateButton"
        w="40%"
        m="1em"
        src={OneColImage}
      ></Image>
      <Image
        onClick={() => changeTemplate("twoColumn")}
        className="templateButton"
        w="40%"
        m="1em"
        src={TwoColImage}
      ></Image>
    </Box>
  );
}

export default view(TemplatePicker);

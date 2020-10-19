import React from "react";
import { Box, Text } from "@chakra-ui/core";
import { view } from "@risingstack/react-easy-state";

function FormTitle(props) {
  let formTitleMap = {
    0: "Personal Details",
    1: "Summary",
    2: "Skills",
    3: "Work Experience",
    4: "Education",
    5: "Certificates and Licenses",
    6: "Custom Sections",
    7: "Design Details",
    8: "Download PDF"
  };
  return (
    <Box pt="1em" pb="1em">
      <Text textAlign="left" pl="1em">
        {formTitleMap[props.activeFormIndex]}
      </Text>
    </Box>
  );
}

export default view(FormTitle);

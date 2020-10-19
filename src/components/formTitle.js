import React from "react";
import { Box, Text } from "@chakra-ui/core";
import { view } from "@risingstack/react-easy-state";
import { TiContacts, TiMessage, TiMortarBoard, TiBriefcase, TiTickOutline, TiDocumentText, TiEdit, TiBrush, TiDownloadOutline} from "react-icons/ti";

function FormTitle(props) {
  let formTitleMap = {
    0: {title: "Personal Details", icon: TiContacts},
    1: {title: "Summary", icon: TiMessage},
    2: {title: "Skills", icon: TiTickOutline},
    3: {title: "Work Experience", icon: TiBriefcase},
    4: {title: "Education", icon: TiMortarBoard},
    5: {title: "Certificates and Licenses", icon: TiDocumentText},
    6: {title: "Custom Sections", icon: TiEdit},
    7: {title: "Design Details", icon: TiBrush},
    8: {title: "Download Pdf", icon: TiDownloadOutline},
  };
  return (
    <Box pt="1em" pb="1em" pl="1em" d="flex" alignItems="center">
      <Box as={formTitleMap[props.activeFormIndex].icon} size="32px" pr="5px" color="indigo.400"/>
      <Text textAlign="left" fontWeight={600}>
        {formTitleMap[props.activeFormIndex].title}
      </Text>
    </Box>
  );
}

export default view(FormTitle);

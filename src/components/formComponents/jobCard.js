import React from "react";
import { Box, Button, Tag, TagCloseButton, TagLabel } from "@chakra-ui/core";
import { view } from "@risingstack/react-easy-state";
import appState from "appState.js";

function JobCard(props) {
  function deleteJob(index) {
    appState.pdfData.workExperience.splice(index, 1);
  }
  return (
    <Box className="job-card" w="100%" mt="1em" rounded="md" overflow="hidden">
      {appState.pdfData.workExperience.map((expObj, index) => (
        <Tag key={'jobTag '+ index}  onClick={() => props.onClick(index)} variant="solid" backgroundColor="#0984e3" mb="5px">
          <TagLabel>
            {expObj.jobTitle} at {expObj.companyName}
          </TagLabel>
          <TagCloseButton onClick={() => deleteJob(index)}/>
        </Tag>
      ))}
    </Box>
  );
}

export default view(JobCard);

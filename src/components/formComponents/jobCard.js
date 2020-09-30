import React from "react";
import { Box, IconButton } from "@chakra-ui/core";
import { view } from "@risingstack/react-easy-state";

function JobCard(props) {
  return (
    <Box
      className="jobCard"
      d='flex'
      w="95%"
      p="10px"
      mt="1em"
      rounded="md"
      overflow="hidden"
      backgroundColor="#EDF2F7"
      onClick={() => props.setActiveJob(props.index)}
    >
        <Box className="jobCardInfo">
          {props.expObj.jobTitle} at {props.expObj.companyName}
        </Box>
        <Box className="jobCardBtns">
          <IconButton
            aria-label="Edit Job"
            icon="edit"
            onClick={() => props.setActiveJob(props.index)}
          />
          <IconButton aria-label="Edit Job" icon="delete" />
        </Box>
      </Box>
  );
}

export default view(JobCard);

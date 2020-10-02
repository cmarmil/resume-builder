import React from "react";
import { Box, IconButton, Text } from "@chakra-ui/core";
import { view } from "@risingstack/react-easy-state";

function FormCard(props) {
  return (
    <Box
      className="jobCard"
      d="flex"
      p="10px"
      mt="1em"
      rounded="md"
      overflow="hidden"
      backgroundColor="#EDF2F7"
      onClick={() => props.setActive(props.index)}
    >
      <Text className="jobCardInfo" textAlign="left">
        {props.title} at {props.place}
      </Text>
      <Box className="jobCardBtns">
        <IconButton
          mr="7px"
          aria-label="Edit"
          icon="edit"
          onClick={() => props.setActive(props.index)}
        />
        <IconButton  onClick={(e) => props.delete(e, props.index)}aria-label="Delete" icon="delete" />
      </Box>
    </Box>
  );
}

export default view(FormCard);

import React from "react";
import { Box, IconButton, Text } from "@chakra-ui/core";
import { view } from "@risingstack/react-easy-state";

const FormCard = props => {
  return (
    <Box
      className="formCard"
      d="flex"
      p="10px"
      mt="1em"
      rounded="md"
      overflow="hidden"
      backgroundColor="#EDF2F7"
      onClick={() => props.setActive(props.index)}
    >
      <Text className="formCardInfo" textAlign="left">
        {props.cardTitle}
      </Text>
      <Box className="formCardBtns">
        <IconButton
          mr="7px"
          aria-label="Edit"
          icon="edit"
          onClick={() => props.setActive(props.index)}
          aria-label={`Edit ${props.cardTitle}`}
        />
        <IconButton
          onClick={e => props.delete(e, props.index)}
          aria-label="Delete"
          icon="delete"
          aria-label={`Delete ${props.cardTitle}`}
        />
      </Box>
    </Box>
  );
};

export default view(FormCard);

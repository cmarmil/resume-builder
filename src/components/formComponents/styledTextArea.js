import React from "react";
import { Textarea, FormLabel, Box } from "@chakra-ui/core";

const style = {
  div: {
    textAlign: "left",
    flex: 2,
  },
  label: {
    fontSize: "small",
    color: "grey"
  }
};

const StyledTextArea = props => {
  return (
    <Box style={style.div} className="inputWithLabel" mr={props.mr} ml={props.ml} mb={props.mb}>
      <FormLabel style={style.label} htmlFor={props.id}>
        {props.label}
      </FormLabel>
      <Textarea id={props.id} defaultValue={props.value} />
    </Box>
  );
};

export default StyledTextArea;

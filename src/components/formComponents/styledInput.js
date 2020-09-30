import React from "react";
import { Input, FormLabel, Box } from "@chakra-ui/core";
import { view } from "@risingstack/react-easy-state";

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

const StyledInput = props => {
  return (
    <Box style={style.div} className="inputWithLabel" mr={props.mr} ml={props.ml} mb={props.mb}>
      <FormLabel style={style.label} htmlFor={props.id}>
        {props.label}
      </FormLabel>
      <Input id={props.id} placeholder={props.placeholder} defaultValue={props.defaultValue}/>
    </Box>
  );
};

export default view(StyledInput);

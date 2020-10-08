import React from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Box,
  Text
} from "@chakra-ui/core";
import appState from "appState.js";
import { view } from "@risingstack/react-easy-state";

class fontSizeInput extends React.Component {
  handleChange = (key, value) => {
      appState.fontSizes[appState.activeTemplate][key] = value;
  };

  createInputs = () => {
    let typeMap = {
      'pageHeader': "Page Header",
      'sectionHeader': "Section Header",
      'body': "Body"
    };
    let inputComponents = [];
    let fontSizeObj = appState.fontSizes[appState.activeTemplate];
    for (let key in fontSizeObj) {
      inputComponents.push(
        <Box key={key} d="flex" alignItems="center" justifyContent="center" p="20px">
          <Text mr="20px">{typeMap[key]} Font Size:</Text>
          <NumberInput
            onChange={(value) => this.handleChange(key, value)}
            w="30%"
            defaultValue={fontSizeObj[key]}
            ml="auto"
            min={10}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
      );
    }
    return inputComponents;
  };

  render() {
    return <React.Fragment>{this.createInputs()}</React.Fragment>;
  }
}

export default view(fontSizeInput);

import React from "react";
import { TwitterPicker } from "react-color";
import { Box, Text } from "@chakra-ui/core";
import FontMenu from "components/fontSelectMenu.js";
import FontSizeInput from "components/fontSizeInput.js";
import customTheme from "customTheme.js";
import appState from "appState.js";
import { view } from "@risingstack/react-easy-state";

class DesignScreen extends React.Component {
  state = {
    background: "#fff"
  };

  handleChangeComplete = color => {
    this.setState({ background: color.hex });
    appState.templateColor = color.hex;
  };

  changeFontSize = () => {};

  render() {
    return (
      <React.Fragment>
        <Box>
          <Text>
            Choose a theme color from the selection below, or enter your own
            valid hex value.
          </Text>
          <TwitterPicker
            triangle="hide"
            width="80%"
            colors={[
              customTheme.colors.red["100"],
              customTheme.colors.orange["100"],
              customTheme.colors.yellow["100"],
              customTheme.colors.green["100"],
              customTheme.colors.blue["100"],
              customTheme.colors.indigo["100"],
              customTheme.colors.purple["100"],
              customTheme.colors.grey["100"],
              "white"
            ]}
            color={this.state.background}
            onChangeComplete={this.handleChangeComplete}
          />
          <FontMenu></FontMenu>
          <FontSizeInput></FontSizeInput>
        </Box>
      </React.Fragment>
    );
  }
}

export default view(DesignScreen);
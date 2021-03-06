import React from "react";
import { BlockPicker } from "react-color";
import customTheme from "customTheme.js";
import appState from "appState.js";
import { view } from "@risingstack/react-easy-state";

class ColorPicker extends React.Component {
  state = {
    background: "#fff"
  };

  handleChangeComplete = color => {
    this.setState({ background: color.hex });
    appState.templateColor = color.hex;
  };

  componentDidMount() {
    this.setState({ background: appState.templateColor });
  }

  render() {
    return (
      <BlockPicker
        triangle="hide"
        width='calc(100% - 40px)'
        colors={[
          customTheme.colors.red["300"],
          customTheme.colors.orange["300"],
          customTheme.colors.yellow["300"],
          customTheme.colors.green["300"],
          customTheme.colors.blue["300"],
          customTheme.colors.indigo["300"],
          customTheme.colors.purple["300"],
          customTheme.colors.grey["300"],
          customTheme.colors.red["200"],
          customTheme.colors.orange["200"],
          customTheme.colors.yellow["200"],
          customTheme.colors.green["200"],
          customTheme.colors.blue["200"],
          customTheme.colors.indigo["200"],
          customTheme.colors.purple["200"],
          customTheme.colors.grey["200"],
          customTheme.colors.red["100"],
          customTheme.colors.orange["100"],
          customTheme.colors.yellow["100"],
          customTheme.colors.green["100"],
          customTheme.colors.blue["100"],
          customTheme.colors.indigo["100"],
          customTheme.colors.purple["100"],
          customTheme.colors.grey["100"]
        ]}
        color={this.state.background}
        onChangeComplete={this.handleChangeComplete}
      />
    );
  }
}

export default view(ColorPicker);

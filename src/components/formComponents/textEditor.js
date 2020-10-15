import React from "react";
import ReactQuill from "react-quill";
import { Box } from "@chakra-ui/core";
import CustomToolbar from "components/formComponents/customToolbar.js";
import "react-quill/dist/quill.snow.css";
import { view } from "@risingstack/react-easy-state";
import appState from "appState.js";

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  makeArrayFromDelta = valueDelta => {
    //check to see if the text item has hyperlink data so that it can be arranged into a data structure that react-pdf can consume.
    let textItems = [];
    valueDelta.forEach(function(item) {
      if (item.hasOwnProperty("attributes") &&
        item.attributes.hasOwnProperty("link")) {
        let linkItem = {
          link: item.attributes.link,
          content: item.insert
        };
        textItems.push(linkItem);
      } else {
        textItems.push(item.insert);
      }
    });
    return textItems;
  };

  handleChange = (content, delta, source, editor) => {
    let valueDelta = editor.getContents();
    let valueArray = this.makeArrayFromDelta(valueDelta);
    this.props.handleChange(valueArray, content);
  };

  saveValue = () => {
    //manual save via toolbar button
    appState.pdfData = {
      ...appState.pdfData,
      ...appState.formData
    };
  };

  modules = {
    toolbar: {
      container: "#toolbar"
    },
    keyboard: { bindings: { tab: false } }
  };

  render() {
    return (
      <Box w="100%" className="text-editor">
        <CustomToolbar handleSave={this.saveValue}></CustomToolbar>
        <ReactQuill
          onChange={this.handleChange}
          defaultValue={this.props.htmlString}
          theme="snow"
          modules={this.modules}
        ></ReactQuill>
      </Box>
    );
  }
}

export default view(TextEditor);

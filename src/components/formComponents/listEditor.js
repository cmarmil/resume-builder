import React from "react";
import ReactQuill from "react-quill";
import { Box } from "@chakra-ui/core";
import CustomToolbar from "components/formComponents/customToolbar.js";
import "react-quill/dist/quill.snow.css";
import { view } from "@risingstack/react-easy-state";
import appState from "appState.js";

class ListEditor extends React.Component {
  constructor(props) {
    super(props);
    this.setInitialValueString = this.setInitialValueString.bind(this);
    this.editorContentRef = React.createRef();
  }

  setInitialValueString() {
    let listItems = [];
    this.props.listItems.forEach(function(value) {
      listItems.push(`<li>${value}</li>`);
    });
    return `<ul>${listItems.join("")}</ul>`;
  }

  makeArrayFromDelta = () => {
    //this grabs a delta object containing raw text values instead of an HTML string.
    //We filter all bullet point objects out as they contain no text content.
    let deltaItems = this.editorContentRef.current.editor.editor.delta;
    let filteredItems = deltaItems.filter(function(item) {
      return (
        !item.hasOwnProperty("attributes")
      );
    });
    let newArr = filteredItems.map(a => a.insert);
    return newArr;
  };

  handleChange = () => {
    let value = this.makeArrayFromDelta();
    this.props.handleChange(value);
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
    }
  };

  formats = ["list"];

  render() {
    return (
      <Box w="100%" className="text-editor">
        <CustomToolbar handleSave={this.saveValue}></CustomToolbar>
        <ReactQuill
          onChange={this.handleChange}
          ref={this.editorContentRef}
          defaultValue={this.setInitialValueString()}
          theme="snow"
          modules={this.modules}
          formats={this.formats}
        ></ReactQuill>
      </Box>
    );
  }
}

export default view(ListEditor);

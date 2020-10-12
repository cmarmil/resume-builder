import React from "react";
import ReactQuill from "react-quill";
import { Box } from "@chakra-ui/core";
import CustomToolbar from "components/formComponents/customToolbar.js";
import "react-quill/dist/quill.snow.css";
import appState from "appState.js";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.setInitialValueString = this.setInitialValueString.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.editorContentRef = React.createRef();
  }

  setInitialValueString() {
    let listItems = [];
    this.props.description.forEach(function(value) {
      listItems.push(`<li>${value}</li>`);
    });
    return `<ul>${listItems.join("")}</ul>`;
  }

  makeArrayFromDelta() {
    //this grabs a delta object containing raw text values instead of an HTML string.
    //We filter all bullet point objects out as they contain no text content.
    let deltaItems = this.editorContentRef.current.editor.editor.delta;
    let filteredItems = deltaItems.filter(function(item) {
      return !item.hasOwnProperty("attributes");
    });
    let newDescArr = filteredItems.map(a => a.insert);
    return newDescArr;
  }

  handleSave() {
    //manual save via toolbar save button
    let newValues = this.makeArrayFromDelta();
    appState.pdfData.workExperience[this.props.index].description = newValues;
  }

  handleChange = () => {
    let newValues = this.makeArrayFromDelta();
    appState.formData.workExperience[this.props.index].description = newValues;
  }

  modules = {
    toolbar: {
      container: "#toolbar"
    }
  };

  formats = ["list"];

  render() {
    return (
      <Box w="100%" className="text-editor">
        <CustomToolbar handleSave={this.handleSave}></CustomToolbar>
        <ReactQuill
          onChange={this.onChange}
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

export default MyComponent;

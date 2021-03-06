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
    this.createHtmlString = this.createHtmlString.bind(this);
    this.editorContentRef = React.createRef();
  }

  createHtmlString() {
      let contentItems = [];
      this.props.contentItems.forEach(function(value) {
        contentItems.push(`<li>${value}</li>`);
      });
      return `<ul>${contentItems.join("")}</ul>`;
  }

  makeArrayFromDelta = () => {
    //filter all bullet point objects out as they contain no text content.
    let deltaItems = this.editorContentRef.current.editor.getContents();
    let filteredItems = deltaItems.filter(function(item) {
      return !item.hasOwnProperty("attributes");
    });
    let newArr = filteredItems.map(a => a.insert);
    return newArr;
  };

  handleChange = () => {
    if (this.editorContentRef.current) {
      let value = this.makeArrayFromDelta();
      this.props.handleChange(value);
    }
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

  formats = ["list"];

  render() {
    return (
      <Box w="100%" className="text-editor">
        <CustomToolbar handleSave={this.saveValue} isList={true}></CustomToolbar>
        <ReactQuill
          onChange={this.handleChange}
          ref={this.editorContentRef}
          defaultValue={this.createHtmlString()}
          theme="snow"
          modules={this.modules}
          formats={this.formats}
        ></ReactQuill>
      </Box>
    );
  }
}

export default view(ListEditor);

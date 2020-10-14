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
    this.createHtmlString = this.createHtmlString.bind(this);
    this.editorContentRef = React.createRef();
  }

  createHtmlString() {
    return `<p>${this.props.contentItems[0]}</p>`
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

  formats = [];

  render() {
    return (
      <Box w="100%" className="text-editor">
        <CustomToolbar handleSave={this.saveValue}></CustomToolbar>
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

export default view(TextEditor);

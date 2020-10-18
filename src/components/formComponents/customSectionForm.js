import React from "react";
import {
  Box,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Button
} from "@chakra-ui/core";
import {
  ListEditor,
  TextEditor,
  StyledInput
} from "components/formComponents/formImports.js";
import { view } from "@risingstack/react-easy-state";
import appState from "appState.js";

class CustomSectionForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      editorType: "text"
    };
  }
  handleChange = e => {
    let value = e.target.value;
    appState.formData.customSections[this.props.index]["sectionTitle"] = value;
  };

  handleEditorChange = (value, htmlString) => {
    appState.formData.customSections[this.props.index].content = value;
    appState.formData.customSections[this.props.index].htmlString = htmlString;
  };

  setTypeList = () => {
    appState.pdfData.customSections[this.props.index].contentType = "list";
  };

  setTypeText = () => {
    appState.pdfData.customSections[this.props.index].contentType = "text";
  };

  render() {
    return (
      <Box p={"20px"}>
        <form id="experience-info-form" className="formBox">
          <Box mb={"20px"} d={"flex"} alignItems={"flex-end"}>
            <StyledInput
              onChange={this.handleChange}
              key={this.props.formData.sectionTitle}
              mr={"10px"}
              id={"customSectionTitle"}
              label={"Custom Section Title"}
              defaultValue={this.props.formData.sectionTitle}
            ></StyledInput>
            <Menu>
              <MenuButton as={Button} rightIcon="chevron-down">
                Custom Content Type
              </MenuButton>
              <MenuList>
                <MenuItem onClick={this.setTypeList}>List</MenuItem>
                <MenuItem onClick={this.setTypeText}>Text</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <p className="quillFormLabel">Custom Section Content</p>
          <Box mb={"20px"} d={"flex"}>
            {this.props.formData.contentType === "list" ? (
              <ListEditor
                contentItems={
                  appState.pdfData.customSections[this.props.index].content
                }
                handleChange={this.handleEditorChange}
              ></ListEditor>
            ) : (
              <TextEditor
                contentItems={
                  appState.pdfData.customSections[this.props.index].content
                }
                htmlString={
                  appState.pdfData.customSections[this.props.index].htmlString
                }
                handleChange={this.handleEditorChange}
              ></TextEditor>
            )}
          </Box>
        </form>
      </Box>
    );
  }
}

export default view(CustomSectionForm);

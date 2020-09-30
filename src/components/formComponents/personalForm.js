import React from "react";
import { Box } from "@chakra-ui/core";
import StyledInput from "./styledInput.js";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import commonFunctions from 'commonFunctions.js';

class DataForm extends React.Component {
  constructor(props) {
    super();
    this.formRef = React.createRef();
  }
  render() {
    return (
      <Box p={"20px"} backgroundColor="white" className="formContainer">
        <form ref={this.formRef} id="personal-info-form" className="formBox">
          <Box mb={"20px"} d={"flex"}>
            <StyledInput
              mr={"10px"}
              id={"fname"}
              label={"First Name"}
              placeholder={commonFunctions.setDefaultFormValue(appState.pdfData, 'fName')}
              defaultValue={commonFunctions.setDefaultFormValue(appState.pdfData, 'fName')}
            ></StyledInput>
            <StyledInput
              id={"lname"}
              label={"Last Name"}
              placeholder={commonFunctions.setDefaultFormValue(appState.pdfData, 'lName')}
              defaultValue={commonFunctions.setDefaultFormValue(appState.pdfData, 'lName')}
            ></StyledInput>
          </Box>
          <StyledInput
            mb={"20px"}
            id={"profession"}
            label={"Profession Title"}
            placeholder={commonFunctions.setDefaultFormValue(appState.pdfData, 'profession')}
            defaultValue={commonFunctions.setDefaultFormValue(appState.pdfData, 'profession')}
          ></StyledInput>
          <Box mb={"20px"} d={"flex"}>
            <StyledInput
              mr={"10px"}
              id={"city"}
              label={"City"}
              placeholder={commonFunctions.setDefaultFormValue(appState.pdfData, 'city')}
              defaultValue={commonFunctions.setDefaultFormValue(appState.pdfData, 'city')}
            ></StyledInput>
            <StyledInput
              id={"state"}
              label={"State/Province"}
              placeholder={commonFunctions.setDefaultFormValue(appState.pdfData, 'state')}
              defaultValue={commonFunctions.setDefaultFormValue(appState.pdfData, 'state')}
            ></StyledInput>
          </Box>

          <Box mb={"20px"} d={"flex"}>
            <StyledInput
              mr={"10px"}
              id={"phoneNum"}
              label={"Phone Number"}
              placeholder={commonFunctions.setDefaultFormValue(appState.pdfData, 'phoneNumber')}
              defaultValue={commonFunctions.setDefaultFormValue(appState.pdfData, 'phoneNumber')}
            ></StyledInput>
            <StyledInput
              mr={"10px"}
              id={"email"}
              label={"Email"}
              placeholder={commonFunctions.setDefaultFormValue(appState.pdfData, 'email')}
              defaultValue={commonFunctions.setDefaultFormValue(appState.pdfData, 'email')}
            ></StyledInput>
            <StyledInput
              id={"website"}
              label={"Website"}
              placeholder={commonFunctions.setDefaultFormValue(appState.pdfData, 'website')}
              defaultValue={commonFunctions.setDefaultFormValue(appState.pdfData, 'website')}
            ></StyledInput>
          </Box>
        </form>
      </Box>
    );
  }
}

export default view(DataForm);

import React from "react";
import { Box } from "@chakra-ui/core";
import StyledInput from "./styledInput.js";
import StyledTextArea from "./styledTextArea.js";
import { view } from "@risingstack/react-easy-state";
import commonFunctions from 'commonFunctions.js';

class ExperienceForm extends React.Component {
  constructor(props) {
    super();
    this.formRef = React.createRef();
  }

  render() {
    return (
      <Box p={"20px"} backgroundColor="white" className="formContainer">
        <form ref={this.formRef} id="experience-info-form" className="formBox">
          <Box mb={"20px"} d={"flex"}>
            <StyledInput
              key={commonFunctions.setDefaultFormValue(this.props.formData, "jobTitle") + "jobTitle"}
              mr={"10px"}
              id={"job-title"}
              label={"Job Title"}
              defaultValue={commonFunctions.setDefaultFormValue(this.props.formData,"jobTitle")}
            ></StyledInput>
            <StyledInput
              key={commonFunctions.setDefaultFormValue(this.props.formData,"companyName") + "companyName"}
              mr={"10px"}
              id={"company-name"}
              label={"Company Name"}
              defaultValue={commonFunctions.setDefaultFormValue(this.props.formData,"companyName")}
            ></StyledInput>
            <StyledInput
              key={commonFunctions.setDefaultFormValue(this.props.formData,"dates") + "dates"}
              mb={"20px"}
              id={"job-duration"}
              label={"Duration"}
              defaultValue={commonFunctions.setDefaultFormValue(this.props.formData,"dates")}
            ></StyledInput>
          </Box>
          <p>Describe your job duties, each point seperated by a comma.</p>
          <Box mb={"20px"} d={"flex"}>
            <StyledTextArea
              key={commonFunctions.setDefaultFormValue(this.props.formData,"description")}
              label={"Job Duties"}
              value={commonFunctions.setDefaultFormValue(this.props.formData,"description")}
            ></StyledTextArea>
          </Box>
        </form>
      </Box>
    );
  }
}

export default view(ExperienceForm);

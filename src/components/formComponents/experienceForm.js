import React from "react";
import { Box } from "@chakra-ui/core";
import StyledInput from "./styledInput.js";
import StyledTextArea from "./styledTextArea.js";
import { view } from "@risingstack/react-easy-state";

class ExperienceForm extends React.Component {
  constructor() {
    super();
    this.formRef = React.createRef();
    this.renderActiveJobTxt = this.renderActiveJobTxt.bind(this);
  }

  renderActiveJobTxt(property) {
    if (this.props.formData) {
      if (property === "description") {
        return this.props.formData[property].join(", ");
      } else {
        return this.props.formData[property];
      }
    } else {
      return "";
    }
  }

  render() {
    return (
      <Box p={"20px"} backgroundColor="white" className="formContainer">
        <form ref={this.formRef} id="experience-info-form" className="formBox">
          <Box mb={"20px"} d={"flex"}>
            <StyledInput
              key={this.renderActiveJobTxt("jobTitle") + "jobTitle"}
              mr={"10px"}
              id={"job-title"}
              label={"Job Title"}
              defaultValue={this.renderActiveJobTxt("jobTitle")}
            ></StyledInput>
            <StyledInput
              key={this.renderActiveJobTxt("companyName") + "companyName"}
              mr={"10px"}
              id={"company-name"}
              label={"Company Name"}
              defaultValue={this.renderActiveJobTxt("companyName")}
            ></StyledInput>
            <StyledInput
              key={this.renderActiveJobTxt("dates") + "dates"}
              mb={"20px"}
              id={"job-duration"}
              label={"Duration"}
              defaultValue={this.renderActiveJobTxt("dates")}
            ></StyledInput>
          </Box>
          <p>Describe your job duties, each point seperated by a comma.</p>
          <Box mb={"20px"} d={"flex"}>
            <StyledTextArea
              key={this.renderActiveJobTxt("description")}
              label={"Job Duties"}
              value={this.renderActiveJobTxt("description")}
            ></StyledTextArea>
          </Box>
        </form>
      </Box>
    );
  }
}

export default view(ExperienceForm);

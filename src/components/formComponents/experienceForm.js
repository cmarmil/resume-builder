import React from "react";
import { Box, Button } from "@chakra-ui/core";
import StyledInput from "./styledInput.js";
import StyledTextArea from "./styledTextArea.js";
import JobCard from "./jobCard.js";
import { view } from "@risingstack/react-easy-state";
import appState from "appState.js";

class ExperienceForm extends React.Component {
  constructor(props) {
    super();
    this.formRef = React.createRef();
    this.addNewJob = this.addNewJob.bind(this);
    this.setActiveJob = this.setActiveJob.bind(this);
    this.renderActiveJobTxt = this.renderActiveJobTxt.bind(this);
    this.state = {
      activeJobIndex: 0
    };
  }

  addNewJob() {
    this.setState({
      activeJobIndex: this.state.activeJobIndex + 1
    });

    let form = this.formRef.current;
    let formElements = form.elements;
    let newData = {};
    for (let i = 0; i < formElements.length; i++) {
      let element = formElements[i];
      if (element.value) {
        switch (i) {
          case 0:
            newData.jobTitle = form.elements[i].value;
            break;
          case 1:
            newData.companyName = form.elements[i].value;
            break;
          case 2:
            newData.dates = form.elements[i].value;
            break;
          case 3:
            let splitSkills = form.elements[i].value.trim().split(",");
            for (let i = 0; i < splitSkills.length; i++) {
              //strip all non-alphanumeric characters from string.
              //if the end result is an empty string, remove it.
              let strippedWhitespace = splitSkills[i].replace(/\W/g, "");
              if (strippedWhitespace === "") {
                splitSkills.splice(i, 1);
                //account for loss of element in array by decrementing the index.
                i--;
              }
              splitSkills[i] = splitSkills[i].trim();
            }
            if (splitSkills.length) {
                newData.description = splitSkills;
            }
            break;
        }
      }
    }
  }

  setActiveJob(index) {
      this.setState({
          activeJobIndex: index
      });
  }

  renderActiveJobTxt(property) {
    let i = this.state.activeJobIndex;
    if (appState.pdfData.workExperience[i]) {
      return appState.pdfData.workExperience[i][property];
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
              mr={"10px"}
              id={"job-title"}
              label={"Job Title"}
              placeholder={this.renderActiveJobTxt("jobTitle")}
            ></StyledInput>
            <StyledInput
              mr={"10px"}
              id={"company-name"}
              label={"Company Name"}
              placeholder={this.renderActiveJobTxt("companyName")}
            ></StyledInput>
            <StyledInput
              mb={"20px"}
              id={"job-duration"}
              label={"Duration"}
              placeholder={this.renderActiveJobTxt("dates")}
            ></StyledInput>
          </Box>
          <p>Describe your job duties, each point seperated by a comma.</p>
          <Box mb={"20px"} d={"flex"}>
            <StyledTextArea label={"Job Duties"}></StyledTextArea>
          </Box>
        </form>
        <Button onClick={this.addNewJob} background="#80CBC4">
          Add Job
        </Button>
        <JobCard onClick={this.setActiveJob}></JobCard>
      </Box>
    );
  }
}

export default view(ExperienceForm);

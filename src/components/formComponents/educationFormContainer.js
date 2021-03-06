import React from "react";
import { Box, Button, Text } from "@chakra-ui/core";
import {EducationForm, FormCard} from "./formImports.js";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";

class EducationFormContainer extends React.Component {
  constructor(props) {
    super();
    this.setActive = this.setActive.bind(this);
    this.saveEntry = this.saveEntry.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.state = {
      activeIndex: 0,
      formOpen: false
    };
  }

  setActive(index) {
    this.saveEntry();
    if (this.state.formOpen && index !== this.state.activeIndex) {
      this.setState({
        activeIndex: index,
        formOpen: true
      });
    } else {
      this.setState({
        activeIndex: index,
        formOpen: !this.state.formOpen
      });
    }
  }

  saveEntry() {
    appState.pdfData = {
      ...appState.pdfData,
      ...appState.formData
    };
  }

  deleteEntry(e, index) {
    e.stopPropagation();
    appState.pdfData.education.splice(index, 1);
  }

  addEducation() {
    let newEDU = {
      degree: "Degree Level",
      areaOfStudy: "Computer Science",
      schoolName: "Your University",
      dates: "",
      description: []
    };
    appState.formData.education.push(newEDU);
    this.setState({
      activeIndex: appState.pdfData.education.length - 1,
      formOpen: true
    });
  }

  render() {
    return (
      <Box p={"20px"}>
        {appState.pdfData.education.map((obj, index) => (
          <React.Fragment key={"FormCard " + index.toString()}>
            <FormCard
              setActive={this.setActive}
              delete={this.deleteEntry}
              index={index}
              activeIndex={this.state.activeImdex}
              cardTitle={`${obj.degree} at ${obj.schoolName}`}
            ></FormCard>
            {this.state.activeIndex === index && this.state.formOpen ? (
              <EducationForm
                index={this.state.activeIndex}
                formData={appState.pdfData.education[this.state.activeIndex]}
              ></EducationForm>
            ) : null}
          </React.Fragment>
        ))}
        <Button onClick={this.addEducation} mt="20px">
          Add Education
        </Button>
      </Box>
    );
  }
}

export default view(EducationFormContainer);

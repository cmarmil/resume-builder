import React from "react";
import { Box, Button } from "@chakra-ui/core";
import {
  FormCard,
  ExperienceForm
} from "components/formComponents/formImports.js";
import { view } from "@risingstack/react-easy-state";
import appState from "appState.js";

class WorkExpContainer extends React.Component {
  constructor(props) {
    super();
    this.setActiveJob = this.setActiveJob.bind(this);
    this.saveJobInfo = this.saveJobInfo.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
    this.addJob = this.addJob.bind(this);
    this.state = {
      activeJobIndex: 0,
      formOpen: false
    };
  }

  setActiveJob(index) {
    //open new form if the click index is different instead of just closing the one already active.
    //save any new info
    if (this.state.formOpen && index !== this.state.activeJobIndex) {
      this.setState({
        activeJobIndex: index,
        formOpen: true
      });
    } else {
      this.setState({
        activeJobIndex: index,
        formOpen: !this.state.formOpen
      });
    }
    this.saveJobInfo();
  }

  saveJobInfo() {
    appState.pdfData = {
      ...appState.pdfData,
      ...appState.formData
    };
  }

  deleteJob(e, index) {
    e.stopPropagation();
    appState.pdfData.workExperience.splice(index, 1);
  }

  addJob() {
    let newJob = {
      jobTitle: "Job Title",
      companyName: "Company",
      dates: "",
      description: ["Job description bullet point"]
    };
    appState.formData.workExperience.push(newJob);
    this.setState({
      activeJobIndex: appState.pdfData.workExperience.length - 1,
      formOpen: true
    });
  }

  render() {
    return (
      <Box p={"20px"}>
        <p className="quillFormLabel">Work Experience</p>
        {appState.pdfData.workExperience.map((expObj, index) => (
          <React.Fragment key={"FormCard " + index}>
            <FormCard
              key={"FormCard " + expObj.jobTitle}
              setActive={this.setActiveJob}
              delete={this.deleteJob}
              index={index}
              cardTitle={`${expObj.jobTitle} at ${expObj.companyName}`}
            ></FormCard>
            {this.state.activeJobIndex === index && this.state.formOpen ? (
              <ExperienceForm
                formData={
                  appState.pdfData.workExperience[this.state.activeJobIndex]
                }
                index={this.state.activeJobIndex}
              ></ExperienceForm>
            ) : null}
          </React.Fragment>
        ))}
        <Button onClick={this.addJob} mt="20px">
          Add Job
        </Button>
      </Box>
    );
  }
}

export default view(WorkExpContainer);

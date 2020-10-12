import React from "react";
import { Box, Button } from "@chakra-ui/core";
import FormCard from "components/formComponents/formCard.js";
import { view } from "@risingstack/react-easy-state";
import ExperienceForm from "components/formComponents/experienceForm.js";
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
    this.saveJobInfo();
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
              setActive={this.setActiveJob}
              delete={this.deleteJob}
              index={index}
              title={expObj.jobTitle}
              place={expObj.companyName}
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

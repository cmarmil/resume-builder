import React from "react";
import { Box, Button } from "@chakra-ui/core";
import JobCard from "components/formComponents/jobCard.js";
import { view } from "@risingstack/react-easy-state";
import ExperienceForm from 'components/formComponents/experienceForm.js'
import appState from "appState.js";

class WorkExpContainer extends React.Component {
  constructor(props) {
    super();
    this.setActiveJob = this.setActiveJob.bind(this);
    this.state = {
      activeJobIndex: 0,
      formOpen: false
    };
  }

  setActiveJob(index) {
      this.setState({
          activeJobIndex: index,
          formOpen: !this.state.formOpen
      });
  }

  render() {
    return (
      <Box className="formContainer">
        {appState.pdfData.workExperience.map((expObj, index) => (
          <React.Fragment>
            <JobCard
              key={"jobCard " + index}
              setActiveJob={this.setActiveJob}
              index={index}
              expObj={expObj}
            ></JobCard>
            {((this.state.activeJobIndex === index) && this.state.formOpen) ? <ExperienceForm formData={appState.pdfData.workExperience[this.state.activeJobIndex]}></ExperienceForm> : null}
          </React.Fragment>
        ))}
        <Button>Add Job</Button>
      </Box>
    );
  }
}

export default view(WorkExpContainer);

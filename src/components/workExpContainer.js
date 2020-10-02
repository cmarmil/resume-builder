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

    this.formRef = React.createRef();
  }

  setActiveJob(index) {
    //open new form if the click index is different instead of just closing the one already active.
    //save any new info
    this.saveJobInfo(this.state.activeJobIndex);
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

  saveJobInfo(index) {
    //grab inner form ref and save any newly entered info.
    //look into ref forwarding?
    if (this.formRef.current && this.formRef.current.formRef.current) {
      let form = this.formRef.current.formRef.current;
      let formElements = form.elements;
      let newData = {};
      for (let i = 0; i < formElements.length; i++) {
        if (formElements[i]) {
          switch (i) {
            case 0:
              newData.jobTitle = form.elements[0].value;
              break;
            case 1:
              newData.companyName = form.elements[1].value;
              break;
            case 2:
              newData.dates = form.elements[2].value;
              break;
          }
        }
      }
      appState.pdfData.workExperience[index] = {
        ...appState.pdfData.workExperience[index],
        ...newData
      };
    }
  }

  deleteJob(e, index) {
    e.stopPropagation();
    appState.pdfData.workExperience.splice(index, 1);
  }

  addJob() {
    let newJob = {
      jobTitle: 'Job Title',
      companyName: 'Company',
      dates: '',
      description: ['Job description bullet point']
    }
    appState.pdfData.workExperience.push(newJob);
    this.setState({
      activeJobIndex: appState.pdfData.workExperience.length - 1,
      formOpen: true
    });
  }

  render() {
    return (
      <Box p={"20px"} className="formContainer">
      <p className='quillFormLabel'>Work Experience</p>
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
                ref={this.formRef}
                formData={
                  appState.pdfData.workExperience[this.state.activeJobIndex]
                }
                index={this.state.activeJobIndex}
              ></ExperienceForm>
            ) : null}
          </React.Fragment>
        ))}
        <Button onClick={this.addJob} mt="20px">Add Job</Button>
      </Box>
    );
  }
}

export default view(WorkExpContainer);

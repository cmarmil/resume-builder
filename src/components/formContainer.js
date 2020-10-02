import React from "react";
import PersonalForm from "components/formComponents/personalForm";
import SummaryForm from "components/formComponents/summaryForm";
import WorkExpContainer from "components/workExpContainer.js";
import EducationFormContainer from "components/formComponents/educationFormContainer.js";
import SkillsForm from "components/formComponents/skillsForm.js";
import CertsFormContainer from "components/formComponents/certsFormContainer.js";
import { Button, Progress, Box } from "@chakra-ui/core";
import { view } from "@risingstack/react-easy-state";
import DownloadButton from "components/downloadButton.js";
import appState from "appState.js";

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.renderActiveForm = this.renderActiveForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.backBtnClick = this.backBtnClick.bind(this);
    this.state = {
      activeForm: 0,
      progress: 0
    };
    this.ref = React.createRef();
  }

  renderActiveForm() {
    switch (this.state.activeForm) {
      case 0:
        return <PersonalForm ref={this.ref}></PersonalForm>;
      case 1:
        return <SummaryForm ref={this.ref}></SummaryForm>;
      case 2:
        return <SkillsForm ref={this.ref}></SkillsForm>;
      case 3:
        return <WorkExpContainer ref={this.ref}></WorkExpContainer>;
      case 4:
        return <EducationFormContainer ref={this.ref}></EducationFormContainer>;
      case 5:
        return <CertsFormContainer ref={this.ref}></CertsFormContainer>;
    }
  }

  handleSubmit() {
    if (this.ref.current.formRef.current) {
      let form = this.ref.current.formRef.current;
      let formElements = form.elements;
      let newData = {};
      if (this.state.activeForm === 0) {
        for (let i = 0; i < formElements.length; i++) {
          let element = formElements[i];
          if (element.value) {
            switch (i) {
              case 0:
                newData.fName = form.elements[0].value;
                break;
              case 1:
                newData.lName = form.elements[1].value;
                break;
              case 2:
                newData.profession = form.elements[2].value;
                break;
              case 3:
                newData.city = form.elements[3].value;
                break;
              case 4:
                newData.state = form.elements[4].value;
                break;
              case 5:
                newData.phoneNumber = form.elements[5].value;
                break;
              case 6:
                newData.email = form.elements[6].value;
                break;
              case 7:
                newData.website = form.elements[7].value;
                break;
            }
          }
        }
      } else if (this.state.activeForm === 1) {
        if (form.elements[0].value) {
          newData.summary = form.elements[0].value;
        }
      }
      if (newData) {
        appState.pdfData = {
          ...appState.pdfData,
          ...newData
        };
      }
    }

    //proceed to next form section
    if (this.state.activeForm < 5) {
      let currentForm = this.state.activeForm;
      let nextForm = currentForm + 1;
      let currentProgress = this.state.progress;
      let newProgress = currentProgress + 20;
      this.setState({
        activeForm: nextForm,
        progress: newProgress
      });
    }
  }

  backBtnClick() {
    if (this.state.activeForm >= 1) {
      let currentForm = this.state.activeForm;
      let previousForm = currentForm - 1;
      let currentProgress = this.state.progress;
      let newProgress = currentProgress - 20;
      this.setState({
        activeForm: previousForm,
        progress: newProgress
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Progress color="blue" size="lg" value={this.state.progress} />
        {this.renderActiveForm()}
        <Box className="nextPrevButtons">
          <Button onClick={this.backBtnClick}>Back</Button>
          <Button onClick={this.handleSubmit} variantColor="blue">
            Next
          </Button>
        </Box>
        {/*  <DownloadButton /> */}
      </React.Fragment>
    );
  }
}

export default view(FormContainer);

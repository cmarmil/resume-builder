import React from "react";
import PersonalForm from "components/formComponents/personalForm";
import SummaryForm from "components/formComponents/summaryForm";
import WorkExpContainer from "components/workExpContainer.js";
import EducationFormContainer from "components/formComponents/educationFormContainer.js";
import SkillsForm from "components/formComponents/skillsForm.js";
import CertsFormContainer from "components/formComponents/certsFormContainer.js";
import { Button, Progress, Box } from "@chakra-ui/core";
import { view } from "@risingstack/react-easy-state";
import appState from "appState.js";
import DownloadScreen from "./downloadScreen";
import DesignScreen from "components/designScreen.js";

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.renderActiveForm = this.renderActiveForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.backBtnClick = this.backBtnClick.bind(this);
    this.state = {
      activeForm: 0,
      progress: 15
    };
  }

  renderActiveForm() {
    switch (this.state.activeForm) {
      case 0:
        return <PersonalForm></PersonalForm>;
      case 1:
        return <SummaryForm></SummaryForm>;
      case 2:
        return <SkillsForm></SkillsForm>;
      case 3:
        return <WorkExpContainer></WorkExpContainer>;
      case 4:
        return <EducationFormContainer></EducationFormContainer>;
      case 5:
        return <CertsFormContainer></CertsFormContainer>;
      case 6:
        return <DesignScreen></DesignScreen>;
      case 7:
        return <DownloadScreen></DownloadScreen>;
    }
  }

  handleSubmit() {
    //merge the current form data with the pdf data to re-render the pdf with new form values.
    appState.pdfData = {
      ...appState.pdfData,
      ...appState.formData
    };

    //proceed to next form section
    if (this.state.activeForm < 7) {
      let currentForm = this.state.activeForm;
      let nextForm = currentForm + 1;
      let currentProgress = this.state.progress;
      let newProgress = currentProgress + 15;
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
        <Progress
          hasStripe
          size="lg"
          value={this.state.progress}
          color="blue"
        />
        <Box className="formContainer">{this.renderActiveForm()}</Box>
        <Box className="nextPrevButtons">
          {this.state.activeForm > 0 ? (
            <Button variantColor="blue" mr="10px" onClick={this.backBtnClick}>
              Back
            </Button>
          ) : null}
          {this.state.activeForm < 7 ? (
            <Button onClick={this.handleSubmit} variantColor="blue">
              Next
            </Button>
          ) : null}
        </Box>
      </React.Fragment>
    );
  }
}

export default view(FormContainer);

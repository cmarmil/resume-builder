import React from "react";
import {
  ExperienceContainer,
  EducationFormContainer,
  PersonalForm, 
  SkillsForm,
  SummaryForm,
  CertsFormContainer,
  CustomSectionContainer
} from "components/formComponents/formImports.js";
import { Button, Progress, Box } from "@chakra-ui/core";
import { view } from "@risingstack/react-easy-state";
import appState from "appState.js";
import DownloadScreen from "./downloadScreen";
import DesignScreen from "components/designScreen.js";

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeForm: 0,
      progress: 15
    };
  }

  renderActiveForm = () => {
    switch (this.state.activeForm) {
      case 0:
        return <PersonalForm></PersonalForm>;
      case 1:
        return <SummaryForm></SummaryForm>;
      case 2:
        return <SkillsForm></SkillsForm>;
      case 3:
        return <ExperienceContainer></ExperienceContainer>;
      case 4:
        return <EducationFormContainer></EducationFormContainer>;
      case 5:
        return <CertsFormContainer></CertsFormContainer>;
      case 6:
        return <CustomSectionContainer></CustomSectionContainer>;
      case 7:
        return <DesignScreen></DesignScreen>;
      case 8:
        return <DownloadScreen></DownloadScreen>;
    }
  };

  handleSubmit = () => {
    //merge the current form data with the pdf data to re-render the pdf with new form values.
    appState.pdfData = {
      ...appState.pdfData,
      ...appState.formData
    };

    //proceed to next form section
    if (this.state.activeForm < 8) {
      this.setState({
        activeForm: this.state.activeForm + 1,
        progress: this.state.progress + 11
      });
    }
  };

  backBtnClick = () => {
    if (this.state.activeForm >= 1) {
      this.setState({
        activeForm: this.state.activeForm - 1,
        progress: this.state.progress - 11
      });
    }
  };

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
          {this.state.activeForm < 8 ? (
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

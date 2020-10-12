import React from "react";
import { Box, Button } from "@chakra-ui/core";
import FormCard from "components/formComponents/formCard.js";
import { view } from "@risingstack/react-easy-state";
import ExperienceForm from "components/formComponents/experienceForm.js";
import appState from "appState.js";

class CustomSectionsContainer extends React.Component {
  constructor(props) {
    super();
    this.setActive = this.setActive.bind(this);
    this.saveInfo = this.saveInfo.bind(this);
    this.delete = this.delete.bind(this);
    this.add = this.add.bind(this);
    this.state = {
      activeJobIndex: 0,
      formOpen: false
    };
  }

  setActive(index) {
    //open new form if the click index is different instead of just closing the one already active.
    //save any new info
    if (this.state.formOpen && index !== this.state.activeIndex) {
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
    this.saveInfo();
  }

  saveInfo() {
    appState.pdfData = {
      ...appState.pdfData,
      ...appState.formData
    };
  }

  delete(e, index) {
    e.stopPropagation();
    appState.pdfData.workExperience.splice(index, 1);
  }

  add() {
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
        <p className="quillFormLabel">Custom Sections</p>
        {appState.pdfData.customSections.map((Obj, index) => (
          <React.Fragment key={"FormCard " + index}>
            <FormCard
            key={"FormCard " + obj.jobTitle}
              setActive={this.setActive}
              delete={this.delete}
              index={index}
              title={obj.title}
              place={obj.name}
            ></FormCard>
            {this.state.activeJobIndex === index && this.state.formOpen ? (
              <ExperienceForm
                formData={
                  appState.pdfData.customSections[this.state.activeJobIndex]
                }
                index={this.state.activeJobIndex}
              ></ExperienceForm>
            ) : null}
          </React.Fragment>
        ))}
        <Button onClick={this.add} mt="20px">
          Add Job
        </Button>
      </Box>
    );
  }
}

export default view(CustomSectionsContainer);

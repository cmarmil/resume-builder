import React from "react";
import { Box, Button } from "@chakra-ui/core";
import { view } from "@risingstack/react-easy-state";
import { FormCard, CustomSectionForm } from "components/formComponents/formImports.js";
import appState from "appState.js";

class CustomSectionsContainer extends React.Component {
  constructor(props) {
    super();
    this.setActive = this.setActive.bind(this);
    this.saveInfo = this.saveInfo.bind(this);
    this.delete = this.delete.bind(this);
    this.add = this.add.bind(this);
    this.state = {
      activeIndex: 0,
      formOpen: false
    };
  }

  setActive(index) {
    //open new form if the click index is different instead of just closing the one already active.
    //save any new info
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
    appState.pdfData.customSections.splice(index, 1);
  }

  add() {
    let newSection = {
      sectionTitle: 'Custom Section Title',
      content: ['Custom Section Content']
    };
    appState.pdfData.customSections.push(newSection);
    this.setState({
      activeIndex: appState.pdfData.workExperience.length - 1,
      formOpen: true
    });
  }

  render() {
    return (
      <Box p={"20px"}>
        {appState.pdfData.customSections.map((obj, index) => (
          <React.Fragment key={"FormCard " + index}>
            <FormCard
              key={"FormCard " + obj.sectionTitle}
              setActive={this.setActive}
              delete={this.delete}
              index={index}
              cardTitle={obj.sectionTitle}
            ></FormCard>
            {this.state.activeIndex === index && this.state.formOpen ? (
              <CustomSectionForm
                formData={
                  appState.pdfData.customSections[this.state.activeIndex]
                }
                index={this.state.activeIndex}
              ></CustomSectionForm>
            ) : null}
          </React.Fragment>
        ))}
        <Button onClick={this.add} mt="20px">
          Add Custom Section
        </Button>
      </Box>
    );
  }
}

export default view(CustomSectionsContainer);

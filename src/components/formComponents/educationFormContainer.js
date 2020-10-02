import React from "react";
import { Box, Button } from "@chakra-ui/core";
import FormCard from "components/formComponents/formCard.js";
import EducationForm from "components/formComponents/educationForm.js";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import commonFunctions from "commonFunctions.js";

class EducationFormContainer extends React.Component {
  constructor(props) {
    super();
    this.formRef = React.createRef();
    this.setActive = this.setActive.bind(this);
    this.saveEntry = this.saveEntry.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.state = {
      activeIndex: 0,
      formOpen: false
    };
  }

  setActive(index) {
    this.saveEntry(this.state.activeIndex);
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

  saveEntry(index) {
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
              newData.degree = form.elements[0].value;
              break;
            case 1:
              newData.areaOfStudy = form.elements[1].value;
              break;
            case 2:
              newData.dates = form.elements[2].value;
              break;
            case 3:
              newData.schoolName = form.elements[3].value;
          }
        }
      }
      appState.pdfData.education[index] = {
        ...appState.pdfData.education[index],
        ...newData
      };
    }
  }

  deleteEntry(e, index) {
    e.stopPropagation();
    appState.pdfData.education.splice(index, 1);
  }

  addEducation() {
    let newEDU = {
      degree: "Degree Level",
      areaOfStudh: "",
      schoolName: "Your University",
      dates: "",
      description: []
    };
    appState.pdfData.education.push(newEDU);
    this.setState({
      activeIndex: appState.pdfData.education.length - 1,
      formOpen: true
    });
  }

  render() {
    return (
      <Box p={"20px"} backgroundColor="white" className="formContainer">
        <p className="quillFormLabel">Education</p>
        {appState.pdfData.education.map((obj, index) => (
          <React.Fragment key={"FormCard " + index.toString()}>
            <FormCard
              setActive={this.setActive}
              delete={this.deleteEntry}
              index={index}
              activeIndex={this.state.activeImdex}
              title={obj.degree}
              place={obj.schoolName}
            ></FormCard>
            {this.state.activeIndex === index && this.state.formOpen ? (
              <EducationForm
                ref={this.formRef}
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

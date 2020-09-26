import React from "react";
import PersonalForm from "components/formComponents/personalForm";
import { Button, Progress, Box } from "@chakra-ui/core";
import { view } from "@risingstack/react-easy-state";
import DownloadButton from "components/downloadButton.js";
import appState from "appState";


class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.renderActiveForm = this.renderActiveForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      activeForm: 0
    };
    this.ref = React.createRef();
  }

  renderActiveForm() {
    if (this.state.activeForm === 0) {
      return <PersonalForm ref={this.ref}></PersonalForm>
    }
  }

  handleSubmit() {
    let form = this.ref.current.formRef.current;
    let formElements = form.elements;
    let newData = {};
    if (this.state.activeForm === 0) {
      for (let i = 0; i < formElements.length; i++) {
        let element = formElements[i];
        if (element.value) {
          switch(i) {
            case 0: 
            newData.fName = form.elements[0].value
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
            newData.email = form.elements[7].value;
            break;
          }
        }
      }
      appState.pdfData = {
        ...appState.pdfData, 
        ...newData
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Progress color="#80CBC4" size="lg" value={20} />
        {this.renderActiveForm()}
        <Box mb={"100px"} className="nextPrevButtons">
          <Button>Back</Button>
          <Button onClick={this.handleSubmit} background="#80CBC4">Next</Button>
          <DownloadButton/>
        </Box>
      </React.Fragment>
    );
  }
}

export default view(FormContainer);

import React from "react";
import { Box, Button } from "@chakra-ui/core";
import CertsCard from "components/formComponents/certsCard.js";
import CertsForm from "components/formComponents/certsForm.js";
import { view } from "@risingstack/react-easy-state";
import appState from "appState.js";

class CertsFormContainer extends React.Component {
  constructor() {
    super();
    this.formRef = React.createRef();
    this.addEntry = this.addEntry.bind(this);
    this.setActive = this.setActive.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.saveEntry = this.saveEntry.bind(this);
    this.state = {
      activeIndex: 0,
      formOpen: false
    };
  }

  setActive(index) {
    this.saveEntry();
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

  saveEntry() {
    appState.pdfData = {
      ...appState.pdfData,
      ...appState.formData
    };
  }

  deleteEntry(e, index) {
    e.stopPropagation();
    appState.pdfData.certsAndLiscences.splice(index, 1);
  }

  addEntry() {
    let newCert = {
      name: "Certification",
      date: ""
    };
    appState.pdfData.certsAndLiscences.push(newCert);
    this.setState({
      activeIndex: appState.pdfData.certsAndLiscences.length - 1,
      formOpen: true
    });
  }

  render() {
    return (
      <Box p={"20px"}>
        <p className="quillFormLabel">Certifications and Licenses</p>
        {appState.pdfData.certsAndLiscences.map((obj, index) => (
          <React.Fragment key={"certCard" + index}>
            <CertsCard
              setActive={this.setActive}
              delete={this.deleteEntry}
              name={obj.name}
              date={obj.date}
              index={index}
            ></CertsCard>
            {this.state.activeIndex === index && this.state.formOpen ? (
              <CertsForm
                index={this.state.activeIndex}
                formData={
                  appState.pdfData.certsAndLiscences[this.state.activeIndex]
                }
              ></CertsForm>
            ) : null}
          </React.Fragment>
        ))}
        <Button onClick={this.addEntry} mt="20px">
          Add Certification or License
        </Button>
      </Box>
    );
  }
}

export default view(CertsFormContainer);

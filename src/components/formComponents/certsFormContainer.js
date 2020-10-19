import React from "react";
import { Box, Button } from "@chakra-ui/core";
import { FormCard, CertsForm } from "components/formComponents/formImports.js";
import { view } from "@risingstack/react-easy-state";
import appState from "appState.js";

class CertsFormContainer extends React.Component {
  constructor() {
    super();
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
    appState.pdfData.certsAndLicenses.splice(index, 1);
  }

  addEntry() {
    let newCert = {
      name: "Certification",
      date: ""
    };
    appState.pdfData.certsAndLicenses.push(newCert);
    this.setState({
      activeIndex: appState.pdfData.certsAndLicenses.length - 1,
      formOpen: true
    });
  }

  render() {
    return (
      <Box p={"20px"}>
        {appState.pdfData.certsAndLicenses.map((obj, index) => (
          <React.Fragment key={"certCard" + index}>
            <FormCard
              setActive={this.setActive}
              delete={this.deleteEntry}
              cardTitle={`${obj.name} ${obj.date}`}
              index={index}
            ></FormCard>
            {this.state.activeIndex === index && this.state.formOpen ? (
              <CertsForm
                index={this.state.activeIndex}
                formData={
                  appState.pdfData.certsAndLicenses[this.state.activeIndex]
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

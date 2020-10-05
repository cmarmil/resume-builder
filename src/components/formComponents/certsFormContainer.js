import React from "react";
import { Box, Button} from "@chakra-ui/core";
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
              newData.name = form.elements[0].value;
              break;
            case 1:
              newData.date = form.elements[1].value;
              break;
          }
        }
      }
      appState.pdfData.certsAndLiscences[index] = {
        ...appState.pdfData.certsAndLiscences[index],
        ...newData
      };
    }
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
                ref={this.formRef}
                formData={
                  appState.pdfData.certsAndLiscences[this.state.activeIndex]
                }
              ></CertsForm>
            ) : null}
          </React.Fragment>
        ))}
        <Button onClick={this.addEntry} mt="20px">Add Certification or License</Button>
      </Box>
    );
  }
}

export default view(CertsFormContainer);

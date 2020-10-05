import React from "react";
import { Box } from "@chakra-ui/core";
import StyledTextArea from "./styledTextArea.js";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";

class SummaryForm extends React.Component {
  constructor(props) {
    super();
    this.formRef = React.createRef();
  }
  render() {
    return (
      <Box p={"20px"}>
        <form ref={this.formRef} id="summary-info-form" className="formBox">
          <Box mb={"20px"} d={"flex"}>
            <StyledTextArea
              id={"summary"}
              label={"Summary"}
              placeholder={appState.pdfData.summary}
              value={appState.pdfData.summary}
            ></StyledTextArea>
          </Box>
        </form>
      </Box>
    );
  }
}

export default view(SummaryForm);

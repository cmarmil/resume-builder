import React from "react";
import { view } from "@risingstack/react-easy-state";
import TwoColumn from "components/templates/twoColumn/templateOutput.js";
import OneColumn from "components/templates/oneColumn/templateOutput.js";
import appState from "appState.js";

const templateMap = {
  oneColumn: <OneColumn></OneColumn>,
  twoColumn: <TwoColumn></TwoColumn>
};

function PDFOutput() {
  return (
    <React.Fragment>{templateMap[appState.activeTemplate]}</React.Fragment>
  );
}

export default view(PDFOutput);

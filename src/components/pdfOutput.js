import React from "react";
import { view } from "@risingstack/react-easy-state";
import { Document } from "@react-pdf/renderer";
import TwoColumn from "components/templates/twoColumn/templateOutput.js";
import OneColumn from "components/templates/oneColumn/templateOutput.js";
import appState from "appState.js";

const templateMap = {
  oneColumn: <OneColumn></OneColumn>,
  twoColumn: <TwoColumn></TwoColumn>
};

function PDFOutput() {
  return (
    <Document>{templateMap[appState.activeTemplate]}</Document>
  );
}

export default view(PDFOutput);

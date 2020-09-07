import React from "react";
import { view } from "@risingstack/react-easy-state";
import BasicTemplate from 'components/templates/basic/templateOutput.js';
import ModernSimpleTemplate from 'components/templates/modernSimple/templateOutput.js';
import appState from 'appState.js'

const templateMap = {
    basic: <BasicTemplate></BasicTemplate>,
    modernSimple: <ModernSimpleTemplate></ModernSimpleTemplate>
}

function PDFOutput() {
  return (
    <React.Fragment>
        {templateMap[appState.activeTemplate]}
    </React.Fragment>
  );
}

export default view(PDFOutput);

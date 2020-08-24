import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { view } from '@risingstack/react-easy-state';
import appState from '../appState.js'; 

class PDFOutput extends React.Component() {
  render() {
    return (
      <React.Fragment>
        {this.state.blob ? (
          <Document file={this.state.blob}>
            <Page pageNumber={1} />
          </Document>
        ) : null}
      </React.Fragment>
    );
  }
}

export default view(PDFOutput);

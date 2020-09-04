import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "../appState.js";
import UnorderedListItem from "./unorderListItem.js";

import Summary from "./pdfCompoments/summary.js";
import Skills from "./pdfCompoments/skills.js";
import Header from "./pdfCompoments/header.js";
import WorkExperience from "./pdfCompoments/workExperience.js";
import ContactInfoIcons from "./pdfCompoments/contactInfoIcons.js";

function PDFOutput() {
  return (
    <Document>
      <Page size="A4" style={appState.template.page} wrap={false}>
        <View style={appState.template.headerSection}>
          <Header />
        </View>
        <View style={appState.template.mainSections}>
          <ContactInfoIcons />
          <Summary />
          <Skills />
          <View style={appState.template.section}>
            <WorkExperience></WorkExperience>
          </View>
          <Text style={appState.template.sectionHeader}> Other Experience</Text>
          <UnorderedListItem>
            Illustrator and Graphic Designer
          </UnorderedListItem>
          <UnorderedListItem>Customer Service (various)</UnorderedListItem>
        </View>
      </Page>
    </Document>
  );
}

export default view(PDFOutput);

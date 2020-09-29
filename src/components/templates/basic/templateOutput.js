import React from "react";
import { Page, View, Document } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import styleSheet from "components/templates/basic/styleSheet.js";
import Header from "components/templates/basic/pdfComponents/header.js";
import ContactInfo from "components/templates/basic/pdfComponents/contactInfo.js";
import Skills from "components/templates/basic/pdfComponents/skills.js";
import Summary from "components/templates/basic/pdfComponents/summary.js";
import WorkExperience from "components/templates/basic/pdfComponents/workExperience.js";
import Education from "components/templates/basic/pdfComponents/education.js";
import Certs from "components/templates/basic/pdfComponents/certs.js";

function templateOutput() {
  return (
    <Document>
      <Page size="A4" style={styleSheet.page} wrap={false}>
        <View style={styleSheet.colContainer}>
          <View style={styleSheet.sideCol}>
            <Skills />
            <Education />
            <Certs />
          </View>
          <View style={styleSheet.mainCol}>
            <Header />
            <ContactInfo />
            <Summary />
            <WorkExperience />
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default view(templateOutput);

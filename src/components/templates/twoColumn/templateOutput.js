import React from "react";
import { Page, View, Document } from "@react-pdf/renderer";
import appState from "appState.js";
import { view } from "@risingstack/react-easy-state";
import styleSheet from "components/templates/twoColumn/styleSheet.js";
import Header from "components/templates/twoColumn/pdfComponents/header.js";
import ContactInfo from "components/templates/twoColumn/pdfComponents/contactInfo.js";
import Skills from "components/templates/twoColumn/pdfComponents/skills.js";
import Summary from "components/templates/twoColumn/pdfComponents/summary.js";
import WorkExperience from "components/templates/twoColumn/pdfComponents/workExperience.js";
import Education from "components/templates/twoColumn/pdfComponents/education.js";
import Certs from "components/templates/twoColumn/pdfComponents/certs.js";
import CustomSections from "components/genericPdfComponents/customSections.js";

function templateOutput() {
  return (
    <Document>
      <Page
        size="A4"
        style={{fontFamily: appState.pdfFont, fontSize: 13, paddingRight: 15}}
      >
        <View style={styleSheet.colContainer}>
          <View
            style={[
              styleSheet.sideCol,
              { backgroundColor: appState.templateColor }
            ]}
          >
            <Skills />
            <Education />
            <Certs />
            <CustomSections styleSheet={styleSheet}></CustomSections>
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

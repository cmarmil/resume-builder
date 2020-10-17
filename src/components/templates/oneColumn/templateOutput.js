import React from "react";
import { Page, View, Document } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState.js";

import Summary from "components/templates/oneColumn/pdfCompoments/summary.js";
import Skills from "components/templates/oneColumn/pdfCompoments/skills.js";
import Header from "components/templates/oneColumn/pdfCompoments/header.js";
import Education from "components/templates/oneColumn/pdfCompoments/education.js";
import WorkExperience from "components/templates/oneColumn/pdfCompoments/workExperience.js";
import ContactInfoIcons from "components/templates/oneColumn/pdfCompoments/contactInfoIcons.js";
import Certs from "components/templates/oneColumn/pdfCompoments/certs.js";
import CustomSections from 'components/genericPdfComponents/customSections.js';
import styleSheet from "components/templates/oneColumn/styleSheet.js";


function TemplateOutput() {
  return (
    <Document>
      <Page
        size="A4"
        style={{
          fontFamily: appState.pdfFont
        }}
        wrap
      >
        <View style={{ backgroundColor: appState.templateColor }}>
          <Header styleSheet={styleSheet} />
        </View>
        <View style={styleSheet.mainSections}>
          <ContactInfoIcons styleSheet={styleSheet} />
          <Summary styleSheet={styleSheet} />
          <Skills styleSheet={styleSheet} />
          <View style={styleSheet.section}>
            <WorkExperience styleSheet={styleSheet} />
          </View>
          <Education></Education>
          <Certs></Certs>
          <CustomSections style={styleSheet}></CustomSections>
        </View>
      </Page>
    </Document>
  );
}

export default view(TemplateOutput);

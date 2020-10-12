import React, { useEffect } from "react";
import { Page, View, Document } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState.js";

import Summary from "components/templates/modernSimple/pdfCompoments/summary.js";
import Skills from "components/templates/modernSimple/pdfCompoments/skills.js";
import Header from "components/templates/modernSimple/pdfCompoments/header.js";
import Education from "components/templates/modernSimple/pdfCompoments/education.js";
import WorkExperience from "components/templates/modernSimple/pdfCompoments/workExperience.js";
import ContactInfoIcons from "components/templates/modernSimple/pdfCompoments/contactInfoIcons.js";
import styleSheet from "components/templates/modernSimple/styleSheet.js";

function TemplateOutput() {
  return (
    <Document>
      <Page
        size="A4"
        style={{
          fontFamily: appState.pdfFont
        }}
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
        </View>
      </Page>
    </Document>
  );
}

export default view(TemplateOutput);

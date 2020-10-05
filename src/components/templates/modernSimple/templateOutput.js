import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import UnorderedListItem from "components/genericPdfComponents/unorderListItem.js";

import Summary from "components/templates/modernSimple/pdfCompoments/summary.js";
import Skills from "components/templates/modernSimple/pdfCompoments/skills.js";
import Header from "components/templates/modernSimple/pdfCompoments/header.js";
import WorkExperience from "components/templates/modernSimple/pdfCompoments/workExperience.js";
import ContactInfoIcons from "components/templates/modernSimple/pdfCompoments/contactInfoIcons.js";
import styleSheet from 'components/templates/modernSimple/styleSheet.js';

function TemplateOutput() {
  return (
    <Document>
      <Page size="A4" style={styleSheet.page} wrap={false}>
        <View style={styleSheet.headerSection}>
          <Header styleSheet={styleSheet}/>
        </View>
        <View style={styleSheet.mainSections}>
          <ContactInfoIcons styleSheet={styleSheet}/>
          <Summary styleSheet={styleSheet}/>
          <Skills styleSheet={styleSheet}/>
          <View style={styleSheet.section}>
            <WorkExperience styleSheet={styleSheet}/>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default view(TemplateOutput);

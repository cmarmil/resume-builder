import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import UnorderedListItem from "components/genericPdfComponents/unorderListItem.js";

import Summary from "components/templates/basic/pdfCompoments/summary.js";
import Skills from "components/templates/basic/pdfCompoments/skills.js";
import Header from "components/templates/basic/pdfCompoments/header.js";
import WorkExperience from "components/templates/basic/pdfCompoments/workExperience.js";
import ContactInfoIcons from "components/templates/basic/pdfCompoments/contactInfoIcons.js";
import styleSheet from 'components/templates/basic/styleSheet.js';

function PDFOutput() {
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
          <Text style={styleSheet.sectionHeader}> Other Experience</Text>
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

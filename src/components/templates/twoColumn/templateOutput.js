import React from "react";
import { Page, View } from "@react-pdf/renderer";
import appState from "appState.js";
import { view } from "@risingstack/react-easy-state";
import styleSheet from "components/templates/twoColumn/styleSheet.js";
import {
  Summary,
  Skills,
  Header,
  Education,
  WorkExperience,
  ContactInfo,
  Certs
} from "./pdfComponents/imports.js";
import CustomSections from "components/genericPdfComponents/customSections.js";

function templateOutput() {
  return (
    <Page
      size="A4"
      style={{ fontFamily: appState.pdfFont, fontSize: 13, paddingRight: 15 }}
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
  );
}

export default view(templateOutput);

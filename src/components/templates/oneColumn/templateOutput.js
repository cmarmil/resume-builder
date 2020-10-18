import React from "react";
import { Page, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState.js";
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
import styleSheet from "components/templates/oneColumn/styleSheet.js";

function TemplateOutput() {
  return (
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
        <ContactInfo styleSheet={styleSheet} />
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
  );
}

export default view(TemplateOutput);

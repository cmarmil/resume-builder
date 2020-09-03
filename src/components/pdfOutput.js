import React from "react";
import { Page, Text, View, Document, Link } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "../appState.js";
import UnorderedListItem from "./unorderListItem.js";
import PhoneIcon from "../icons/phoneIcon.js";
import MailIcon from "../icons/mailIcon.js";
import WebpageIcon from "../icons/webpageIcon.js";
import LinkedInIcon from "../icons/linkedInIcon.js";
import Summary from "./pdfCompoments/summary.js";
import Skills from "./pdfCompoments/skills.js";
import WorkExperience from "./pdfCompoments/workExperience.js";

function PDFOutput() {
  return (
    <Document>
      <Page size="A4" style={appState.template.page} wrap={false}>
        <View style={appState.template.headerSection}>
          <View style={appState.template.headerPadding}>
            <View style={appState.template.nameInfo}>
              <Text style={appState.template.header}>
                {appState.pdfData.name}
              </Text>
              <Text style={appState.template.profession}>Web Developer</Text>
            </View>
          </View>
        </View>

        <View style={appState.template.mainSections}>
          <View style={appState.template.contactInfo}>
            <View style={appState.template.svgFlex}>
              <MailIcon
                style={appState.template.icon}
                fill={"#80CBC4"}
              ></MailIcon>
              <Text style={appState.template.contactText}>
                {appState.pdfData.email}
              </Text>
            </View>
            <View style={appState.template.svgFlex}>
              <PhoneIcon
                style={appState.template.icon}
                fill={"#80CBC4"}
              ></PhoneIcon>
              <Text style={appState.template.contactText}>
                {appState.pdfData.phoneNumber}
              </Text>
            </View>
            <View style={appState.template.svgFlex}>
              <LinkedInIcon
                style={appState.template.icon}
                fill={"#80CBC4"}
              ></LinkedInIcon>
              <Link
                //link src requires a leading space to parse correctly in react-pdf 2.0
                src={" " + appState.pdfData.linkedIn}
                style={appState.template.contactText}
              >
                {appState.pdfData.linkedIn}
              </Link>
            </View>
            <View style={appState.template.svgFlex}>
              <WebpageIcon
                style={appState.template.icon}
                fill={"#80CBC4"}
              ></WebpageIcon>
              <Link
                style={appState.template.contactText}
                src={" " + appState.pdfData.website}
              >
                {appState.pdfData.website}
              </Link>
            </View>
          </View>
          <Summary></Summary>
          <Skills></Skills>
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

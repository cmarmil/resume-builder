import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link
} from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "../appState.js";
import UnorderedListItem from "./unorderListItem.js";
import PhoneIcon from "../icons/phoneIcon.js";
import MailIcon from "../icons/mailIcon.js";
import WebpageIcon from "../icons/webpageIcon.js";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Montserrat",
    fontSize: 14
  },
  headerSection: {
    backgroundColor: "#80CBC4"
  },
  headerPadding: {
    padding: 20
  },
  mainSections: {
    padding: 25
  },
  section: {
    paddingBottom: 10,
    paddingTop: 10
  },
  nameInfo: {
    flexDirection: "column",
    width: "50%",
    fontFamily: "BebasNeue",
    fontSize: 50
  },
  contactInfo: {
    flexDirection: "column",
    textAlign: "left",
    marginBottom: 6,
    fontStyle: "bold"
  },
  profession: {
    fontSize: 30,
    marginBottom: 10
  },
  sectionHeader: {
    fontSize: 20,
    textDecoration: "underline",
    marginBottom: 5
  },
  svgFlex: {
    flexDirection: "row",
    textAlign: "left",
    paddingBottom: 5
  },
  icon: {
    marginRight: 7
  },
  companyDates: {
    textAlign: "right",
    width: "50%",
    fontStyle: "italic"
  },
  companyName: {
    width: "50%",
    fontStyle: "italic"
  },
  companyInfo: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5
  },
  contactText: {
    //this is a little anal but the svg alignment is just a hair off in the render.
    marginTop: 1
  },
  slash: {
    marginRight: 4,
    marginLeft: 4
  },
  jobTitle: {
    fontStyle: "bold"
  },
  skillCategory: {
    paddingBottom: 5
  },
  skillCategoryTitle: {
    fontStyle: "bold"
  }
});

function PDFOutput() {
  return (
    <Document>
      <Page size="A4" debug style={styles.page} wrap={false}>
        <View style={styles.headerSection}>
          <View style={styles.headerPadding}>
            <View style={styles.nameInfo}>
              <Text style={styles.header}>Cailey Miller</Text>
              <Text style={styles.profession}>Web Developer</Text>
            </View>
          </View>
        </View>

        <View style={styles.mainSections}>
          <View style={styles.contactInfo}>
            <View style={styles.svgFlex}>
              <MailIcon style={styles.icon} fill={"#80CBC4"}></MailIcon>
              <Text style={styles.contactText}>caileymillerdev@gmail.com</Text>
            </View>
            <View style={styles.svgFlex}>
              <PhoneIcon style={styles.icon} fill={"#80CBC4"}></PhoneIcon>
              <Text style={styles.contactText}>(864)-553-5912</Text>
            </View>
            <View style={styles.svgFlex}>
              <WebpageIcon style={styles.icon} fill={"#80CBC4"}></WebpageIcon>
              <Link style={styles.contactText} src=" https://www.cailey.dev/">
                https://www.cailey.dev/
              </Link>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Summary</Text>
            <Text>
              Creative Web Developer with proven experience developing and
              maintaining complex web applications. I learn quickly, love a
              challenge, and am open to using new technologies and languages.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Skills</Text>

            <Text style={styles.skillCategoryTitle}>
              Languages and Architecture:
            </Text>
            <Text style={styles.skillCategory}>
              HTML5, CSS3, SASS, Javascript, Node.js, jQuery, React, AJAX/AJAJ,
              RESTful APIs, MVC, WCAG and Accessibility, Ruby.
            </Text>
            <Text style={styles.skillCategoryTitle}> Tools and Process:</Text>
            <Text style={styles.skillCategory}>
              Git, SVN, Charles Web Proxy, Webpack, Jira, Agile, Kanban.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Work Experience</Text>
            <Text style={styles.jobTitle}>Front End Web Developer</Text>
            <View style={styles.companyInfo}>
              <Text style={styles.companyName}>BlueToad Inc.</Text>
              <Text style={styles.companyDates}>August 2019 - July 2020</Text>
            </View>
            <UnorderedListItem>
              Developed new features from mockups and working with designers to
              find ideal solutions to technical design problems.
            </UnorderedListItem>
            <UnorderedListItem>
              Refactored existing code into modern reusable components using
              React. Engineered WCAG compliant features to ensure a fully
              accessible experience for all users.
            </UnorderedListItem>
            <UnorderedListItem>
              Conducted cross browser testing and debugging to provide a
              harmonious user experience across browsers, operating systems, and
              devices.
            </UnorderedListItem>
          </View>
          <Text style={styles.sectionHeader}>Other Experience</Text>
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

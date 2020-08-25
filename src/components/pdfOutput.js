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
    padding: 25
  },
  mainSections: {
    padding: 25
  },
  section: {
    marginBottom: 5
  },
  nameInfo: {
    flexDirection: "column",
    width: "50%"
  },
  contactInfo: {
    flexDirection: "column",
    textAlign: "left",
    marginBottom: 6
  },
  header: {
    fontSize: 34,
    fontStyle: "bold"
  },
  profession: {
    fontSize: 20,
    marginBottom: 10
  },
  profileSection: {
    marginBottom: 10
  },
  skillsSection: {
    marginBottom: 10
  },
  sectionHeader: {
    fontSize: 20,
    textDecoration: "underline",
    marginBottom: 5
  },
  svgFlex: {
    flexDirection: "row",
    textAlign: "left"
  },
  icon: {
    marginRight: 5
  },
  bulletedText: {
    marginBottom: 5,
    textIndent: -5,
    paddingLeft: 5
  },
  companyDates: {
    marginLeft: 5,
    width: "50%"
  },
  companyInfo: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5
  },
  slash: {
    marginRight: 4,
    marginLeft: 4
  },
  jobTitle: {
    fontStyle: "bold"
  }
});

function PDFOutput() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
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
              <Text>caileymillerdev@gmail.com</Text>
            </View>
            <View style={styles.svgFlex}>
              <PhoneIcon style={styles.icon} fill={"#80CBC4"}></PhoneIcon>
              <Text>(864)-553-5912</Text>
            </View>
            <View style={styles.svgFlex}>
              <WebpageIcon style={styles.icon} fill={"#80CBC4"}></WebpageIcon>
              <Link src=" https://www.cailey.dev/">
                https://www.cailey.dev/
              </Link>
            </View>
          </View>

          <View style={styles.profileSection}>
            <Text style={styles.sectionHeader}>Summary</Text>
            <Text>
              Creative Web Developer with proven experience developing and
              maintaining complex web applications. I learn quickly, love a
              challenge, and am open to using new technologies and languages.
            </Text>
          </View>
          <View style={styles.skillsSection}>
            <Text style={styles.sectionHeader}>Skills</Text>
            <Text>
              HTML5, CSS3, SASS, Javascript, Node.js, jQuery, React, AJAX/AJAJ,
              RESTful APIs, MVC, WCAG, Ruby, Git, SVN, Charles Web Proxy,
              Webpack, Jira, Agile, Kanban.
            </Text>
          </View>
          <View style={styles.workExperience}>
            <Text style={styles.sectionHeader}>Work Experience</Text>
            <View style={styles.companyInfo}>
              <Text style={styles.jobTitle}>Front End Web Developer</Text>
              <Text style={styles.slash}>/</Text>
              <Text style={styles.companyName}>BlueToad Inc.</Text>
            </View>
            <Text style={styles.bulletedText}>
              &#8226;Developed new features from mockups and working with
              designers to find ideal solutions to technical design problems.
            </Text>
            <Text style={styles.bulletedText}>
              &#8226;Refactored existing code into modern reusable components
              using React. Engineered WCAG compliant features to ensure a fully
              accessible experience for all users.
            </Text>
            <Text style={styles.bulletedText}>
              &#8226;Conducted cross browser testing and debugging to provide a
              harmonious user experience across browsers, operating systems, and
              devices.
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default view(PDFOutput);

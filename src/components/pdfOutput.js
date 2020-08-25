import React from "react";
import { Page, Text, View, Document, StyleSheet, Link } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "../appState.js";
import Barlow from '../fonts/Barlow-Regular.ttf'
import { Font } from "@react-pdf/renderer";
import PhoneIcon from "../icons/phoneIcon.js";
import MailIcon from "../icons/mailIcon.js";
import WebpageIcon from "../icons/webpageIcon.js";

Font.register({
  family: "Barlow",
  src: Barlow
});
Font.registerHyphenationCallback(word => [word]);

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: "Barlow"
  },
  section: {
    width: "50%"
  },
  flexSection: {
    flexDirection: "row"
  },
  nameInfo: {
    flexDirection: "column",
    width: "50%"
  },
  contactInfo: {
    flexDirection: "column",
    width: "50%",
    textAlign: "left"
  },
  header: {
    fontSize: 34
  },
  jobTitle: {
    fontSize: 20,
    marginBottom: 20
  },
  profileSection: {},
  about: {
    fontSize: 20,
    textDecoration: "underline"
  },
  svgFlex: {
    flexDirection: "row",
    textAlign: "left"
  },
  email: {
      marginTop: -3
  }, 
  icon: {
      marginRight: 5
  }
});

function PDFOutput() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.flexSection}>
          <View style={styles.nameInfo}>
            <Text style={styles.header}>Cailey Miller</Text>
            <Text style={styles.jobTitle}>Web Developer</Text>
          </View>
          <View style={styles.contactInfo}>
            <View style={styles.svgFlex}>
            <MailIcon style={styles.icon} fill={'teal'}></MailIcon>
              <Text style={styles.email}>caileymillerdev@gmail.com</Text>
            </View>
            <View style={styles.svgFlex}>
              <PhoneIcon style={styles.icon} fill={'teal'}></PhoneIcon>
              <Text>(864)-553-5912</Text>
            </View>
            <View style={styles.svgFlex}>
              <WebpageIcon style={styles.icon} fill={'teal'}></WebpageIcon>
              <Link src="https://www.cailey.dev/">https://www.cailey.dev/</Link>
            </View>
          </View>
        </View>
        <View style={styles.profileSection}>
          <Text style={styles.about}>About</Text>
          <Text>
            Creative Web Developer with proven experience developing and
            maintaining complex web applications. I learn quickly, love a
            challenge, and am open to using new technologies and languages.
          </Text>
        </View>
      </Page>
    </Document>
  );
}

export default view(PDFOutput);

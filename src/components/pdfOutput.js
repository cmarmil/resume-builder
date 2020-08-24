import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "../appState.js";

import Barlow_Condensed from "../fonts/Barlow_Condensed/BarlowCondensed-Regular.ttf";

import { Font } from "@react-pdf/renderer";

Font.register({
  family: "Barlow_Condensed",
  src: Barlow_Condensed
});
Font.registerHyphenationCallback(word => [word]);

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: "Barlow_Condensed"
  },
  section: {
    width: "50%",
    fontFamily: "Barlow_Condensed"
  },
  flexSection: {
    flexDirection: "row"
  },
  nameInfo: {
    flexDirection: "column",
    width: "50%",
  },
  contactInfo: {
    flexDirection: "column",
    width: "50%",
    textAlign: 'center'
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
      textDecoration: 'underline'
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
            <Text>caileymillerdev@gmail.com</Text>
            <Text>(864)-553-5912</Text>
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

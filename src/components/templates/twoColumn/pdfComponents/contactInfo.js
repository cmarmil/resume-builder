import React from "react";
import { Text, View, Link } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import styleSheet from "components/templates/twoColumn/styleSheet.js";

function ContactInfo() {
  return (
    <View style={styleSheet.contactInfo}>
      <Text>{appState.pdfData.email}</Text>
      <Text>{appState.pdfData.phoneNumber}</Text>
      <Link style={styleSheet.link} src={appState.pdfData.linkedIn}>
        {appState.pdfData.linkedIn}
      </Link>
      <Link style={styleSheet.link} src={appState.pdfData.website}>
        {appState.pdfData.website}
      </Link>
      <Text>{`${appState.pdfData.city}, ${appState.pdfData.state}`}</Text>
    </View>
  );
}

export default view(ContactInfo);

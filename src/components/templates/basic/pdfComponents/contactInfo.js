import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import styleSheet from "components/templates/basic/styleSheet.js";

function ContactInfo() {
  return (
    <View style={styleSheet.contactInfo}>
      <Text>{appState.pdfData.email}</Text>
      <Text>{appState.pdfData.phoneNumber}</Text>
      <Text>{appState.pdfData.website}</Text>
      <Text>{`${appState.pdfData.city}, ${appState.pdfData.state}`}</Text>
    </View>
  );
}

export default view(ContactInfo);

import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "../../appState.js";

function Summary() {
  return (
    <View style={appState.template.section}>
      <Text style={appState.template.sectionHeader}>Summary</Text>
      <Text>{appState.pdfData.summary}</Text>
    </View>
  );
}

export default view(Summary);

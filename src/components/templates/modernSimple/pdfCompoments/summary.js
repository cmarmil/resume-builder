import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import styleSheet from "components/templates/modernSimple/styleSheet.js";

function Summary() {
  if (appState.pdfData.summary) {
    return (
      <View style={styleSheet.section}>
        <Text style={styleSheet.sectionHeader}>Summary</Text>
        <Text>{appState.pdfData.summary}</Text>
      </View>
    );
  }
}

export default view(Summary);

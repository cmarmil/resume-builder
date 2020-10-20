import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import styleSheet from "components/templates/oneColumn/styleSheet.js";

function Summary() {
  if (appState.pdfData.summary) {
    return (
      <View style={styleSheet.section}>
        <Text style={[styleSheet.sectionHeader, {fontSize: appState.fontSizes.oneColumn.sectionHeader}]}>Summary</Text>
        <Text>{appState.pdfData.summary}</Text>
      </View>
    );
  }
}

export default view(Summary);

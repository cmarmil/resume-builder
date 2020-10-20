import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import styleSheet from 'components/templates/twoColumn/styleSheet.js';

function Summary() {
  return (
    <View style={styleSheet.section}>
      <Text style={[styleSheet.mainSectionHeader, {backgroundColor: appState.templateColor, fontSize: appState.fontSizes.twoColumn.sectionHeader}]}>Summary</Text>
      <Text>{appState.pdfData.summary}</Text>
    </View>
  );
}

export default view(Summary);
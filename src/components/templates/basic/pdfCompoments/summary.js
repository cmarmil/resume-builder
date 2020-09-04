import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import styleSheet from 'components/templates/basic/styleSheet.js';

function Summary() {
  return (
    <View style={styleSheet.section}>
      <Text style={styleSheet.sectionHeader}>Summary</Text>
      <Text>{appState.pdfData.summary}</Text>
    </View>
  );
}

export default view(Summary);

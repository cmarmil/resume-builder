import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import styleSheet from "components/templates/modernSimple/styleSheet.js";

function Skills() {
  return (
    <View style={styleSheet.section}>
      <Text style={[styleSheet.sectionHeader, { fontSize: appState.templateFontSizes.sectionHeader }]}>Skills</Text>
      <Text>{appState.pdfData.skills.join(", ")}</Text>
    </View>
  );
}

export default view(Skills);

import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import styleSheet from "components/templates/oneColumn/styleSheet.js";

function Skills() {
  if (appState.pdfData.skills.length) {
    return (
      <View style={styleSheet.section}>
        <Text style={[styleSheet.sectionHeader, {fontSize: appState.fontSizes.oneColumn.sectionHeader}]}>Skills</Text>
        <Text>{appState.pdfData.skills.join(", ")}</Text>
      </View>
    );
  }
}

export default view(Skills);

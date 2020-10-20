import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import styleSheet from "components/templates/twoColumn/styleSheet.js";

function Education() {
  if (appState.pdfData.education.length) {
    return (
      <View style={styleSheet.sideContainer}>
        <Text style={[styleSheet.sectionHeader, {fontSize: appState.fontSizes.twoColumn.sectionHeader}]}>Education</Text>
        {appState.pdfData.education.map(eduObj => (
          <View key={eduObj.schoolName} style={styleSheet.sectionEntry}>
            <Text key={eduObj.degree} style={styleSheet.boldFont}>
              {eduObj.degree} :
            </Text>
            <Text key={eduObj.areaOfStudy} style={styleSheet.boldFont}>
              {eduObj.areaOfStudy}
            </Text>
            <Text key={eduObj.schoolName} style={styleSheet.italicFont}>
              {eduObj.schoolName}
            </Text>
            <Text key={eduObj.dates} style={styleSheet.schoolDates}>
              {eduObj.dates}
            </Text>
          </View>
        ))}
      </View>
    );
  }
}

export default view(Education);

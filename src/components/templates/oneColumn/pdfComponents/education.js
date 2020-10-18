import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import styleSheet from "components/templates/oneColumn/styleSheet.js";

function Education() {
  if (appState.pdfData.education.length) {
    return (
      <View style={styleSheet.sideContainer} wrap={false}>
        <Text style={styleSheet.sectionHeader}>Education</Text>
        <View>
          {appState.pdfData.education.map(eduObj => (
            <React.Fragment key={eduObj.schoolName}>
              <Text key={eduObj.degree} style={styleSheet.educationTitle}>
                {`${eduObj.degree} in ${eduObj.areaOfStudy}`}
              </Text>
              <Text key={eduObj.schoolName}>{eduObj.schoolName}</Text>
              <Text key={eduObj.dates}>{eduObj.dates}</Text>
            </React.Fragment>
          ))}
        </View>
      </View>
    );
  }
}

export default view(Education);

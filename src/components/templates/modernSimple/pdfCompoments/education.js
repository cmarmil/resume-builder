import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import styleSheet from "components/templates/modernSimple/styleSheet.js";

function Education() {
  return (
    <View style={styleSheet.sideContainer}>
      <Text style={styleSheet.sectionHeader}>Education</Text>
      <View>
        {appState.pdfData.education.map(eduObj => (
          <React.Fragment key={eduObj.schoolName + "fragmentKey"}>
            <Text key={eduObj.degree + "degreeKey"} style={styleSheet.educationTitle}>
              {`${eduObj.degree} in ${eduObj.areaOfStudy}`}
            </Text>
            <Text
              key={eduObj.schoolName + "schoolKey"}
            >
              {eduObj.schoolName}
            </Text>
            <Text key={eduObj.dates + "dateKey"}>
              {eduObj.dates}
            </Text>
          </React.Fragment>
        ))}
      </View>
    </View>
  );
}

export default view(Education);
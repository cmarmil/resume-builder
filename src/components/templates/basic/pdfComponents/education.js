import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import styleSheet from "components/templates/basic/styleSheet.js";

function Education() {
  return (
    <View style={styleSheet.sideContainer}>
      <Text style={styleSheet.sectionHeader}>Education</Text>
      <View>
        {appState.pdfData.education.map((eduObj, index) => (
          <React.Fragment key={eduObj.schoolName + 'fragmentKey'}>
            <Text key={eduObj.degree + 'degreeKey'} style={styleSheet.boldFont}>
              {eduObj.degree} : 
            </Text>
            <Text
              key={eduObj.areaOfStudy + 'studyKey'}
              style={styleSheet.boldFont}
            >
              {eduObj.areaOfStudy}
            </Text>
            <Text key={eduObj.schoolName + 'schoolKey'} style={styleSheet.italicFont}>
              {eduObj.schoolName}
            </Text>
            <Text key={eduObj.dates + 'dateKey'} style={styleSheet.schoolDates}>
              {eduObj.dates}
            </Text>
          </React.Fragment>
        ))}
      </View>
    </View>
  );
}

export default view(Education);

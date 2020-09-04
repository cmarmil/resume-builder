import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import styleSheet from 'components/templates/basic/styleSheet.js';

function Skills() {
  return (
    <View style={styleSheet.section}>
      <Text style={styleSheet.sectionHeader}>Skills</Text>
      {appState.pdfData.skills.map((skillObj, index) => (
        <React.Fragment key={index}>
          <Text key={skillObj.skillCategory + index} style={styleSheet.skillCategoryTitle}>
            {skillObj.skillCategory}
          </Text>
          <Text key={'skillArray' + skillObj.skillCategory + index} style={styleSheet.skillCategory}>{skillObj.skills}</Text>
        </React.Fragment>
      ))}
    </View>
  );
}

export default view(Skills);

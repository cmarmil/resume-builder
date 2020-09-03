import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "../../appState.js";

function Skills() {
  return (
    <View style={appState.template.section}>
      <Text style={appState.template.sectionHeader}>Skills</Text>
      {appState.pdfData.skills.map((skillObj, index) => (
        <React.Fragment key={index}>
          <Text key={skillObj.skillCategory + index} style={appState.template.skillCategoryTitle}>
            {skillObj.skillCategory}
          </Text>
          <Text key={'skillArray' + skillObj.skillCategory + index} style={appState.template.skillCategory}>{skillObj.skills}</Text>
        </React.Fragment>
      ))}
    </View>
  );
}

export default view(Skills);

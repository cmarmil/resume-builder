import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import styleSheet from "components/templates/basic/styleSheet.js";

function Skills() {
  return (
    <View style={styleSheet.skillsContainer}>
      <Text style={styleSheet.sectionHeader}>Skills</Text>
      <View>
      {appState.pdfData.skills.map((skillObj, index) => (
        <React.Fragment key={index}>
          <Text key={'skillArray' + skillObj.skillCategory + index} style={styleSheet.skillCategory}>{skillObj.skills}</Text>
        </React.Fragment> ))}
        </View>
    </View>
  );
}

export default view(Skills);

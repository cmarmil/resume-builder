import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import styleSheet from "components/templates/twoColumn/styleSheet.js";
import UnorderedListItem from "components/genericPdfComponents/unorderListItem.js";

function Skills() {
  return (
    <View style={styleSheet.sideContainer}>
      <Text style={[styleSheet.sectionHeader, {fontSize: appState.fontSizes.twoColumn.sectionHeader}]}>Skills</Text>
      <View>
      {appState.pdfData.skills.map((skill, index) => (
        <React.Fragment key={index}>
          <UnorderedListItem key={skill+ index} style={styleSheet.skill}>{skill}</UnorderedListItem>
        </React.Fragment> ))}
        </View>
    </View>
  );
}

export default view(Skills);

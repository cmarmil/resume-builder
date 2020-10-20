import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState.js";
import UnorderedListItem from "components/genericPdfComponents/unorderListItem.js";
import styleSheet from 'components/templates/twoColumn/styleSheet.js';

function renderBullets(description) {
  return description.map((bullet, index) => (
    <UnorderedListItem key={'expBullet' + index}>{bullet}</UnorderedListItem>
  ));
}

function WorkExperience() {
  return (
    <View style={styleSheet.section}>
      <Text style={[styleSheet.mainSectionHeader, {backgroundColor: appState.templateColor, fontSize: appState.fontSizes.twoColumn.sectionHeader}]}>Work Experience</Text>
      {appState.pdfData.workExperience.map((workExp, index) => (
        <View key={index} style={styleSheet.section}>
          <Text style={styleSheet.jobTitle}>{workExp.jobTitle}</Text>
          <View style={styleSheet.companyInfo}>
            <Text style={styleSheet.companyName}>
              {workExp.companyName}
            </Text>
            <Text style={styleSheet.companyDates}>{workExp.dates}</Text>
          </View>
          {renderBullets(workExp.description)}
        </View>
      ))}
    </View>
  );
}

export default view(WorkExperience);
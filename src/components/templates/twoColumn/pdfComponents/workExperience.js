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
    <View style={styleSheet.mainSection}>
      <Text style={[styleSheet.mainSectionHeader, {backgroundColor: appState.templateColor, fontSize: appState.fontSizes.twoColumn.sectionHeader}]}>Work Experience</Text>
      {appState.pdfData.workExperience.map((workExp, index) => (
        <React.Fragment key={index}>
          <Text style={styleSheet.jobTitle}>{workExp.jobTitle}</Text>
          <View style={styleSheet.companyInfo}>
            <Text style={styleSheet.companyName}>
              {workExp.companyName}
            </Text>
            <Text style={styleSheet.companyDates}>{workExp.dates}</Text>
          </View>
          {renderBullets(workExp.description)}
        </React.Fragment>
      ))}
    </View>
  );
}

export default view(WorkExperience);
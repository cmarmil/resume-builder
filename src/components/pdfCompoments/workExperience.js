import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "../../appState.js";
import UnorderedListItem from "../unorderListItem.js";

function renderBullets(description) {
  return description.map((bullet, index) => (
    <UnorderedListItem key={'expBullet' + index}>{bullet}</UnorderedListItem>
  ));
}
function WorkExperience() {
  return (
    <View style={appState.template.section}>
      <Text style={appState.template.sectionHeader}>Work Experience</Text>
      {appState.pdfData.workExperience.map((workExp, index) => (
        <React.Fragment key={index}>
          <Text style={appState.template.jobTitle}>{workExp.jobTitle}</Text>
          <View style={appState.template.companyInfo}>
            <Text style={appState.template.companyName}>
              {workExp.companyName}
            </Text>
            <Text style={appState.template.companyDates}>{workExp.dates}</Text>
          </View>
          {renderBullets(workExp.description)}
        </React.Fragment>
      ))}
    </View>
  );
}

export default view(WorkExperience);

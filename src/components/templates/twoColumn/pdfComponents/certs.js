import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import styleSheet from "components/templates/twoColumn/styleSheet.js";

function Certs() {
  if (appState.pdfData.certsAndLicenses.length) {
    return (
      <View style={styleSheet.sideContainer}>
        <Text style={[styleSheet.sectionHeader, {fontSize: appState.fontSizes.twoColumn.sectionHeader}]}>Certificates and Liscenses</Text>
        <View>
          {appState.pdfData.certsAndLicenses.map((certObj, index) => (
            <View key={certObj + index} style={styleSheet.sectionEntry}>
              <Text key={certObj.name + index} style={styleSheet.boldFont}>
                {certObj.name}
              </Text>
              <Text key={certObj.date + index} style={styleSheet.certDate}>
                {certObj.date}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default view(Certs);

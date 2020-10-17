import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import styleSheet from "components/templates/oneColumn/styleSheet.js";

function Certs() {
  if (appState.pdfData.certsAndLicenses.length) {
    return (
      <View style={styleSheet.section} wrap={false}>
        <Text style={styleSheet.sectionHeader}>
          Certifications and Licenses
        </Text>
        <View>
          {appState.pdfData.certsAndLicenses.map(obj => (
            <Text key={obj.name}>{obj.name + " " + obj.date}</Text>
          ))}
        </View>
      </View>
    );
  }
}

export default view(Certs);

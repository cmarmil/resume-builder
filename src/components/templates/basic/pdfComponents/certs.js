import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import styleSheet from "components/templates/basic/styleSheet.js";

function Certs() {
  return (
    <View style={styleSheet.sideContainer}>
      <Text style={styleSheet.sectionHeader}>Certificates and Liscenses</Text>
      <View style={styleSheet.certContainer}>
        {appState.pdfData.certsAndLiscences.map((certObj, index) => (
          <View key={certObj + index} style={styleSheet.certContainer}>
            <Text
              key={"certs" + certObj.name + index}
              style={styleSheet.boldFont}
            >
              {certObj.name}
            </Text>
            <Text
              key={"certs" + certObj.date + index}
              style={styleSheet.certDate}
            >
              {certObj.date}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default view(Certs);

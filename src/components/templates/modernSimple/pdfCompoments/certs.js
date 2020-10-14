import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import styleSheet from "components/templates/modernSimple/styleSheet.js";

function Certs() {
  return (
    <View style={styleSheet.section} wrap={false}>
      <Text style={styleSheet.sectionHeader}>Certifications and Licenses</Text>
      <View>
        {appState.pdfData.certsAndLiscences.map(obj => (
            <Text
              key={obj.name}
            >{obj.name + " " + obj.date}</Text>
        ))}
      </View>
    </View>
  );
}

export default view(Certs);

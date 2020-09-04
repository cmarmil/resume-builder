import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "../../appState.js";

function Header() {
  return (
    <View style={appState.template.headerPadding}>
      <View style={appState.template.nameInfo}>
        <Text style={appState.template.header}>{appState.pdfData.name}</Text>
        <Text style={appState.template.profession}>
          {appState.pdfData.profession}
        </Text>
      </View>
    </View>
  );
}

export default view(Header);

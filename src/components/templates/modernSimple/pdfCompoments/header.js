import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import styleSheet from 'components/templates/modernSimple/styleSheet.js';

function Header() {
  return (
    <View style={styleSheet.headerPadding}>
      <View style={styleSheet.nameInfo}>
        <Text style={styleSheet.header}>{`${appState.pdfData.fName} ${appState.pdfData.lName}`}</Text>
        <Text style={styleSheet.profession}>
          {appState.pdfData.profession}
        </Text>
      </View>
    </View>
  );
}

export default view(Header);

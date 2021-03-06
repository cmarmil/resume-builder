import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import styleSheet from 'components/templates/twoColumn/styleSheet.js';

function Header() {
  return (
      <View style={styleSheet.headerContainer}>
        <Text style={[styleSheet.header, {fontSize: appState.fontSizes.twoColumn.headerName}]}>{`${appState.pdfData.fName} ${appState.pdfData.lName}`}</Text>
        <Text style={{fontSize: appState.fontSizes.twoColumn.headerProfession}}>
          {appState.pdfData.profession}
        </Text>
      </View>
  );
}

export default view(Header);

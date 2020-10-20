import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import styleSheet from "components/templates/oneColumn/styleSheet.js";

function Header() {
  return (
    <View style={styleSheet.headerPadding}>
      <View
        style={[
          styleSheet.nameInfo,
          { fontSize: appState.fontSizes.oneColumn.headerName }
        ]}
      >
        <Text
          style={styleSheet.header}
        >{`${appState.pdfData.fName} ${appState.pdfData.lName}`}</Text>
        <Text
          style={[
            styleSheet.profession,
            { fontSize: appState.fontSizes.oneColumn.headerProfession }
          ]}
        >
          {appState.pdfData.profession}
        </Text>
      </View>
    </View>
  );
}

export default view(Header);

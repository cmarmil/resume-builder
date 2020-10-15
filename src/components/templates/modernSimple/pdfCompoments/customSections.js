import React from "react";
import { Text, View, Link} from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import UnorderedListItem from "components/genericPdfComponents/unorderListItem.js";
import styleSheet from "components/templates/modernSimple/styleSheet.js";

function renderBullets(description) {
  return description.map((bullet, index) => (
    <UnorderedListItem key={"customListBullet" + index}>
      {bullet}
    </UnorderedListItem>
  ));
}

function renderList(title, content, index) {
  return (
    <React.Fragment>
      <Text style={styleSheet.sectionHeader}>{title}</Text>
      {renderBullets(content, index)}
    </React.Fragment>
  );
}
function renderText(title, content) {
  let formattedText = [] ;
  content.forEach(function(item) {
    if (typeof item === 'object') {
      formattedText.push(<Link
        style={styleSheet.contactText}
        src={item.link}
      >
        {item.content}
      </Link>)
    } else {
      formattedText.push(item.content)
    }
  });

  ///Nested Text with Links is not going to work in this versin of react-pdf. 
  ///I need to either find the error and patch it, or forgo the use of SVG components which is why I'm using the beta and not the current stable version that broke nested text
  return (
    <React.Fragment>
      <Text style={styleSheet.sectionHeader}>{title}</Text>
      {formattedText}
    </React.Fragment>
  );
}

function CustomListSection() {
  if (appState.pdfData.customSections.length) {
    return (
      <View style={styleSheet.section} wrap={false}>
        <View>
          {appState.pdfData.customSections.map((obj, index) => {
            if (obj.contentType === "list") {
              return renderList(obj.sectionTitle, obj.content, index);
            } else {
              return renderText(obj.sectionTitle, obj.content);
            }
          })}
        </View>
      </View>
    );
  }
}

export default view(CustomListSection);

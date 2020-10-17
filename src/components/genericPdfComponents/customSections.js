import React from "react";
import { Text, View, Link } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import UnorderedListItem from "components/genericPdfComponents/unorderListItem.js";

function renderBullets(description) {
  return description.map((bullet, index) => (
    <UnorderedListItem key={"customListBullet" + index}>
      {bullet}
    </UnorderedListItem>
  ));
}

function renderList(title, content, index, props) {
  return (
    <View style={props.styleSheet.section} key={title + index.toString()}>
      <Text style={props.styleSheet.sectionHeader}>{title}</Text>
      {renderBullets(content, index)}
    </View>
  );
}

function renderText(title, content, props) {
  let textArray = [];
  content.forEach(function(contentChunk) {
    if (typeof contentChunk === "object") {
      textArray.push(
        <Link debug style={props.styleSheet.link} src={contentChunk.link}>
          {contentChunk.content}
        </Link>
      );
    } else {
      textArray.push(contentChunk)
    }
  });

  return (
    <View style={props.styleSheet.section}>
      <Text style={props.styleSheet.sectionHeader}>{title}</Text>
      <Text>{textArray}</Text>
    </View>
  );
}

function CustomListSection(props) {
  if (appState.pdfData.customSections.length) {
    return (
      <View wrap={false}>
          {appState.pdfData.customSections.map((obj, index) => {
            if (obj.contentType === "list") {
              return renderList(obj.sectionTitle, obj.content, index, props);
            } else {
              return renderText(obj.sectionTitle, obj.content, props);
            }
          })}
      </View>
    );
  }
}

export default view(CustomListSection);

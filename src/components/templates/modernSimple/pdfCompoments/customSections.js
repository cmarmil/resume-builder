import React from "react";
import { Text, View, Link } from "@react-pdf/renderer";
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
    <React.Fragment key={title + index.toString()}>
      <Text style={styleSheet.sectionHeader}>{title}</Text>
      {renderBullets(content, index)}
    </React.Fragment>
  );
}

/* React-pdf beta 2.0.11 (needed for svgs) does not support nexted text, links, or inline text and links. To render links without 'stacking' text chunks onto a new line, we can break up chunks into one word nodes to be placed beside each other in a flex container. This may not be performant on very large text sections but should be fine for most users, look to replace this workaroud asap. */

function renderText(title, content) {
  let formattedText = [];
  content.forEach(function(contentChunk) {
    if (typeof contentChunk === "object") {
      formattedText.push(
        <Link debug style={styleSheet.inline} src={contentChunk.link}>
          {contentChunk.content}
        </Link>
      );
    } else {
      let words = contentChunk.split(" ");
      let wordNodes = words.map((word,i) => <Text key={i}>{`${word} `}</Text>)
      formattedText.push(wordNodes);
    }
  });

  return (
    <View>
      <Text style={styleSheet.sectionHeader}>{title}</Text>
      {/* <View style={styleSheet.inlineContainer}>{formattedText}</View> */}
      <View><Text>testing text whoah<Link src="google.com">whoah here's a link</Link> whoah more text</Text></View>
    </View>
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

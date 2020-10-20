import React from "react";
import { Text, View, Link } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import UnorderedListItem from "components/genericPdfComponents/unorderListItem.js";

class CustomSections extends React.Component {
  constructor(props) {
    super();
  }

  renderBullets = (description) => {
    return description.map((bullet) => (
      <UnorderedListItem key={bullet}>
        {bullet}
      </UnorderedListItem>
    ));
  }

  renderList = (title, content, index) => {
    return (
      <View
        style={this.props.styleSheet.section}
        key={'customList' + index}
      >
        <Text style={[this.props.styleSheet.sectionHeader, {fontSize: appState.fontSizes[appState.activeTemplate].sectionHeader}]}>{title}</Text>
        {this.renderBullets(content, index)}
      </View>
    );
  };

  renderText = (title, content, index) => {
    let textArray = [];
    content.forEach((contentChunk) => {
      if (typeof contentChunk === "object") {
        textArray.push(
          <Link
            key={contentChunk.link}
            style={this.props.styleSheet.link}
            src={contentChunk.link}
          >
            {contentChunk.content}
          </Link>
        );
      } else {
        textArray.push(contentChunk);
      }
    });

    return (
      <View style={this.props.styleSheet.section} key={'customText' + index}>
        <Text style={[this.props.styleSheet.sectionHeader, {fontSize: appState.fontSizes[appState.activeTemplate].sectionHeader}]}>{title}</Text>
        <Text>{textArray}</Text>
      </View>
    );
  };

  render() {
    return (
      <View wrap={false}>
        {appState.pdfData.customSections.map((obj, index) => {
          if (obj.contentType === "list") {
            return this.renderList(obj.sectionTitle, obj.content, index);
          } else {
            return this.renderText(obj.sectionTitle, obj.content, index);
          }
        })}
      </View>
    );
  }
}

export default view(CustomSections);

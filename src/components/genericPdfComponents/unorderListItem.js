import React from "react";
import {
    Text,
    View,
    StyleSheet,
  } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    listItem: {
      marginBottom: 4,
      paddingRight: 15
    },
    listItemText: {
      flexDirection: 'row',
    },
    bullet: {
      fontStyle: 'bold'
    }
  });

  const UnorderedListItem = (props) => {
    return (
      <View style={styles.listItem}>
        <View style={styles.listItemText}>
        <Text style={styles.bullet}>• &nbsp;</Text><Text style={props.style}>{props.children}</Text>
        </View>
      </View>
    );
  };

  export default UnorderedListItem;
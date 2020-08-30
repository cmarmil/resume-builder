import React from "react";
import {
    Text,
    View,
    StyleSheet,
  } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    listItem: {
      marginBottom: 4,
    },
    listItemText: {
      flexDirection: 'row',
      
      lineHeight: 1.45,
    },
    bullet: {
      

    }
  });

  const UnorderedListItem = ({ children }) => {
    return (
      <View style={styles.listItem}>
        <View style={styles.listItemText}>
        <Text style={styles.bullet}>• &nbsp;</Text><Text>{children}</Text>
        </View>
      </View>
    );
  };

  export default UnorderedListItem;
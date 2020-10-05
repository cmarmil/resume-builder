import { StyleSheet } from "@react-pdf/renderer";

const styleSheet = StyleSheet.create({
    page: {
      fontFamily: "Montserrat",
      fontSize: 14
    },
    headerSection: {
      backgroundColor: "#80CBC4"
    },
    headerPadding: {
      paddingLeft: 25,
      paddingRight: 25,
      paddingTop: 20,
      paddingBottom: 10
    },
    mainSections: {
      paddingLeft: 25,
      paddingRight: 25,
      paddingBottom: 20,
      paddingTop: 10
    },
    section: {
      paddingBottom: 5,
      paddingTop: 6
    },
    nameInfo: {
      flexDirection: "column",
      fontSize: 50
    },
    contactInfo: {
      flexDirection: "column",
      textAlign: "left",
      marginBottom: 3,
      fontStyle: "bold"
    },
    profession: {
      fontSize: 30,
      marginBottom: 10
    },
    sectionHeader: {
      fontSize: 20,
      textDecoration: "underline",
      marginBottom: 5
    },
    svgFlex: {
      flexDirection: "row",
      textAlign: "left",
      paddingBottom: 5
    },
    icon: {
      marginRight: 7
    },
    companyDates: {
      textAlign: "right",
      width: "50%",
      fontStyle: "italic"
    },
    companyName: {
      width: "50%",
      fontStyle: "italic"
    },
    companyInfo: {
      flexDirection: "row",
      marginTop: 5,
      marginBottom: 5
    },
    contactText: {
      //this is a little anal but the svg alignment is just a hair off in the render.
      marginTop: 2
    },
    slash: {
      marginRight: 4,
      marginLeft: 4
    },
    jobTitle: {
      fontStyle: "bold"
    }
  });

  export default styleSheet;
import { StyleSheet } from "@react-pdf/renderer";

const styleSheet = StyleSheet.create({
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
    marginTop: 2,
    color: "black"
  },
  contactInfo: {
    flexDirection: "column",
    textAlign: "left",
    marginBottom: 3,
    fontStyle: "bold"
  },
  educationTitle: {
    fontStyle: "bold"
  },
  headerPadding: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 20,
    paddingBottom: 10
  },
  icon: {
    marginRight: 7,
    width: "20px"
  },
  link: {
    color: "black",
    textDecoration: "none"
  },
  jobTitle: {
    fontStyle: "bold"
  },
  mainSections: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 10,
    paddingTop: 10
  },
  nameInfo: {
    flexDirection: "column",
    fontStyle: "bold"
  },
  profession: {
    marginBottom: 10
  },
  section: {
    paddingBottom: 5,
    paddingTop: 6
  },
  sectionHeader: {
    textDecoration: "underline",
    marginBottom: 3
  },
  svgFlex: {
    flexDirection: "row",
    textAlign: "left",
    paddingBottom: 5
  },
  slash: {
    marginRight: 4,
    marginLeft: 4
  }
});

export default styleSheet;

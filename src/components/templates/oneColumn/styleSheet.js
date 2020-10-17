import { StyleSheet } from "@react-pdf/renderer";
import { wrap } from "module";

const styleSheet = {
  headerPadding: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 20,
    paddingBottom: 10
  },
  mainSections: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 13
  },
  section: {
    paddingBottom: 5,
    paddingTop: 6
  },
  nameInfo: {
    flexDirection: "column",
    fontSize: 40,
    fontStyle: 'bold'
  },
  contactInfo: {
    flexDirection: "column",
    textAlign: "left",
    marginBottom: 3,
    fontStyle: "bold"
  },
  profession: {
    marginBottom: 10,
    fontSize: 30
  },
  sectionHeader: {
    textDecoration: "underline",
    marginBottom: 3,
    fontSize: 18,
  },
  svgFlex: {
    flexDirection: "row",
    textAlign: "left",
    paddingBottom: 5
  },
  icon: {
    marginRight: 7,
    width: '20px'
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
    marginTop: 2,
    color: 'black',
  },
  link: {
    color: 'black',
    textDecoration: 'none'
  },
  slash: {
    marginRight: 4,
    marginLeft: 4
  },
  jobTitle: {
    fontStyle: "bold"
  },
  educationTitle: {
    fontStyle: "bold"
  }
};

export default styleSheet;

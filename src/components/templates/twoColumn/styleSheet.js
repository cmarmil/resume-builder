import { StyleSheet } from "@react-pdf/renderer";

const styleSheet = StyleSheet.create({
  boldFont: {
    fontStyle: "bold"
  },
  sectionEntry: {
    marginTop: 5,
    marginBottom: 5
  },
  colContainer: {
    flexDirection: "row"
  },
  contactHeader: {
    textDecoration: "underline",
    fontStyle: "bold",
    fontSize: 20
  },
  contactInfo: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 13,
    textAlign: "center"
  },
  companyName: {
    fontStyle: "italic",
    width: "50%",
    marginLeft: -5,
    fontSize: 11
  },
  companyDates: {
    width: "50%",
    textAlign: "right",
    fontSize: 11
  },
  companyInfo: {
    flexDirection: "row",
    padding: 5
  },
  headerContainer: {
    textAlign: "center"
  },
  header: {
    fontStyle: "bold",
    fontSize: 40
  },
  italicFont: {
    fontStyle: "italic"
  },
  jobTitle: {
    fontStyle: "bold"
  },
  link: {
    color: "black"
  },
  sideCol: {
    width: "35%",
    backgroundColor: "#deecff",
    height: "100vh",
    padding: 15,
    paddingTop: 25,
    flexShrink: 1
  },
  mainCol: {
    width: "65%",
    padding: 10
  },
  mainSectionHeader: {
    fontSize: 16,
    fontStyle: "bold",
    backgroundColor: "#deecff",
    textTransform: "uppercase",
    padding: 5,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    marginTop: 5,
    marginBottom: 5
  },
  mainSection: {
    marginTop: 10,
    marginBottom: 10
  },
  profession: {
    fontSize: 25
  },
  sideContainer: {
    marginBottom: 15
  },
  sectionHeader: {
    fontSize: 16,
    textTransform: "uppercase",
    textDecoration: "underline",
    fontStyle: "bold",
    marginBottom: 5
  },
  skill: {
    fontStyle: "italic"
  }
});

export default styleSheet;

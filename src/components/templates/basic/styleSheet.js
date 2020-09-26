import { StyleSheet } from "@react-pdf/renderer";

const styleSheet = StyleSheet.create({
  page: {
    fontFamily: "Montserrat",
    fontSize: 13,
    color: "#424242"
  },
  colContainer: {
    flexDirection: "row"
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
  headerContainer: {
    textAlign: "center"
  },
  header: {
    fontFamily: "PlayfairDisplay",
    fontSize: 40,
    fontStyle: "bold"
  },
  profession: {
    fontSize: 25
  },
  contactHeader: {
    textDecoration: "underline",
    fontStyle: "bold",
    fontFamily: "PlayfairDisplay",
    fontSize: 20
  },
  contactInfo: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 13,
    textAlign: "center"
  },
  sideContainer: {
    marginBottom: 15
  },
  sectionHeader: {
    fontSize: 16,
    fontFamily: "PlayfairDisplay",
    textTransform: 'uppercase',
    textDecoration: 'underline',
    fontStyle: 'bold',
    marginBottom: 5
  },
  mainSectionHeader: {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "PlayfairDisplay",
    backgroundColor: "#deecff",
    textTransform: 'uppercase',
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
  jobTitle: {
    fontStyle: "bold",
  },
  companyInfo: {
    flexDirection: 'row',
    padding: 5
  },
  companyName: {
    fontStyle: 'italic',
    width: '50%',
    marginLeft: -5,
    fontSize: 11
  },
  companyDates: {
    width: '50%',
    textAlign: 'right',
    fontSize: 11
  },
  italicFont: {
    fontStyle: 'italic'
  },
  boldFont: {
    fontStyle: 'bold'
  },
  certContainer: {
    marginTop: 5,
    marginBottom: 5
  },
  skill: {
    fontStyle: 'italic'
  }
});

export default styleSheet;

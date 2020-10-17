import React from "react";
import { Text, View, Image, Link } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import PhoneImage from "assets/phone.png";
import EmailImage from "assets/email.png";
import LinkedInImage from "assets/linkedin.png";
import LaptopImage from "assets/laptop.png";
import styleSheet from "components/templates/modernSimple/styleSheet.js";

//Icons sourced from https://materialdesignicons.com/

function ContactInfoIcons() {
  return (
    <View style={styleSheet.contactInfo}>
      {appState.pdfData.email ? (
        <View style={styleSheet.svgFlex}>
          <Image style={styleSheet.icon} src={EmailImage}></Image>
          <Text style={styleSheet.contactText}>{appState.pdfData.email}</Text>
        </View>
      ) : null}
      {appState.pdfData.phoneNumber ? (
        <View style={styleSheet.svgFlex}>
          <Image style={styleSheet.icon} src={PhoneImage}></Image>
          <Text style={styleSheet.contactText}>
            {appState.pdfData.phoneNumber}
          </Text>
        </View>
      ) : null}
      {appState.pdfData.linkedIn ? (
        <View style={styleSheet.svgFlex}>
          <Image style={styleSheet.icon} src={LinkedInImage}></Image>
          <Link
            //link src requires a leading space to parse correctly in react-pdf 2.0
            src={" " + appState.pdfData.linkedIn}
            style={styleSheet.contactText}
          >
            {appState.pdfData.linkedIn}
          </Link>
        </View>
      ) : null}
      {appState.pdfData.website ? (
        <View style={styleSheet.svgFlex}>
          <Image style={styleSheet.icon} src={LaptopImage}></Image>
          <Link
            style={styleSheet.contactText}
            src={" " + appState.pdfData.website}
          >
            {appState.pdfData.website}
          </Link>
        </View>
      ) : null}
    </View>
  );
}

export default view(ContactInfoIcons);

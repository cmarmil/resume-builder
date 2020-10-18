import React from "react";
import { Text, View, Image, Link } from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import PhoneImage from "assets/phone.png";
import EmailImage from "assets/email.png";
import LinkedInImage from "assets/linkedin.png";
import LaptopImage from "assets/laptop.png";
import HomeImage from "assets/home.png";
import styleSheet from "components/templates/oneColumn/styleSheet.js";

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
          <Link src={appState.pdfData.linkedIn} style={styleSheet.contactText}>
            {appState.pdfData.linkedIn}
          </Link>
        </View>
      ) : null}
      {appState.pdfData.website ? (
        <View style={styleSheet.svgFlex}>
          <Image style={styleSheet.icon} src={LaptopImage}></Image>
          <Link style={styleSheet.contactText} src={appState.pdfData.website}>
            {appState.pdfData.website}
          </Link>
        </View>
      ) : null}
      {appState.pdfData.city && appState.pdfData.state ? (
        <View style={styleSheet.svgFlex}>
          <Image style={styleSheet.icon} src={HomeImage}></Image>
          <Text
            style={styleSheet.contactText}
          >{`${appState.pdfData.city}, ${appState.pdfData.state}`}</Text>
        </View>
      ) : null}
    </View>
  );
}

export default view(ContactInfoIcons);

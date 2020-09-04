import React from "react";
import { Text, View, Link} from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "../../appState.js";
import PhoneIcon from "../icons/phoneIcon.js";
import MailIcon from "../icons/mailIcon.js";
import WebpageIcon from "../icons/webpageIcon.js";
import LinkedInIcon from "../icons/linkedInIcon.js";

function ContactInfoIcons() {
  return (
    <View style={appState.template.contactInfo}>
      <View style={appState.template.svgFlex}>
        <MailIcon style={appState.template.icon} fill={"#80CBC4"}></MailIcon>
        <Text style={appState.template.contactText}>
          {appState.pdfData.email}
        </Text>
      </View>
      <View style={appState.template.svgFlex}>
        <PhoneIcon style={appState.template.icon} fill={"#80CBC4"}></PhoneIcon>
        <Text style={appState.template.contactText}>
          {appState.pdfData.phoneNumber}
        </Text>
      </View>
      <View style={appState.template.svgFlex}>
        <LinkedInIcon
          style={appState.template.icon}
          fill={"#80CBC4"}
        ></LinkedInIcon>
        <Link
          //link src requires a leading space to parse correctly in react-pdf 2.0
          src={" " + appState.pdfData.linkedIn}
          style={appState.template.contactText}
        >
          {appState.pdfData.linkedIn}
        </Link>
      </View>
      <View style={appState.template.svgFlex}>
        <WebpageIcon
          style={appState.template.icon}
          fill={"#80CBC4"}
        ></WebpageIcon>
        <Link
          style={appState.template.contactText}
          src={" " + appState.pdfData.website}
        >
          {appState.pdfData.website}
        </Link>
      </View>
    </View>
  );
}

export default view(ContactInfoIcons);

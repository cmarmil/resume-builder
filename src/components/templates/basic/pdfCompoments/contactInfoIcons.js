import React from "react";
import { Text, View, Link} from "@react-pdf/renderer";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import PhoneIcon from "components/icons/phoneIcon.js";
import MailIcon from "components/icons/mailIcon.js";
import WebpageIcon from "components/icons/webpageIcon.js";
import LinkedInIcon from "components/icons/linkedInIcon.js";
import styleSheet from 'components/templates/basic/styleSheet.js';

function ContactInfoIcons() {
  return (
    <View style={styleSheet.contactInfo}>
      <View style={styleSheet.svgFlex}>
        <MailIcon style={styleSheet.icon} fill={"#80CBC4"}></MailIcon>
        <Text style={styleSheet.contactText}>
          {appState.pdfData.email}
        </Text>
      </View>
      <View style={styleSheet.svgFlex}>
        <PhoneIcon style={styleSheet.icon} fill={"#80CBC4"}></PhoneIcon>
        <Text style={styleSheet.contactText}>
          {appState.pdfData.phoneNumber}
        </Text>
      </View>
      <View style={styleSheet.svgFlex}>
        <LinkedInIcon
          style={styleSheet.icon}
          fill={"#80CBC4"}
        ></LinkedInIcon>
        <Link
          //link src requires a leading space to parse correctly in react-pdf 2.0
          src={" " + appState.pdfData.linkedIn}
          style={styleSheet.contactText}
        >
          {appState.pdfData.linkedIn}
        </Link>
      </View>
      <View style={styleSheet.svgFlex}>
        <WebpageIcon
          style={styleSheet.icon}
          fill={"#80CBC4"}
        ></WebpageIcon>
        <Link
          style={styleSheet.contactText}
          src={" " + appState.pdfData.website}
        >
          {appState.pdfData.website}
        </Link>
      </View>
    </View>
  );
}

export default view(ContactInfoIcons);

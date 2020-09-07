import { Font } from "@react-pdf/renderer";

//import new fonts here

import MerriweatherReg from "fonts/Merriweather/Merriweather-Regular.ttf";
import MerriweatherBold from "fonts/Merriweather/Merriweather-Bold.ttf";
import MerriweatherItalic from "fonts/Merriweather/Merriweather-Italic.ttf";

import MontserratReg from "fonts/Montserrat/Montserrat-Regular.ttf";
import MontserratBold from "fonts/Montserrat/Montserrat-Bold.ttf";
import MontserratItalic from "fonts/Montserrat/Montserrat-Italic.ttf";

import RobotoReg from "fonts/Roboto/Roboto-Regular.ttf";
import RobotoBold from "fonts/Roboto/Roboto-Bold.ttf";
import RobotoItalic from "fonts/Roboto/Roboto-Italic.ttf";

import AlluraReg from 'fonts/Allura-Regular.ttf';

import PlayfairReg from 'fonts/PlayfairDisplay/PlayfairDisplay-Regular.ttf';
import PlayfairBold from 'fonts/PlayfairDisplay/PlayfairDisplay-Bold.ttf';
import PlayfairItalic from 'fonts/PlayfairDisplay/PlayfairDisplay-Italic.ttf';

//this prevents words from breaking with hyphens in the pdf.
Font.registerHyphenationCallback(word => [word]);

//register new fonts here
function registerFont() {

  Font.register({
    family: "Merriweather",
    fonts: [
      { src: MerriweatherReg },
      { src: MerriweatherBold, fontStyle: "bold" },
      { src: MerriweatherItalic, fontStyle: "italic" }
    ]
  });

  Font.register({
    family: "Montserrat",
    fonts: [
      { src: MontserratReg },
      { src: MontserratBold, fontStyle: "bold" },
      { src: MontserratItalic, fontStyle: "italic" }
    ]
  });

  Font.register({
    family: "Roboto",
    fonts: [
      { src: RobotoReg },
      { src: RobotoBold, fontStyle: "bold" },
      { src: RobotoItalic, fontStyle: "italic" }
    ]
  });

  Font.register({
    family: "PlayfairDisplay",
    fonts: [
      { src: PlayfairReg },
      { src: PlayfairBold, fontStyle: "bold" },
      { src: PlayfairItalic, fontStyle: "italic" }
    ]
  });

  Font.register({ family: 'Allura', src: AlluraReg, fontStyle: 'normal', fontWeight: 'normal'});
}

export default registerFont;

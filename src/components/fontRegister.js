import { Font } from "@react-pdf/renderer";

//import new fonts here
import Barlow from "../fonts/Barlow-Regular.ttf";

import MerriweatherReg from '../fonts/Merriweather/Merriweather-Regular.ttf';
import MerriweatherBold from '../fonts/Merriweather/Merriweather-Bold.ttf';
import MerriweatherItalic from '../fonts/Merriweather/Merriweather-Italic.ttf';

import MontserratReg from '../fonts/Montserrat/Montserrat-Regular.ttf';
import MontserratBold from '../fonts/Montserrat/Montserrat-Bold.ttf';
import MontserratItalic from '../fonts/Montserrat/Montserrat-Italic.ttf';

//this prevents words from breaking with hyphens in the pdf. 
Font.registerHyphenationCallback(word => [word]);

//register new fonts here
function registerFont() {
  Font.register({
    family: "Barlow",
    src: Barlow
  });

  Font.register({ family: 'Merriweather', fonts: [
    { src: MerriweatherReg }, // font-style: normal, font-weight: normal
    { src: MerriweatherBold, fontStyle: 'bold' },
    { src: MerriweatherItalic, fontStyle: 'italic' },
   ]});

   Font.register({ family: 'Montserrat', fonts: [
    { src: MontserratReg }, // font-style: normal, font-weight: normal
    { src: MontserratBold, fontStyle: 'bold' },
    { src: MontserratItalic, fontStyle: 'italic' },
   ]});
}


export default registerFont;

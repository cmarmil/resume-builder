import React from "react";
import { pdfjs } from "react-pdf";
import PDFDisplay from "./components/pdfDisplay.js";
import { view } from "@risingstack/react-easy-state";
import DownloadButton from './components/downloadButton.js';
import appState from "./appState.js";
import registerFont from './components/fontRegister';
import "./App.css";

import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import fontRegister from "./components/fontRegister";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    registerFont();
    //react-pdf needs this to work
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }

  render() {
    return (
      <ThemeProvider>
        <CSSReset />
        <div className="App">
          <PDFDisplay></PDFDisplay>
          <DownloadButton></DownloadButton>
        </div>
      </ThemeProvider>
    );
  }
}

export default view(App);

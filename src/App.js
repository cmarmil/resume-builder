import React from "react";
import { pdfjs } from "react-pdf";
import PDFDisplay from "./components/pdfDisplay.js";
import { view } from "@risingstack/react-easy-state";
import DownloadButton from "./components/downloadButton.js";
import DataForm from "./components/dataForm.js";
import appState from "./appState.js";
import registerFonts from "./components/fontRegister";
import "./App.css";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    registerFonts();
    //react-pdf needs this to work
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }

  render() {
    return (
      <ThemeProvider>
        <CSSReset />
        <div className="App">
          <div className="editor">
            <div className="editorContainer editorContainerForm">
              <DataForm></DataForm>
            </div>
            <div className="editorContainer editorContainerPdf">
              <PDFDisplay></PDFDisplay>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default view(App);

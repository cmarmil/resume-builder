import React from "react";
import { pdfjs } from "react-pdf";
import PDFDisplay from "components/pdfDisplay.js";
import { view } from "@risingstack/react-easy-state";
import FormContainer from "components/formContainer.js";
import customTheme from "customTheme.js";
import registerFonts from "components/fontRegister";
import "App.scss";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import GithubCorner from 'react-github-corner';

class App extends React.Component {
  async componentDidMount() {
    registerFonts();
    //react-pdf will crash without this
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }

  render() {
    return (
      <ThemeProvider theme={customTheme}>
      <GithubCorner href="https://github.com/cmarmil/resume-builder" bannerColor="#3949AB" size="70"/>
        <CSSReset />
        <div className="App">
          <div className="editor">
            <div className="editorContainer editorContainerForm">
              <FormContainer></FormContainer>
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

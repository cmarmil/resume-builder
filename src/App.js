import React from "react";
import { pdfjs } from "react-pdf";
import PDFDisplay from "components/pdfDisplay.js";
import { view } from "@risingstack/react-easy-state";
import FormContainer from "components/formContainer.js";
import appState from "./appState.js";
import registerFonts from "components/fontRegister";
import "App.scss";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    blue: {
      50: "#e4e4ff",
      100: "#b2b3ff",
      200: "#8080ff",
      300: "#4d4dff",
      400: "#1d1bfe",
      500: "#0501e5",
      600: "#0000b3",
      700: "#000081",
      800: "#000050",
      900: "#000020"
    }
  }
};

class App extends React.Component {
  async componentDidMount() {
    registerFonts();
    //react-pdf needs this to work
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }

  render() {
    return (
      <ThemeProvider theme={customTheme}>
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

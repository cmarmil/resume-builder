import React from "react";
import { pdf } from "@react-pdf/renderer";
import { Document, Page, pdfjs } from "react-pdf";
import { BlobProvider } from "@react-pdf/renderer";
import PDFOutput from "./components/pdfOutput.js";
import { view } from "@risingstack/react-easy-state";
import appState from "./appState.js";
import "./App.css";
import { PDFViewer } from "@react-pdf/renderer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blob: null
    };
    this.getBlob = this.getBlob.bind(this);
  }

  async getBlob() {
    let blob = pdf(<PDFOutput></PDFOutput>).toBlob();
    return blob;
  }

  async componentDidMount() {
    //react-pdf needs this to work
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    /* let blob = await this.getBlob();
    this.setState({
      blob: blob
    }); */
  }

  render() {
    return (
      <div className="App">
        {/*  {this.state.blob ? (
          <Document file={this.state.blob}>
            <Page pageNumber={1} />
          </Document>
        ) : null} */}
        <BlobProvider document={<PDFOutput></PDFOutput>}>
          {({ blob }) =>
            blob ? (
              <Document file={blob}>
                <Page pageNumber={1} />
              </Document>
            ) : (
              <span>Loading PDF....</span>
            )
          }
        </BlobProvider>
      </div>
    );
  }
}

export default view(App);

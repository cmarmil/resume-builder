import React from "react";
import { BlobProvider } from "@react-pdf/renderer";
import { Document, Page } from "react-pdf";
import PDFOutput from "../components/pdfOutput.js";
import { view } from "@risingstack/react-easy-state";
import appState from "../appState.js";

function PDFDisplay () {
    return (
      <BlobProvider document={<PDFOutput></PDFOutput>}>
        {({ blob }) =>
          blob ? (
            <Document file={blob}>
              <Page pageNumber={1} />
            </Document>
          ) : (
            <span>Loading PDF...</span>
          )
        }
      </BlobProvider>
    );
}

export default view(PDFDisplay);

import React from "react";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import PDFOutput from "./pdfOutput.js";
import { Button } from "@chakra-ui/core";
import { PDFDocument } from "pdf-lib";

export const DownloadButton = () => (
  <Button
    onClick={async () => {
      const doc = <PDFOutput />;
      const asPdf = pdf({}); //important, throws without an argument
      asPdf.updateContainer(doc);
      let blob = await asPdf.toBlob();
      //To download only first page: convert blob to buffer to use pdf-lib's removePage functionality.
      //There's probably a better way to do this but this works for now.
      let buffer = await blob.arrayBuffer();
      const pdfDoc = await PDFDocument.load(buffer);
      const pageCount = await pdfDoc.getPageCount();
      if (pageCount > 1) {
        pdfDoc.removePage(1);
        const pdfBytes = await pdfDoc.save();
        blob = new Blob([pdfBytes], { type: "application/pdf" });
      }
      saveAs(blob, "resume.pdf");
    }}
  >
    Download PDF
  </Button>
);

export default DownloadButton;

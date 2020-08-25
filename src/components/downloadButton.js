import React from "react";
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import PDFOutput from "./pdfOutput.js";
import { Button } from "@chakra-ui/core";

export const DownloadButton = () => (
    <Button
      onClick={async () => {
        const doc = <PDFOutput />;
        const asPdf = pdf({}); //important, throws without an argument
        asPdf.updateContainer(doc);
        const blob = await asPdf.toBlob();
        saveAs(blob, 'resume.pdf');
      }}
    >Download PDF</Button>
  );

export default DownloadButton;
import React from "react";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import PDFOutput from "components/pdfOutput.js";
import { Button, Icon} from "@chakra-ui/core";
import { PDFDocument } from "pdf-lib";

function getArrayBuffer (blob) {
    //seemingly can't use native arrayBuffer() in safari.
    return new Promise((resolve) => {
      let fr = new FileReader();
      fr.onload = () => {
        resolve(fr.result);
      };
      fr.readAsArrayBuffer(blob);
    })
}

export const DownloadButton = () => (
  <Button
    onClick={async () => {
      //workaround for a toBlob bug in @react-pdf V2 beta. Awaiting a fix.
      const doc = <PDFOutput />;
      const asPdf = pdf({}); //important, throws without an argument
      asPdf.updateContainer(doc);
      let blob = await asPdf.toBlob();
      //convert to buffer to delete possible overflow pages.
      //only necessary if strictly one page resume.
      let buffer = await getArrayBuffer(blob);
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
    Download PDF <Icon name="download" />
  </Button>
);

export default DownloadButton;

import { pdf } from "@react-pdf/renderer";
import { PDFDocument } from "pdf-lib";
import React from "react";
import PdfOutput from "components/pdfOutput.js";

const commonFunctions = {
  setDefaultFormValue: function(formData, property) {
    if (formData) {
      if (property === "description") {
        return formData[property].join(", ");
      } else {
        return formData[property];
      }
    } else {
      return "";
    }
  },
  isAlphaNumeric: function(string) {
    if (/[^a-zA-Z0-9]/.test(string)) {
      return false;
    } else {
      return true;
    }
  },
  getPageCount: async function() {
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
      //get blob data. Temporary workaround using pdf-lib since react-pdf toBlob() is broken is latest beta.
      const doc = <PdfOutput />;
      const asPdf = pdf({}); //important, throws without an argument
      asPdf.updateContainer(doc);
      let blob = await asPdf.toBlob();
      //convert to buffer to read page count
      let buffer = await getArrayBuffer(blob);
      const pdfDoc = await PDFDocument.load(buffer);
      const pageCount = await pdfDoc.getPageCount();
      return pageCount;
  }
};

export default commonFunctions;

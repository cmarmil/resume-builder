import React from "react";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import PDFOutput from "components/pdfOutput.js";
import { Button, Icon} from "@chakra-ui/core";

export const DownloadButton = () => (
  <Button
    className="downloadButton"
    variantColor='indigo'
    onClick={async () => {
      //workaround for a toBlob bug in @react-pdf V2 beta. Awaiting a fix.
      const doc = <PDFOutput />;
      const asPdf = pdf({}); //important, throws without an argument
      asPdf.updateContainer(doc);
      let blob = await asPdf.toBlob();
      saveAs(blob, "resume.pdf");
    }}
  >
    Download PDF <Icon name="download" />
  </Button>
);

export default DownloadButton;

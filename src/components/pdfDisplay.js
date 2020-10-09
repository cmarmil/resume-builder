import React from "react";
import { BlobProvider } from "@react-pdf/renderer";
import { Document, Page } from "react-pdf";
import PdfOutput from "components/pdfOutput.js";
import { view } from "@risingstack/react-easy-state";
import LoadingSpinner from "components/icons/loadingSpinner.js";
import commonFunctions from "commonFunctions.js";

class PDFDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.updateDimension = this.updateDimension.bind(this);
    this.onDocLoadSuccess = this.onDocLoadSuccess.bind(this);
    this.docLoading = this.docLoading.bind(this);

    this.state = {
      width: null,
      height: null,
      loaded: false,
      pageCount: 1
    };

    this.mainPdf = React.createRef();
    this.spinner = React.createRef();
    this.pdfWrapper = React.createRef();
  }

  updateDimension() {
    let percentage = 90 / 100;
    setTimeout(() => {
      this.setState({
        width:
          this.pdfWrapper.current.getBoundingClientRect().width * percentage
      });
    }, 500);
  }

  async onDocLoadSuccess() {
    setTimeout(() => {
      this.spinner.current.style.display = "none";
      this.mainPdf.current.style.display = "block";
    }, 200);
    let newPageCount = await commonFunctions.getPageCount();
    if (newPageCount != this.state.pageCount) {
      this.setState({
        pageCount: newPageCount
      });
    }
  }

  docLoading() {
    this.spinner.current.style.display = "block";
    this.mainPdf.current.style.display = "none";
  }

  componentDidMount() {
    this.updateDimension();
    window.addEventListener("resize", this.updateDimension);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimension);
  }

  render() {
    let pages = [];
    for (let i = 1; i <= this.state.pageCount; i++) {
      console.log(i)
      pages.push(
        <Page
          key={"page" + i}
          width={this.state.width}
          height={this.state.height}
          onLoadSuccess={this.onDocLoadSuccess}
          pageNumber={i}
          loading={this.docLoading}
        />
      );
    }
    return (
      <div className="pageWrapper" ref={this.pdfWrapper}>
        <div className="spinner" ref={this.spinner}>
          <LoadingSpinner></LoadingSpinner>
        </div>
        <div className="mainPdf" ref={this.mainPdf}>
          <BlobProvider document={<PdfOutput></PdfOutput>}>
            {({ blob }) =>
              blob ? (
                <Document file={blob} loading={null}>
                  {pages}
                </Document>
              ) : null
            }
          </BlobProvider>
        </div>
      </div>
    );
  }
}

export default view(PDFDisplay);

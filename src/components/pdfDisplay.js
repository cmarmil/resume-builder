import React from "react";
import { BlobProvider } from "@react-pdf/renderer";
import { Document, Page } from "react-pdf";
import PDFOutput from "../components/pdfOutput.js";
import { view } from "@risingstack/react-easy-state";
import LoadingSpinner from "../icons/loadingSpinner.js";

class PDFDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.throttle = this.throttle.bind(this);
    this.updateDimension = this.updateDimension.bind(this);
    this.onDocLoadSuccess = this.onDocLoadSuccess.bind(this);
    this.docLoading = this.docLoading.bind(this);

    this.state = {
      width: null,
      height: null,
      loaded: false
    };

    this.mainPdf = React.createRef();
    this.spinner = React.createRef();
    this.pdfWrapper = React.createRef();
  }

  throttle(callback, limit) {
    var waiting = false;
    return function() {
      if (!waiting) {
        callback.apply(this, arguments);
        waiting = true;
        setTimeout(function() {
          waiting = false;
        }, limit);
      }
    };
  }

  updateDimension() {
    let percentage = 90 / 100;
    this.setState({
      width: this.pdfWrapper.current.getBoundingClientRect().width * percentage
    });
  }

  componentDidMount() {
    this.updateDimension();
    window.addEventListener("resize", this.throttle(this.updateDimension, 300));
  }

  componentWillUnmount() {
    window.removeEventListener(
      "resize",
      this.throttle(this.updateDimension, 300)
    );
  }

  onDocLoadSuccess() {
    setTimeout(() => {
      this.spinner.current.style.display = "none";
      this.mainPdf.current.style.display = "block";
    }, 200);
  }

  docLoading() {
    this.spinner.current.style.display = "block";
    this.mainPdf.current.style.display = "none";
  }

  render() {
    return (
      <div className="pageWrapper" ref={this.pdfWrapper}>
        <div className="spinner" ref={this.spinner}>
          <LoadingSpinner></LoadingSpinner>
        </div>
        <div className="mainPdf" ref={this.mainPdf}>
          <BlobProvider document={<PDFOutput></PDFOutput>}>
            {({ blob }) =>
              blob ? (
                <Document file={blob} loading={null}>
                  <Page
                    width={this.state.width}
                    height={this.state.height}
                    onLoadSuccess={this.onDocLoadSuccess}
                    pageNumber={1}
                    loading={this.docLoading}
                  />
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

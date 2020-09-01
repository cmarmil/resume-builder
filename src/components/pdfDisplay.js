import React from "react";
import { BlobProvider } from "@react-pdf/renderer";
import { Document, Page } from "react-pdf";
import PDFOutput from "../components/pdfOutput.js";
import { view } from "@risingstack/react-easy-state";
import appState from "../appState.js";

class PDFDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.throttle = this.throttle.bind(this);
    this.updateDimension = this.updateDimension.bind(this);

    this.state = {
      width: null,
      height: null
    };

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

  render() {
    return (
      <div className="pageWrapper" ref={this.pdfWrapper}>
        <BlobProvider document={<PDFOutput></PDFOutput>}>
          {({ blob }) =>
            blob ? (
              <Document file={blob}>
                <Page
                  width={this.state.width}
                  height={this.state.height}
                  pageNumber={1}
                />
              </Document>
            ) : (
              <span>Loading PDF...</span>
            )
          }
        </BlobProvider>
      </div>
    );
  }
}

export default view(PDFDisplay);

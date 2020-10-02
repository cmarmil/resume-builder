import React from "react";
import { Box } from "@chakra-ui/core";
import StyledInput from "./styledInput.js";
import { view } from "@risingstack/react-easy-state";
import commonFunctions from "commonFunctions.js";

class CertsForm extends React.Component {
  constructor() {
    super();
    this.formRef = React.createRef();
  }
  render() {
    return (
      <Box p={"20px"} className="formContainer">
        <form ref={this.formRef} id="certs-form" className="formBox">
          <Box mb={"20px"} d={"flex"}>
            <StyledInput
              mr={"10px"}
              id={"certName"}
              label={"Certification or License Name"}
              placeholder={"Google Ads Certified"}
              defaultValue={commonFunctions.setDefaultFormValue(
                this.props.formData,
                "name"
              )}
            ></StyledInput>
          </Box>
          <Box mb={"20px"} d={"flex"}>
            <StyledInput
              mr={"10px"}
              id={"certData"}
              label={"Date Obtained"}
              placeholder={"May 2012"}
              defaultValue={commonFunctions.setDefaultFormValue(
                this.props.formData,
                "date"
              )}
            ></StyledInput>
          </Box>
        </form>
      </Box>
    );
  }
}

export default view(CertsForm);

import React from "react";
import { Box } from "@chakra-ui/core";
import StyledInput from "./styledInput.js";
import { view } from "@risingstack/react-easy-state";
import appState from "appState.js";

const CertsForm = (props) => {
  function handleChange(e) {
    let name = e.target.id;
    let value = e.target.value;
    appState.formData.certsAndLicenses[props.index][name] = value;
  }
  return (
    <Box p={"20px"}>
      <form id="certs-form" className="formBox">
        <Box mb={"20px"} d={"flex"}>
          <StyledInput
            onChange={handleChange}
            mr={"10px"}
            id={"name"}
            label={"Certification or License Name"}
            placeholder={"Google Ads Certified"}
            defaultValue={props.formData['name']}
          ></StyledInput>
        </Box>
        <Box mb={"20px"} d={"flex"}>
          <StyledInput
            onChange={handleChange}
            mr={"10px"}
            id={"date"}
            label={"Date Obtained"}
            placeholder={"May 2012"}
            defaultValue={props.formData['date']}
          ></StyledInput>
        </Box>
      </form>
    </Box>
  );
};

export default view(CertsForm);

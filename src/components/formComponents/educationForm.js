import React from "react";
import { Box } from "@chakra-ui/core";
import StyledInput from "./styledInput.js";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";

const EducationForm = props => {
  function handleChange(e) {
    let name = e.target.id;
    let value = e.target.value;
    appState.formData.education[props.index][name] = value;
  }
  return (
    <Box p={"20px"} backgroundColor="white">
      <form id="education-info-form" className="formBox">
        <Box mb={"20px"} d={"flex"}>
          <StyledInput
            onChange={handleChange}
            mr={"10px"}
            id={"degree"}
            label={"Degree Level"}
            placeholder={"Bachelor of Arts"}
            defaultValue={props.formData.degree}
          ></StyledInput>
        </Box>
        <Box mb={"20px"} d={"flex"}>
          <StyledInput
            onChange={handleChange}
            mr={"10px"}
            id={"areaOfStudy"}
            label={"Area of Study"}
            placeholder={"Mathematics"}
            defaultValue={props.formData.areaOfStudy}
          ></StyledInput>
          <StyledInput
            onChange={handleChange}
            mr={"10px"}
            id={"dates"}
            label={"Dates Attended"}
            placeholder={"August 2008 - May 2012"}
            defaultValue={props.formData.dates}
          ></StyledInput>
        </Box>
        <Box mb={"20px"} d={"flex"}>
          <StyledInput
            onChange={handleChange}
            mr={"10px"}
            id={"schoolName"}
            label={"School Name"}
            placeholder={"Florida State University"}
            defaultValue={props.formData.schoolName}
          ></StyledInput>
        </Box>
      </form>
    </Box>
  );
};

export default view(EducationForm);

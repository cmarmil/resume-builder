import React from "react";
import { Box } from "@chakra-ui/core";
import StyledInput from "./styledInput.js";
import JobDetailEditor from "components/formComponents/jobDetailEditor.js";
import { view } from "@risingstack/react-easy-state";
import commonFunctions from "commonFunctions.js";
import appState from "appState.js";

const ExpForm = props => {
  function handleChange(e) {
    let name = e.target.id;
    let value = e.target.value;
    appState.formData.workExperience[props.index][name] = value;
  }
  return (
    <Box p={"20px"}>
      <form id="experience-info-form" className="formBox">
        <Box mb={"20px"} d={"flex"}>
          <StyledInput
            onChange={handleChange}
            key={
              commonFunctions.setDefaultFormValue(props.formData, "jobTitle") +
              "jobTitle"
            }
            mr={"10px"}
            id={"jobTitle"}
            label={"Job Title"}
            defaultValue={commonFunctions.setDefaultFormValue(
              props.formData,
              "jobTitle"
            )}
          ></StyledInput>
          <StyledInput
            onChange={handleChange}
            key={
              commonFunctions.setDefaultFormValue(
                props.formData,
                "companyName"
              ) + "companyName"
            }
            mr={"10px"}
            id={"companyName"}
            label={"Company Name"}
            defaultValue={commonFunctions.setDefaultFormValue(
              props.formData,
              "companyName"
            )}
          ></StyledInput>
          <StyledInput
            onChange={handleChange}
            key={
              commonFunctions.setDefaultFormValue(props.formData, "dates") +
              "dates"
            }
            mb={"20px"}
            id={"dates"}
            label={"Duration"}
            placeholder={"July 2012 - January 2015"}
            defaultValue={commonFunctions.setDefaultFormValue(
              props.formData,
              "dates"
            )}
          ></StyledInput>
        </Box>
        <p className="quillFormLabel">Job Description</p>
        <Box mb={"20px"} d={"flex"}>
          <JobDetailEditor
            description={props.formData.description}
            index={props.index}
          ></JobDetailEditor>
        </Box>
      </form>
    </Box>
  );
};

export default view(ExpForm);

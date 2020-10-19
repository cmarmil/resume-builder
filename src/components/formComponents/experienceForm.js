import React from "react";
import { Box } from "@chakra-ui/core";
import {
  StyledInput,
  ListEditor
} from "components/formComponents/formImports.js";
import { view } from "@risingstack/react-easy-state";
import appState from "appState.js";

const ExpForm = props => {
  function handleChange(e) {
    let name = e.target.id;
    let value = e.target.value;
    appState.formData.workExperience[props.index][name] = value;
  }

  function handleEditorChange(value) {
    appState.formData.workExperience[props.index].description = value;
  }

  return (
    <Box p={"20px"}>
      <form id="experience-info-form" className="formBox">
        <Box mb={"20px"} d={"flex"}>
          <StyledInput
            onChange={handleChange}
            key={props.formData.jobTitle}
            mr={"10px"}
            id={"jobTitle"}
            label={"Job Title"}
            defaultValue={props.formData.jobTitle}
          ></StyledInput>
          <StyledInput
            onChange={handleChange}
            key={props.formData.companyName}
            mr={"10px"}
            id={"companyName"}
            label={"Company Name"}
            defaultValue={props.formData.companyName}
          ></StyledInput>
          <StyledInput
            onChange={handleChange}
            key={props.formData.dates}
            mb={"20px"}
            id={"dates"}
            label={"Duration"}
            placeholder={"July 2012 - January 2015"}
            defaultValue={props.formData.dates}
          ></StyledInput>
        </Box>
        <Box mb={"20px"} d={"flex"}>
          <ListEditor
            isListContent={true}
            contentItems={
              appState.pdfData.workExperience[props.index].description
            }
            handleChange={handleEditorChange}
          ></ListEditor>
        </Box>
      </form>
    </Box>
  );
};

export default view(ExpForm);

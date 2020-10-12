import React from "react";
import { Box } from "@chakra-ui/core";
import StyledInput from "./styledInput.js";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import commonFunctions from "commonFunctions.js";

function handleChange(e) {
  let name = e.target.id;
  let value = e.target.value;
  appState.formData[name] = value;
}

const PersonalForm = () => {
  return (
    <Box p={"20px"}>
      <form id="personal-info-form" className="formBox">
        <Box mb={"20px"} d={"flex"}>
          <StyledInput
            onChange={handleChange}
            mr={"10px"}
            id={"fName"}
            label={"First Name"}
            placeholder={"Jessica"}
            defaultValue={commonFunctions.setDefaultFormValue(
              appState.pdfData,
              "fName"
            )}
          ></StyledInput>
          <StyledInput
            onChange={handleChange}
            id={"lName"}
            label={"Last Name"}
            placeholder={"Williams"}
            defaultValue={commonFunctions.setDefaultFormValue(
              appState.pdfData,
              "lName"
            )}
          ></StyledInput>
        </Box>
        <StyledInput
          onChange={handleChange}
          mb={"20px"}
          id={"profession"}
          label={"Profession Title"}
          placeholder={"Web Developer"}
          defaultValue={commonFunctions.setDefaultFormValue(
            appState.pdfData,
            "profession"
          )}
        ></StyledInput>
        <Box mb={"20px"} d={"flex"}>
          <StyledInput
            onChange={handleChange}
            mr={"10px"}
            id={"city"}
            label={"City"}
            placeholder={"Madison"}
            defaultValue={commonFunctions.setDefaultFormValue(
              appState.pdfData,
              "city"
            )}
          ></StyledInput>
          <StyledInput
            onChange={handleChange}
            id={"state"}
            label={"State/Province"}
            placeholder={"WI"}
            defaultValue={commonFunctions.setDefaultFormValue(
              appState.pdfData,
              "state"
            )}
          ></StyledInput>
        </Box>

        <Box mb={"20px"} d={"flex"}>
          <StyledInput
            onChange={handleChange}
            mr={"10px"}
            id={"phoneNumber"}
            label={"Phone Number"}
            placeholder={"(123)-456-789"}
            defaultValue={commonFunctions.setDefaultFormValue(
              appState.pdfData,
              "phoneNumber"
            )}
          ></StyledInput>
          <StyledInput
            onChange={handleChange}
            mr={"10px"}
            id={"email"}
            label={"Email"}
            placeholder={"email@email.com"}
            defaultValue={commonFunctions.setDefaultFormValue(
              appState.pdfData,
              "email"
            )}
          ></StyledInput>
        </Box>
        <Box mb={"20px"} d={"flex"}>
          <StyledInput
            onChange={handleChange}
            mr={"10px"}
            id={"linkedIn"}
            label={"LinkedIn profile URL (optional)"}
            placeholder={"Linkedin.com/your-profile"}
            defaultValue={commonFunctions.setDefaultFormValue(
              appState.pdfData,
              "linkedIn"
            )}
          ></StyledInput>
          <StyledInput
            onChange={handleChange}
            id={"website"}
            label={"Website URL (optional)"}
            placeholder={"yourWebsite.com"}
            defaultValue={commonFunctions.setDefaultFormValue(
              appState.pdfData,
              "website"
            )}
          ></StyledInput>
        </Box>
      </form>
    </Box>
  );
};

export default view(PersonalForm);

import React from "react";
import { Box } from "@chakra-ui/core";
import StyledInput from "./styledInput.js";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";

const PersonalForm = () => {
  function handleChange(e) {
    let name = e.target.id;
    let value = e.target.value;
    appState.formData[name] = value;
  }
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
            defaultValue={appState.formData.fName}
          ></StyledInput>
          <StyledInput
            onChange={handleChange}
            id={"lName"}
            label={"Last Name"}
            placeholder={"Williams"}
            defaultValue={appState.formData.lName}
          ></StyledInput>
        </Box>
        <StyledInput
          onChange={handleChange}
          mb={"20px"}
          id={"profession"}
          label={"Profession Title"}
          placeholder={"Web Developer"}
          defaultValue={appState.formData.profession}
        ></StyledInput>
        <Box mb={"20px"} d={"flex"}>
          <StyledInput
            onChange={handleChange}
            mr={"10px"}
            id={"city"}
            label={"City"}
            placeholder={"Madison"}
            defaultValue={appState.formData.city}
          ></StyledInput>
          <StyledInput
            onChange={handleChange}
            id={"state"}
            label={"State/Province"}
            placeholder={"WI"}
            defaultValue={appState.formData.state}
          ></StyledInput>
        </Box>

        <Box mb={"20px"} d={"flex"}>
          <StyledInput
            onChange={handleChange}
            mr={"10px"}
            id={"phoneNumber"}
            label={"Phone Number"}
            placeholder={"(123)-456-789"}
            defaultValue={appState.formData.phoneNumber}
          ></StyledInput>
          <StyledInput
            onChange={handleChange}
            mr={"10px"}
            id={"email"}
            label={"Email"}
            placeholder={"email@email.com"}
            defaultValue={appState.formData.email}
          ></StyledInput>
        </Box>
        <Box mb={"20px"} d={"flex"}>
          <StyledInput
            onChange={handleChange}
            mr={"10px"}
            id={"linkedIn"}
            label={"LinkedIn URL (optional)"}
            placeholder={"Linkedin.com/your-profile"}
            defaultValue={appState.formData.linkedIn}
          ></StyledInput>
          <StyledInput
            onChange={handleChange}
            id={"website"}
            label={"Website URL (optional)"}
            placeholder={"yourWebsite.com"}
            defaultValue={appState.formData.website}
          ></StyledInput>
        </Box>
      </form>
    </Box>
  );
};

export default view(PersonalForm);

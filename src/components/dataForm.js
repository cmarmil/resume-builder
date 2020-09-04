import React from "react";
import { Box, Input, FormLabel } from "@chakra-ui/core";
import DownloadButton from "../components/downloadButton.js";
import StyledInput from "../components/styledInput.js";
import appState from "../appState.js";
import { view } from "@risingstack/react-easy-state";
import { space } from "styled-system";

const DataForm = props => {
  return (
    <Box p={"20px"} backgroundColor="white" className="formContainer">
      <form className="formBox">
        <Box mb={"20px"} d={"flex"}>
          <StyledInput
            mr={"10px"}
            id={"fname"}
            label={"First Name"}
            placeholder={"Amy"}
          ></StyledInput>
          <StyledInput
            id={"lname"}
            label={"Last Name"}
            placeholder={"Smith"}
          ></StyledInput>
        </Box>
        <StyledInput
          mb={"20px"}
          id={"profession"}
          label={"Profession Title"}
          placeholder={"Web Developer"}
        ></StyledInput>
        <Box mb={"20px"} d={"flex"}>
          <StyledInput
            mr={"10px"}
            id={"city"}
            label={"City"}
            placeholder={"Madison"}
          ></StyledInput>
          <StyledInput
            id={"state"}
            label={"State/Province"}
            placeholder={"Wisconsin"}
          ></StyledInput>
        </Box>

        <Box mb={"20px"} d={"flex"}>
          <StyledInput
            mr={"10px"}
            id={"phoneNum"}
            label={"Phone Number"}
            placeholder={"(123)-456-789"}
          ></StyledInput>
          <StyledInput
            id={"email"}
            label={"Email"}
            placeholder={"youremail@email.com"}
          ></StyledInput>
        </Box>
      </form>
      {/* <DownloadButton></DownloadButton> */}
    </Box>
  );
};

export default view(DataForm);

import React from "react";
import { Box } from "@chakra-ui/core";
import StyledInput from "./styledInput.js";
import { view } from "@risingstack/react-easy-state";

class DataForm extends React.Component {
  constructor(props) {
    super();
    this.formRef = React.createRef();
  }
  render() {
    return (
      <Box p={"20px"} backgroundColor="white" className="formContainer">
        <form ref={this.formRef} id="personal-info-form" className="formBox">
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
              mr={"10px"}
              id={"email"}
              label={"Email"}
              placeholder={"youremail@email.com"}
            ></StyledInput>
            <StyledInput
              id={"website"}
              label={"Website"}
              placeholder={"yourwebsite.com"}
            ></StyledInput>
          </Box>
        </form>
      </Box>
    );
  }
}

export default view(DataForm);

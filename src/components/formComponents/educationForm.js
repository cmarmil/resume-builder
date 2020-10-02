import React from "react";
import { Box } from "@chakra-ui/core";
import StyledInput from "./styledInput.js";
import { view } from "@risingstack/react-easy-state";
import commonFunctions from 'commonFunctions.js';

class EducationForm extends React.Component {
  constructor() {
    super();
    this.formRef = React.createRef();
  }
  render() {
    return (
      <Box p={"20px"} backgroundColor="white" className="formContainer">
        <form ref={this.formRef} id="education-info-form" className="formBox">
          <Box mb={"20px"} d={"flex"}>
          <StyledInput
              mr={"10px"}
              id={"degreeLevel"}
              label={"Degree Level"}
              placeholder={'Bachelor of Arts'}
              defaultValue={commonFunctions.setDefaultFormValue(this.props.formData, 'degree')}
            ></StyledInput>
            <StyledInput
              mr={"10px"}
              id={"areaOfStudy"}
              label={"Area of Study"}
              placeholder={'Mathematics'}
              defaultValue={commonFunctions.setDefaultFormValue(this.props.formData, 'areaOfStudy')}
            ></StyledInput>
            <StyledInput
              mr={"10px"}
              id={"dates"}
              label={"Dates Attended"}
              placeholder={'August 2008 - May 2012'}
              defaultValue={commonFunctions.setDefaultFormValue(this.props.formData, 'dates')}
            ></StyledInput>
          </Box>
          <Box mb={"20px"} d={"flex"}>
          <StyledInput
              mr={"10px"}
              id={"schoolName"}
              label={"School Name"}
              placeholder={'Florida State University'}
              defaultValue={commonFunctions.setDefaultFormValue(this.props.formData, 'schoolName')}
            ></StyledInput>
          </Box>
        </form>
      </Box>
    );
  }
}

export default view(EducationForm);

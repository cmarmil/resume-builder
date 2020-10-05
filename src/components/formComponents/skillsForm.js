import React from "react";
import { Box } from "@chakra-ui/core";
import SkillsEditor from "components/formComponents/skillsEditor.js";
import { view } from "@risingstack/react-easy-state";

class SkillsForm extends React.Component {
  constructor(props) {
    super();
    this.formRef = React.createRef();
  }
  render() {
    return (
      <Box p={"20px"}>
        <p className="quillFormLabel">Personal Skills List</p>
        <form ref={this.formRef} id="skills-form" className="formBox">
          <Box mb={"20px"} d={"flex"}>
            <SkillsEditor></SkillsEditor>
          </Box>
        </form>
      </Box>
    );
  }
}

export default view(SkillsForm);

import React from "react";
import { Box } from "@chakra-ui/core";
import ListEditor from "components/formComponents/listEditor.js";
import { view } from "@risingstack/react-easy-state";
import appState from "appState.js";

const SkillsForm = () => {
  function handleChange(value) {
    appState.formData.skills = value;
  }
  return (
    <Box p={"20px"}>
      <form id="skills-form" className="formBox">
        <Box mb={"20px"} d={"flex"}>
          <ListEditor
            isListContent={true}
            contentItems={appState.pdfData.skills}
            handleChange={handleChange}
          ></ListEditor>
        </Box>
      </form>
    </Box>
  );
};

export default view(SkillsForm);

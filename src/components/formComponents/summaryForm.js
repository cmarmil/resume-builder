import React from "react";
import { Box } from "@chakra-ui/core";
import StyledTextArea from "./styledTextArea.js";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";

  function handleChange(e) {
    appState.formData.summary = e.target.value;
  };

  const SummaryForm = () => {
    return (
      <Box p={"20px"}>
        <form id="summary-info-form" className="formBox">
          <Box mb={"20px"} d={"flex"}>
            <StyledTextArea
              onChange={handleChange}
              id={"summary"}
              label={"Summary"}
              placeholder={
                "Creative Software Engineer with 4 years of experience in computer science, programming, and UX design. Enthusiastic team player and avid learner."
              }
              value={appState.pdfData.summary}
            ></StyledTextArea>
          </Box>
        </form>
      </Box>
    );
}

export default view(SummaryForm);

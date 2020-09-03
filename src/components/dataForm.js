import React from "react";
import { Box, Input } from "@chakra-ui/core";
import DownloadButton from "../components/downloadButton.js";
import appState from "../appState.js";
import { view } from "@risingstack/react-easy-state";

const DataForm = props => {
  function test(e) {
    /* appState.name = e.target.value; */
  }

  return (
    <Box backgroundColor="white" className="formContainer">
      <form>
        <Input onChange={test} placeholder="First and Last Name" />
      </form>
      <DownloadButton></DownloadButton>
    </Box>
  );
};

export default view(DataForm);

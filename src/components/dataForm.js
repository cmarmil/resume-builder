import React from "react";
import { Box, Input} from "@chakra-ui/core";
import DownloadButton from "../components/downloadButton.js";

const DataForm = (props) => {
  return (
    <Box backgroundColor="white" className="formContainer">
        <form>
        <Input placeholder="First and Last Name" />
        </form>
        <DownloadButton></DownloadButton>
    </Box>
  );
};

export default DataForm;

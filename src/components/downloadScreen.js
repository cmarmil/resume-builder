import React from "react";
import { Box, Image, Text } from "@chakra-ui/core";
import { view } from "@risingstack/react-easy-state";
import DownloadButton from "components/downloadButton.js";
import SuccessImage from "assets/successIllustration.png";

export const DownloadScreen = () => (
  <Box className="formContainer">
    <Text fontSize={"120%"} pt="50px" mb="50px" mr="20px" ml="20px">
      All Done! Your PDF resume is ready for download.
    </Text>
    <DownloadButton></DownloadButton>
    <Image className="successImage" src={SuccessImage}></Image>
  </Box>
);

export default view(DownloadScreen);

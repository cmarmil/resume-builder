import React from "react";
import { view } from "@risingstack/react-easy-state";
import appState from "appState";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Text
} from "@chakra-ui/core";

function FontMenu() {
  function setFont(e) {
    let fontName = e.target.innerHTML.split(" ").join("");
    appState.pdfFont = fontName;
  }
  return (
    <Box d="flex" p="20px" alignItems="center">
      <Menu>
        <MenuButton w="100%" as={Button} rightIcon="chevron-down">
          Font Family
        </MenuButton>
        <MenuList w="calc(50vw - 40px)">
          <MenuItem fontFamily="OpenSans" onClick={setFont}>
            Open Sans
          </MenuItem>
          <MenuItem fontFamily="Merriweather" onClick={setFont}>
            Merriweather
          </MenuItem>
          <MenuItem fontFamily="Montserrat" onClick={setFont}>
            Montserrat
          </MenuItem>
          <MenuItem fontFamily="Roboto" onClick={setFont}>
            Roboto
          </MenuItem>
          <MenuItem fontFamily="SourceCodePro" onClick={setFont}>
            Source Code Pro
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default view(FontMenu);

import React from "react";
import { Button, Tooltip } from "@chakra-ui/core";

const CustomToolbar = props => {
  if (props.isList) {
    return (
      <div id="toolbar">
        <Tooltip
          hasArrow
          label="Format selection"
          placement="right-end"
          backgroundColor="#3182ce"
        >
          <button className="ql-list" value="bullet" />
        </Tooltip>

        <Button onClick={props.handleSave} className="ql-saveBtn">
          Save
        </Button>
      </div>
    );
  } else {
    return (
      <div id="toolbar">
        <Tooltip
          hasArrow
          label="Format selection"
          placement="right-end"
          backgroundColor="#3182ce"
        >
          <button className="ql-list" value="bullet" />
        </Tooltip>

        <Tooltip
          hasArrow
          label="Hyperlink Selection"
          placement="right-end"
          backgroundColor="#3182ce"
        >
          <button className="ql-link" value="link" />
        </Tooltip>

        <Button onClick={props.handleSave} className="ql-saveBtn">
          Save
        </Button>
      </div>
    );
  }
};

export default CustomToolbar;

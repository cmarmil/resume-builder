import React from "react";
import { Button, Tooltip } from "@chakra-ui/core";

const CustomToolbar = props => (
  <div id="toolbar">
    {props.isList ? (
      <Tooltip
        hasArrow
        label="Format selection"
        placement="right-end"
        backgroundColor="#3182ce"
      >
        <button className="ql-list" value="bullet" />
      </Tooltip>
    ) : null}
    <button class="ql-link" type="button"></button>

    <Button onClick={props.handleSave} className="ql-saveBtn">
      Save
    </Button>
  </div>
);

export default CustomToolbar;

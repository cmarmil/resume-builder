import React from 'react';
import {Button } from "@chakra-ui/core";

const CustomToolbar = (props) => (
    <div id="toolbar">
      <button className="ql-list" value="bullet" />
      <Button onClick={props.handleSave} className="ql-saveBtn">Save</Button>
    </div>
  );

export default CustomToolbar;
import React from "react";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/core";
import { view } from "@risingstack/react-easy-state";
import appState from "appState.js";

function JobDetailTag(props) {
  function handleSubmit(value) {
    if (!value) {
      props.form.splice(props.index, 1);
    } else if (value === props.bullet) {
      return;
    } else {
        props.form[props.index] = value;
    }
  }
  return (
    <ul>
      <li className="jobDetailTag">
        <Editable
          className="jobDetailTagEditable"
          textAlign="left"
          defaultValue={props.bullet}
          onSubmit={handleSubmit}
        >
          <EditablePreview />
          <EditableInput />
        </Editable>
      </li>
    </ul>
  );
}

export default view(JobDetailTag);

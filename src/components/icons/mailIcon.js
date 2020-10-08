import React from "react";
import { Svg, Path } from "@react-pdf/primitives";
import { view } from "@risingstack/react-easy-state";
import appState from "appState.js";

//icons from evericon
function MailIcon(props) {
  return (
    <Svg style={props.style}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <Path
        fill-rule="evenodd"
        d="M21,7.38246601 L21,5 L3,5 L3,7.38199365 L12.0000224,11.8824548 L21,7.38246601 Z M21,9.61853399 L11.9999776,14.1185452 L3,9.61810635 L3,19 L21,19 L21,9.61853399 Z M3,3 L21,3 C22.1045695,3 23,3.8954305 23,5 L23,19 C23,20.1045695 22.1045695,21 21,21 L3,21 C1.8954305,21 1,20.1045695 1,19 L1,5 C1,3.8954305 1.8954305,3 3,3 Z"
        fill={appState.templateColor}
      />
    </Svg>
  );
}

export default view(MailIcon);

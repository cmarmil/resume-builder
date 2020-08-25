import React from "react";
import { Svg, Path } from "@react-pdf/primitives";
//icons from evericon
function webpageIcon(props) {
  return (
    <Svg
      style={props.style}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <Path
        fill-rule="evenodd"
        d="M21,9 L3,9 L3,19 L21,19 L21,9 Z M21,7 L21,5 L3,5 L3,7 L21,7 Z M3,21 C1.8954305,21 1,20.1045695 1,19 L1,5 C1,3.8954305 1.8954305,3 3,3 L21,3 C22.1045695,3 23,3.8954305 23,5 L23,19 C23,20.1045695 22.1045695,21 21,21 L3,21 Z" fill={props.fill}
      />
    </Svg>
  );
}

export default webpageIcon;

import React from "react";
import { Svg, Path } from "@react-pdf/primitives";
//icons from evericon
function LinkedInIcon(props) {
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
        d="M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M4,4 L4,20 L20,20 L20,4 L4,4 Z M11.4521492,9.45214919 C11.935252,9.15825757 12.4822556,9 13,9 L14,9 C15.3939534,9 17,10.1471761 17,12 L17,16 L15,16 L15,12 C15,11.4242524 14.4060466,11 14,11 L13,11 C12.5939534,11 12,11.4242524 12,12 L12,16 L10,16 L10,9 L11,9 L11.4521492,9.45214919 Z M8,8 C7.44771525,8 7,7.55228475 7,7 C7,6.44771525 7.44771525,6 8,6 C8.55228475,6 9,6.44771525 9,7 C9,7.55228475 8.55228475,8 8,8 Z M9,16 L7,16 L7,9 L9,9 L9,16 Z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default LinkedInIcon;

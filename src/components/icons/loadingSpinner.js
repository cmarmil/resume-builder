import React from "react";

function LoadingSpinner() {
  return (
    <svg
    style={{
      margin: "auto",
    }}
    width={200}
    height={200}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    display="block"
    stroke="transparent"
  >
    <circle
      cx={50}
      cy={50}
      r={32}
      strokeWidth={8}
      stroke="#3949AB"
      strokeDasharray="50.26548245743669 50.26548245743669"
      fill="none"
      strokeLinecap="round"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        keyTimes="0;1"
        values="0 50 50;360 50 50"
      />
    </circle>
  </svg>
  );
}

export default LoadingSpinner;

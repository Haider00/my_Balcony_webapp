import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg
    data-name="Filter Icon"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={42}
    {...props}
  >
    <g data-name="filter icon">
      <path
        data-name="Path 183"
        d="M.32 2.516c3.042 4.046 8.672 11.546 8.672 11.546v9.375A1.541 1.541 0 0 0 10.5 25h3.016a1.541 1.541 0 0 0 1.508-1.562v-9.376s5.61-7.5 8.657-11.547A1.564 1.564 0 0 0 22.49 0H1.511A1.564 1.564 0 0 0 .32 2.516z"
      />
      <text
        transform="translate(12 39)"
        style={{
          fontSize: 10,
          fontFamily: "Roboto-Regular,Roboto",
        }}
      >
        <tspan x={-9.956} y={0}>
          {"filter"}
        </tspan>
      </text>
    </g>
  </svg>
);

export default SvgComponent;

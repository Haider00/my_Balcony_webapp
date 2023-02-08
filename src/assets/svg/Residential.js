import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={163} height={94} {...props}>
    <g
      data-name="Rectangle 4"
      style={{
        fill: "#fff",
        stroke: props.fillBox || "#000",
        strokeWidth: 3,
      }}
    >
      <rect
        width={163}
        height={94}
        rx={16}
        style={{
          stroke: "none",
        }}
        stroke="none"
      />
      <rect
        x={1.5}
        y={1.5}
        width={160}
        height={91}
        rx={14.5}
        style={{
          fill: props.fillBox || "none",
        }}
      />
    </g>
    <text
      data-name="Residential"
      transform="translate(47 33)"
      style={{
        fontSize: 14,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"Residential"}
      </tspan>
    </text>
    <path
      data-name="Path 39"
      d="M0 0h34.333v34.333H0z"
      style={{
        fill: props.fillBox || "none",
      }}
      transform="translate(64.005 42.833)"
    />
    <path
      data-name="Path 40"
      d="M78.31 71.444v-8.583h5.722v8.583h7.153V60h4.292L81.172 47.125 66.866 60h4.292v11.444z"
    />
  </svg>
);

export default SvgComponent;

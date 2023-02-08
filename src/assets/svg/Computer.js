import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={119} height={94} {...props}>
    <g
      data-name="Rectangle 4"
      style={{
        fill: "#fff",
        stroke: props.fillBox || "#000",
        strokeWidth: 3,
      }}
    >
      <rect
        width={119}
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
        width={116}
        height={91}
        rx={14.5}
        style={{
          fill: props.fillBox || "none",
        }}
      />
    </g>
    <g
      data-name="Rectangle 15"
      style={{
        fill: "#fff",
        stroke: props.fillBox || "#000",
        strokeWidth: 3,
      }}
    >
      <rect
        width={119}
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
        width={116}
        height={91}
        rx={14.5}
        style={{
          fill: props.fillBox || "none",
        }}
      />
    </g>
    <text
      data-name="Computer"
      transform="translate(23 34)"
      style={{
        fontSize: 17,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"Computer"}
      </tspan>
    </text>
    <path
      data-name="Path 33"
      d="M0 0h33.5v33.5H0zm0 0h33.5v33.5H0z"
      transform="translate(31.35 43)"
      style={{
        fill: props.fillBox || "none",
      }}
    />
    <path
      data-name="Path 36"
      d="M0 0h34.5v34.5H0z"
      transform="translate(40.499 43)"
      style={{
        fill: props.fillBox || "none",
      }}
    />
    <path
      data-name="Path 37"
      d="M69.249 68.875A2.871 2.871 0 0 0 72.11 66l.014-14.375a2.883 2.883 0 0 0-2.875-2.875h-23a2.883 2.883 0 0 0-2.875 2.875V66a2.883 2.883 0 0 0 2.875 2.875h-5.75v2.875h34.5v-2.875zm-23-17.25h23V66h-23z"
    />
  </svg>
);

export default SvgComponent;

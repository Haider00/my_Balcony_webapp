import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg
    data-name="Printing, Printer"
    xmlns="http://www.w3.org/2000/svg"
    width={76.25}
    height={94}
    {...props}
  >
    <g
      data-name="Rectangle 4"
      style={{
        fill: "#fff",
        stroke: props.fillBox || "#000",
        strokeWidth: 3,
      }}
    >
      <rect
        width={76.25}
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
        width={73.25}
        height={91}
        rx={14.5}
        style={{
          fill: props.fillBox || "none",
        }}
      />
    </g>
    <text
      data-name="Printing, Printer"
      transform="translate(18 29)"
      style={{
        fontSize: 11,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"Printing,"}
      </tspan>
      <tspan x={0} y={13}>
        {"Printer"}
      </tspan>
    </text>
    <path
      data-name="Path 52"
      d="M45 61H31a3 3 0 0 0-3 3v6h4v4h12v-4h4v-6a3 3 0 0 0-3-3zm-3 11h-8v-5h8zm3-7a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm-1-9H32v4h12z"
    />
  </svg>
);

export default SvgComponent;

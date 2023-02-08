import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg
    data-name="TV, Television"
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
      data-name="TV, Television"
      transform="translate(12.75 29)"
      style={{
        fontSize: 11,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"TV,"}
      </tspan>
      <tspan x={0} y={13}>
        {"Television"}
      </tspan>
    </text>
    <path
      data-name="Path 64"
      d="M48.917 52.938H28.292A2.3 2.3 0 0 0 26 55.23v13.75a2.3 2.3 0 0 0 2.292 2.292h5.729v2.292h9.167v-2.293h5.729a2.289 2.289 0 0 0 2.28-2.292l.011-13.75a2.3 2.3 0 0 0-2.291-2.291zm0 16.042H28.292V55.23h20.625z"
    />
  </svg>
);

export default SvgComponent;

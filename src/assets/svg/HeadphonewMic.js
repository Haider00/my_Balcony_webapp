import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={77.001} height={94} {...props}>
    <g data-name="Headset w. Mic">
      <g
        data-name="Rectangle 4"
        style={{
          fill: "#fff",
          stroke: props.fillBox || "#000",
          strokeWidth: 3,
        }}
      >
        <rect
          width={77}
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
          width={74}
          height={91}
          rx={14.5}
          style={{
            fill: props.fillBox || "none",
          }}
        />
      </g>
      <text
        data-name="Headset, w. Mic."
        transform="translate(16.11 30)"
        style={{
          fontSize: 11,
          fontFamily: "Roboto-Regular,Roboto",
        }}
      >
        <tspan x={0} y={0}>
          {"Headset,"}
        </tspan>
        <tspan x={0} y={13}>
          {"w. Mic."}
        </tspan>
      </text>
      <path
        data-name="Path 78"
        d="M40.631 52.056a9.5 9.5 0 0 0-9.5 9.5v7.389a3.162 3.162 0 0 0 3.167 3.167h3.166v-8.445h-4.222v-2.111a7.389 7.389 0 0 1 14.778 0v2.111h-4.222v8.444h4.222v1.056h-7.389v2.111h6.333a3.162 3.162 0 0 0 3.167-3.166V61.556a9.5 9.5 0 0 0-9.5-9.5z"
      />
    </g>
  </svg>
);

export default SvgComponent;

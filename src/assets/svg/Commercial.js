import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg
    data-name="Component 14 \u2013 1"
    xmlns="http://www.w3.org/2000/svg"
    width={162}
    height={94}
    {...props}
  >
    <g data-name="Group 89">
      <g
        data-name="Rectangle 4"
        style={{
          fill: "#fff",
          stroke: props.fillBox || "#000",
          strokeWidth: 3,
        }}
      >
        <rect
          width={162}
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
          width={159}
          height={91}
          rx={14.5}
          style={{
            fill: props.fillBox || "none",
          }}
        />
      </g>
    </g>
    <text
      data-name="Commercial, Office"
      transform="translate(22 33)"
      style={{
        fontSize: 14,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"Commercial, Office"}
      </tspan>
    </text>
    <g data-name="Group 105">
      <path
        data-name="Rectangle 16"
        transform="translate(62 41)"
        style={{
          fill: props.fillBox || "none",
        }}
        d="M0 0h38v38H0z"
      />
    </g>
    <g data-name="Group 106">
      <path
        data-name="Path 38"
        d="M89.31 58.355V45.733H73.532v6.311h-6.311v22.089h12.622v-6.311h3.156v6.311h12.622V58.355zM73.532 70.977h-3.155v-3.155h3.155zm0-6.311h-3.155v-3.155h3.155zm0-6.311h-3.155V55.2h3.155zm6.311 6.311h-3.155v-3.155h3.156zm0-6.311h-3.155V55.2h3.156zm0-6.311h-3.155v-3.155h3.156zm6.311 12.622h-3.155v-3.155h3.156zm0-6.311h-3.155V55.2h3.156zm0-6.311h-3.155v-3.155h3.156zm6.311 18.933H89.31v-3.155h3.156zm0-6.311H89.31v-3.155h3.156z"
      />
    </g>
  </svg>
);

export default SvgComponent;

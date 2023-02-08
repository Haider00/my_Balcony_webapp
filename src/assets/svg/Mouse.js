import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={96} height={94} {...props}>
    <g
      data-name="Rectangle 4"
      style={{
        fill: "#fff",
        stroke: props.fillBox || "#000",
        strokeWidth: 3,
      }}
    >
      <rect
        width={96}
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
        width={93}
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
        width={96}
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
        width={93}
        height={91}
        rx={14.5}
        style={{
          fill: props.fillBox || "none",
        }}
      />
    </g>
    <text
      data-name="Mouse"
      transform="translate(30 33)"
      style={{
        fontSize: 13,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"Mouse"}
      </tspan>
    </text>
    <path
      data-name="Path 35"
      d="M50.563 48.137v8.43H58a8.488 8.488 0 0 0-7.437-8.43zM41 62.938a8.5 8.5 0 0 0 17 0v-4.25H41zm7.438-14.8A8.488 8.488 0 0 0 41 56.567h7.438v-8.43z"
    />
    <path
      data-name="Path 34"
      d="M0 0h25.5v25.5H0z"
      transform="translate(36.75 47)"
      style={{
        fill: "none",
      }}
    />
    <path
      data-name="Path 33"
      d="M0 0h33.5v33.5H0zm0 0h33.5v33.5H0z"
      transform="translate(15.75 43)"
      style={{
        fill: "none",
      }}
    />
  </svg>
);

export default SvgComponent;

import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg
    data-name="Wheelchair Accessible"
    xmlns="http://www.w3.org/2000/svg"
    width={80}
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
        width={80}
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
        width={77}
        height={91}
        rx={14.5}
        style={{
          fill: props.fillBox || "none",
        }}
      />
    </g>
    <text
      data-name="Wheelchair Accessible"
      transform="translate(13 29)"
      style={{
        fontSize: 11,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"Wheelchair"}
      </tspan>
      <tspan x={0} y={13}>
        {"Accessible"}
      </tspan>
    </text>
    <circle
      data-name="Ellipse 14"
      cx={2.5}
      cy={2.5}
      r={2.5}
      transform="translate(37 52)"
    />
    <path
      data-name="Path 71"
      d="M48.222 65.889v-2.445a6.862 6.862 0 0 1-4.974-2.236l-1.577-1.75a2.364 2.364 0 0 0-.746-.55c-.012 0-.012-.012-.024-.012h-.012a2.44 2.44 0 0 0-1.454-.318 2.492 2.492 0 0 0-2.212 2.53v7.223a2.452 2.452 0 0 0 2.444 2.444h6.111v6.111h2.444v-6.719a2.452 2.452 0 0 0-2.444-2.444h-3.667v-4.218a10.427 10.427 0 0 0 6.111 2.384zM40.681 72A3.668 3.668 0 1 1 36 67.319v-2.53A6.112 6.112 0 1 0 43.211 72z"
    />
  </svg>
);

export default SvgComponent;

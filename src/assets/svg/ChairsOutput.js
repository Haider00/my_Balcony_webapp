import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={110} height={94} {...props}>
    <g
      data-name="Rectangle 4"
      style={{
        stroke: props.fillBox || "#000",
        fill: "#fff",
        strokeWidth: 3,
      }}
    >
      <rect
        width={110}
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
        width={107}
        height={91}
        rx={14.5}
        style={{
          fill: props.fillBox || "none",
        }}
      />
    </g>
    <text
      data-name="Chairs"
      transform="translate(56.341 35.317)"
      style={{
        fontFamily: "Roboto-Regular,Roboto",
        fontSize: 14,
      }}
    >
      <tspan x={0} y={0}>
        {"Chairs"}
      </tspan>
    </text>
    <text
      data-name={0}
      transform="translate(13.659 58.067)"
      style={{
        fontSize: 16,
        fontFamily: "Roboto-Regular,Roboto",
        stroke: "#000",
      }}
    >
      <tspan x={0} y={0}>
        {props.total || "0"}
      </tspan>
    </text>
    {/* <path
      onClick={() => {
        props.onDecrement();
      }}
      data-name="Path 23"
      d="M37.597 57.251a8.216 8.216 0 1 0 8.216 8.216 8.219 8.219 0 0 0-8.216-8.216zm4.108 9.038h-8.216v-1.644h8.216z"
    />
    <path
      onClick={() => {
        props.onIncrement();
      }}
      data-name="Path 25"
      d="M37.597 30.96a8.216 8.216 0 1 0 8.216 8.216 8.219 8.219 0 0 0-8.216-8.216zm4.108 9.038h-3.286v3.286h-1.644v-3.286h-3.286v-1.644h3.286v-3.286h1.643v3.286h3.286z"
    /> */}
    <path
      data-name="Path 55"
      d="M66.381 67.317v4h4v-4h13.333v4h4v-8H66.381zm20-10.667h4v4h-4zm-22.667 0h4v4h-4zm20 4H70.381V49.984a2.675 2.675 0 0 1 2.666-2.667h8a2.675 2.675 0 0 1 2.667 2.667z"
    />
  </svg>
);

export default SvgComponent;

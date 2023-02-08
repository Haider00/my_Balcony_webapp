import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg
    data-name="Medium Table"
    xmlns="http://www.w3.org/2000/svg"
    width={185}
    height={94}
    {...props}
  >
    <g
      data-name="Rectangle 4"
      style={{
        stroke: props.fillBox || "#000",
        fill: "#fff",
        strokeWidth: 3,
      }}
    >
      <rect
        width={185}
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
        width={182}
        height={91}
        rx={14.5}
        style={{
          fill: props.fillBox || "none",
        }}
      />
    </g>
    <path
      data-name="Line 40"
      transform="translate(77.734 47.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        fill: props.fillBox || "none",
        stroke: "#000",
      }}
      d="M0 0h66"
    />
    <path
      data-name="Line 35"
      transform="translate(134.48 47.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        fill: props.fillBox || "none",
        stroke: "#000",
      }}
      d="M9 0 0 9"
    />
    <path
      data-name="Line 31"
      transform="translate(70.006 56.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        fill: props.fillBox || "none",
        stroke: "#000",
      }}
      d="M0 0h9.5"
    />
    <path
      data-name="Line 29"
      transform="translate(134.661 56.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        fill: props.fillBox || "none",
        stroke: "#000",
      }}
      d="M0 25V0"
    />
    <path
      data-name="Line 36"
      transform="translate(143.733 47.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        fill: props.fillBox || "none",
        stroke: "#000",
      }}
      d="M0 25V0"
    />
    <path
      data-name="Line 39"
      transform="translate(79.355 56.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        fill: props.fillBox || "none",
        stroke: "#000",
      }}
      d="M0 16V0"
    />
    <path
      data-name="Line 95"
      transform="translate(70.5 47.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        fill: props.fillBox || "none",
        stroke: "#000",
      }}
      d="m0 9 7.233-9"
    />
    <path
      data-name="Path 201"
      d="m0 0-.09.167L0 25"
      transform="translate(70.105 56.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        fill: props.fillBox || "none",
        stroke: "#000",
      }}
    />
    <path
      data-name="Line 38"
      transform="translate(70.011 47.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        fill: props.fillBox || "none",
        stroke: "#000",
      }}
      d="m0 9 9-9"
    />
    <text
      data-name="Medium Table"
      transform="translate(53 34)"
      style={{
        fontFamily: "Roboto-Regular,Roboto",
        fontSize: 17,
      }}
    >
      <tspan x={0} y={0}>
        {"Medium Table"}
      </tspan>
    </text>
    <path
      onClick={() => {
        props.onDecrement();
      }}
      data-name="Path 23"
      d="M35.141 54.934a8.216 8.216 0 1 0 8.216 8.216 8.219 8.219 0 0 0-8.216-8.216zm4.108 9.038h-8.216v-1.644h8.216z"
    />
    <path
      onClick={() => {
        props.onIncrement();
      }}
      data-name="Path 25"
      d="M35.141 28.643a8.216 8.216 0 1 0 8.216 8.216 8.219 8.219 0 0 0-8.216-8.216zm4.108 9.038h-3.286v3.286h-1.644v-3.286h-3.286v-1.644h3.286v-3.286h1.643v3.286h3.286z"
    />
    <text
      data-name={0}
      transform="translate(8.85 54)"
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
    <path
      data-name="Path 57"
      d="m77.108 46.727 58.298.571s7.9-1.217 7.9 1.267-7.9 8.667-7.9 8.667h-57.55l-8.663-1.325z"
    />
  </svg>
);

export default SvgComponent;

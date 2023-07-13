import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg
    data-name="Small Table"
    xmlns="http://www.w3.org/2000/svg"
    width={140}
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
        width={140}
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
        width={137}
        height={91}
        rx={14.5}
        style={{
          fill: props.fillBox || "none",
        }}
      />
    </g>
    <path
      data-name="Line 34"
      transform="translate(72.966 54.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        fill: props.fillBox || "none",
        stroke: "#000",
      }}
      d="M0 0h37.534"
    />
    <path
      data-name="Line 40"
      transform="translate(82.5 45.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        fill: props.fillBox || "none",
        stroke: "#000",
      }}
      d="M0 0h36.5"
    />
    <path
      data-name="Line 35"
      transform="translate(110.3 45.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        fill: props.fillBox || "none",
        stroke: "#000",
      }}
      d="M9 0 0 9"
    />
    <path
      data-name="Line 29"
      transform="translate(110.3 54.5)"
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
      transform="translate(119.3 45.5)"
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
      transform="translate(82.685 54.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        fill: props.fillBox || "none",
        stroke: "#000",
      }}
      d="M0 16V0"
    />
    <path
      data-name="Line 96"
      transform="translate(72.5 45.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        fill: props.fillBox || "none",
        stroke: "#000",
      }}
      d="m0 9 10-9"
    />
    <path
      data-name="Line 30"
      transform="translate(72.5 54.496)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        fill: props.fillBox || "none",
        stroke: "#000",
      }}
      d="M0 0v25"
    />
    <path
      data-name="Line 38"
      transform="translate(73.921 45.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        fill: props.fillBox || "none",
        stroke: "#000",
      }}
      d="m0 9 9-9"
    />
    <text
      data-name="Small Table"
      transform="translate(57 32)"
      style={{
        fontFamily: "Roboto-Regular,Roboto",
        fontSize: 14,
      }}
    >
      <tspan x={0} y={0}>
        {"Small Table"}
      </tspan>
    </text>
    {/* <path
      onClick={() => {
        props.onDecrement();
      }}
      data-name="Path 23"
      d="M35.9 51.764a8.409 8.409 0 1 0 8.409 8.409 8.412 8.412 0 0 0-8.409-8.409zm4.2 9.25h-8.409v-1.682H40.1z"
    />
    <path
      onClick={() => {
        props.onIncrement();
      }}
      data-name="Path 25"
      d="M35.9 23.854a8.409 8.409 0 1 0 8.409 8.409 8.412 8.412 0 0 0-8.409-8.409zm4.2 9.25h-3.359v3.364h-1.682v-3.364h-3.368v-1.682h3.368v-3.368h1.682v3.368h3.364z"
    /> */}
    <text
      data-name={0}
      transform="translate(14 52.5)"
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
      data-name="Path 56"
      d="M81.226 46.232h34.178s4-1.86 4 0-7 7.438-7 7.438H78.815s-5.588 1.86-5.588 0 7.999-7.438 7.999-7.438z"
    />
  </svg>
);

export default SvgComponent;

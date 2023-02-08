import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg
    data-name="Backyard &amp; Frontyard"
    xmlns="http://www.w3.org/2000/svg"
    width={77}
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
      data-name="Backyard, Frontyard"
      transform="translate(14.546 28)"
      style={{
        fontSize: 11,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"Backyard,"}
      </tspan>
      <tspan x={0} y={13}>
        {"Frontyard"}
      </tspan>
    </text>
    <path
      data-name="Union 11"
      d="M38.657 72.7v.3h-8a10.219 10.219 0 0 0-.2-2 9.787 9.787 0 0 0-.669-2.069A8 8 0 0 1 36.667 65a8.3 8.3 0 0 1 2 .26 8.05 8.05 0 0 0-1.963.8A9 9 0 0 1 44.667 75a8.97 8.97 0 0 1-6.01-2.3zm-5.75-1.7h4.274a8.946 8.946 0 0 1-1.485-4.258A8.051 8.051 0 0 0 32.907 71zm20.76-5a9 9 0 0 1-9 9 9 9 0 0 1 9-9zm-35 7v-2h5.749a8.034 8.034 0 0 0-5.749-5.74 8.3 8.3 0 0 1 2-.26 8 8 0 0 1 8 8zm23.5-7.5.021-.189A2.5 2.5 0 1 1 39.696 61a2.5 2.5 0 1 1 2.492-4.31l-.021-.19a2.5 2.5 0 1 1 5 0l-.021.189A2.5 2.5 0 1 1 49.637 61a2.5 2.5 0 1 1-2.491 4.31l.021.189a2.5 2.5 0 0 1-5 0zm0-4.5a2.5 2.5 0 1 0 2.5-2.5 2.5 2.5 0 0 0-2.5 2.5zm-13.5 6a7.984 7.984 0 0 1 7.729-7.979 10.029 10.029 0 0 0-4.089 5 10.022 10.022 0 0 0-3.64 3zm-3.039-2.68c.01-.2.039-.4.039-.609a10.921 10.921 0 0 0-2.3-6.711 8.531 8.531 0 0 1 4.72 4.851 9.9 9.9 0 0 0-1.24 3.29 9.932 9.932 0 0 0-1.219-.821z"
    />
  </svg>
);

export default SvgComponent;

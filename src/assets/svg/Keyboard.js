import * as React from "react";

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={100} height={94} {...props}>
    <g
      data-name="Rectangle 4"
      style={{
        fill: "#fff",
        stroke: "#000",
        strokeWidth: 3,
      }}
    >
      <rect
        width={100}
        height={94}
        rx={16}
        style={{
          stroke: props.fillBox || "none",
        }}
        stroke="none"
      />
      <rect
        x={1.5}
        y={1.5}
        width={97}
        height={91}
        rx={14.5}
        style={{
          fill: "none",
        }}
      />
    </g>
    <g
      data-name="Rectangle 15"
      style={{
        fill: props.fillBox || "#fff",
        stroke: props.fillBox || "#000",
        strokeWidth: 3,
      }}
    >
      <rect
        width={100}
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
        width={97}
        height={91}
        rx={14.5}
        style={{
          fill: "none",
        }}
      />
    </g>
    <text
      data-name="Keyboard"
      transform="translate(23 33)"
      style={{
        fontSize: 13,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"Keyboard"}
      </tspan>
    </text>
    <path
      data-name="Path 32"
      d="M61.167 49.979H38.834a2.788 2.788 0 0 0-2.778 2.792l-.014 13.958a2.8 2.8 0 0 0 2.792 2.792h22.333a2.8 2.8 0 0 0 2.792-2.792V52.771a2.8 2.8 0 0 0-2.792-2.792zm-12.562 4.188h2.792v2.792h-2.792zm0 4.188h2.792v2.792h-2.792zm-4.188-4.188h2.792v2.792h-2.792zm0 4.188h2.792v2.792h-2.792zm-1.4 2.792H40.23v-2.793h2.791zm0-4.188H40.23v-2.792h2.791zm12.567 9.77H44.417v-2.792h11.167zm0-5.583h-2.792v-2.792h2.792zm0-4.188h-2.792v-2.791h2.792zm4.188 4.188H56.98v-2.792h2.792zm0-4.188H56.98v-2.791h2.792z"
    />
    <path
      data-name="Path 33"
      d="M0 0h33.5v33.5H0zm0 0h33.5v33.5H0z"
      transform="translate(27.67 43)"
      style={{
        fill: "none",
      }}
    />
  </svg>
);

export default SvgComponent;

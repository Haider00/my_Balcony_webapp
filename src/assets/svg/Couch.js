import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={65} height={94} {...props}>
    <g
      data-name="Rectangle 4"
      style={{
        fill: "#fff",
        stroke: props.fillBox || "#000",
        strokeWidth: 3,
      }}
    >
      <rect
        width={65}
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
        width={62}
        height={91}
        rx={14.5}
        style={{
          fill: props.fillBox || "none",
        }}
      />
    </g>
    <text
      data-name="Couch"
      transform="translate(17 30)"
      style={{
        fontSize: 11,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"Couch"}
      </tspan>
    </text>
    <path
      data-name="Path 62"
      d="M45.246 58.952a2.6 2.6 0 0 0-2.59 2.59v3.886H24.527v-3.886a2.59 2.59 0 0 0-5.181 0v6.476a2.6 2.6 0 0 0 2.59 2.59h23.31a2.6 2.6 0 0 0 2.59-2.59v-6.476a2.6 2.6 0 0 0-2.59-2.59zm-3.882-6.476H25.822a2.6 2.6 0 0 0-2.59 2.59v2.785a3.882 3.882 0 0 1 2.59 3.64v2.642h15.542v-2.629a3.869 3.869 0 0 1 2.59-3.64v-2.798a2.6 2.6 0 0 0-2.59-2.59z"
    />
  </svg>
);

export default SvgComponent;

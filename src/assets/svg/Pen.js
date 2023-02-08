import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={76.25} height={94} {...props}>
    <g data-name="Pen, Pencil">
      <g
        data-name="Rectangle 4"
        style={{
          fill: "#fff",
          stroke: props.fillBox || "#000",
          strokeWidth: 3,
        }}
      >
        <rect
          width={76.25}
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
          width={73.25}
          height={91}
          rx={14.5}
          style={{
            fill: props.fillBox || "none",
          }}
        />
      </g>
      <text
        data-name="Pen, Pencil"
        transform="translate(22.5 29)"
        style={{
          fontSize: 11,
          fontFamily: "Roboto-Regular,Roboto",
        }}
      >
        <tspan x={0} y={0}>
          {"Pen,"}
        </tspan>
        <tspan x={0} y={13}>
          {"Pencil"}
        </tspan>
      </text>
      <path
        data-name="Path 66"
        d="M29 67.25V71h3.75l11.06-11.06-3.75-3.75zm17.71-10.21a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
      />
    </g>
  </svg>
);

export default SvgComponent;

import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg
    data-name="Meeting Room"
    xmlns="http://www.w3.org/2000/svg"
    width={76}
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
        width={76}
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
        width={73}
        height={91}
        rx={14.5}
        style={{
          fill: props.fillBox || "none",
        }}
      />
    </g>
    <text
      data-name="Meeting Room"
      transform="translate(18 29)"
      style={{
        fontSize: 11,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"Meeting"}
      </tspan>
      <tspan x={0} y={13}>
        {"Room"}
      </tspan>
    </text>
    <path d="M40.95 56.867V76.2H26.772v-2.578h2.578V53h11.6v1.289h6.444v19.333h2.578V76.2h-5.156V56.867zm-5.156 6.444v2.578h2.578v-2.578z" />
  </svg>
);

export default SvgComponent;

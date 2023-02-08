import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={76} height={94} {...props}>
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
      data-name="Headphone"
      transform="translate(8 31)"
      style={{
        fontSize: 11,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"Headphone"}
      </tspan>
    </text>
    <path
      data-name="Path 79"
      d="M38.155 50.542A10.626 10.626 0 0 0 27.53 61.167v8.264a2.368 2.368 0 0 0 2.361 2.361h4.722v-9.444h-4.722v-1.181a8.264 8.264 0 0 1 16.528 0v1.181h-4.722v9.444h4.722a2.368 2.368 0 0 0 2.361-2.361v-8.264a10.626 10.626 0 0 0-10.625-10.625z"
    />
  </svg>
);

export default SvgComponent;

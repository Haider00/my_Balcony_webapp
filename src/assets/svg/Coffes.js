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
      data-name="Coffee"
      transform="translate(14.124 33)"
      style={{
        fontSize: 16,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"Coffee"}
      </tspan>
    </text>
    <path
      data-name="Path 80"
      d="M0 0h32.667v32.667H0z"
      transform="translate(21.667 45)"
      style={{
        fill: props.fillBox || "none",
      }}
    />
    <path
      data-name="Path 81"
      d="M46.167 53.166v-2.722h2.722v-2.722H29.833a2.73 2.73 0 0 0-2.722 2.722v21.778a2.73 2.73 0 0 0 2.722 2.722h19.056v-2.722h-5.486a6.759 6.759 0 0 0 2.763-5.444v-6.806H32.555v6.806a6.8 6.8 0 0 0 2.763 5.444h-5.485V50.444h2.722v2.722a1.365 1.365 0 0 0 1.361 1.361h10.889a1.365 1.365 0 0 0 1.362-1.361z"
    />
    <circle
      data-name="Ellipse 15"
      cx={1.5}
      cy={1.5}
      r={1.5}
      transform="translate(37.606 56)"
    />
  </svg>
);

export default SvgComponent;

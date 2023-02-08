import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={77} height={94} {...props}>
    <g data-name="Group 93">
      <g data-name="Group 89">
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
      </g>
    </g>
    <text
      data-name="Gym"
      transform="translate(23.611 34)"
      style={{
        fontSize: 13,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"Gym"}
      </tspan>
    </text>
    <path
      data-name="Path 54"
      d="m47.999 66.87 1.585-1.585-1.585-1.585-3.957 3.957-9.5-9.5 3.957-3.957-1.582-1.583-1.587 1.585-1.584-1.585-2.372 2.372-1.585-1.585-1.585 1.585 1.585 1.585-2.372 2.372 1.585 1.584-1.585 1.587 1.585 1.585 3.957-3.958 9.5 9.5-3.957 3.957 1.585 1.585 1.585-1.585 1.585 1.585 2.372-2.372 1.585 1.585 1.585-1.585-1.587-1.587 2.372-2.372z"
    />
  </svg>
);

export default SvgComponent;

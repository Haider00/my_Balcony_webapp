import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg
    data-name="Paper, Notebook"
    xmlns="http://www.w3.org/2000/svg"
    width={76.25}
    height={94}
    {...props}
  >
    <g data-name="Group 136">
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
        </g>
      </g>
    </g>
    <text
      data-name="Paper, Notebook"
      transform="translate(14.25 29)"
      style={{
        fontSize: 11,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"Paper,"}
      </tspan>
      <tspan x={0} y={13}>
        {"Notebook"}
      </tspan>
    </text>
    <path
      data-name="Path 68"
      d="M40 52h-8a2 2 0 0 0-1.99 2L30 70a2 2 0 0 0 1.99 2H44a2.006 2.006 0 0 0 2-2V58zm2 16h-8v-2h8zm0-4h-8v-2h8zm-3-5v-5.5l5.5 5.5z"
    />
  </svg>
);

export default SvgComponent;

import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg
    data-name="Outdoor, Deck"
    xmlns="http://www.w3.org/2000/svg"
    width={75}
    height={94}
    {...props}
  >
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
          width={75}
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
          width={72}
          height={91}
          rx={14.5}
          style={{
            fill: props.fillBox || "none",
          }}
        />
      </g>
    </g>
    <text
      data-name="Outdoor, Deck"
      transform="translate(16.564 27)"
      style={{
        fontSize: 11,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"Outdoor,"}
      </tspan>
      <tspan x={0} y={13}>
        {"Deck"}
      </tspan>
    </text>
    <path
      data-name="Path 59"
      d="m49.178 60.687-11.541-8.079-11.542 8.079h10.387v15h2.313v-15z"
    />
    <path
      data-name="Path 60"
      d="m29.081 64.15-2.262.427.946 5.044v6.071h2.309l.023-4.617h2.285v4.617h2.308v-6.925h-4.732z"
    />
    <path
      data-name="Path 61"
      d="M45.321 68.767h-4.732v6.925h2.308v-4.617h2.285l.023 4.617h2.308v-6.071l.946-5.044-2.261-.427z"
    />
  </svg>
);

export default SvgComponent;

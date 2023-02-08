import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg
    data-name="Not Wheelchair Accessible"
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={94}
    {...props}
  >
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
            width={80}
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
            width={77}
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
      data-name="Not Wheelchair Accessible"
      transform="translate(21 20)"
      style={{
        fontSize: 9,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"Not "}
      </tspan>
      <tspan x={0} y={11}>
        {"Wheelchair"}
      </tspan>
      <tspan x={0} y={22}>
        {"Accessible"}
      </tspan>
    </text>
    <path
      data-name="Path 69"
      d="m43.256 63.83-3.971-3.971a2.194 2.194 0 0 1 1.428-.708 2.383 2.383 0 0 1 1.393.3 2.8 2.8 0 0 1 .732.534l1.5 1.66a6.519 6.519 0 0 0 4.726 2.125v2.322a9.9 9.9 0 0 1-5.808-2.262zm-2.323-5.864a2.322 2.322 0 1 0-2.322-2.322 2.329 2.329 0 0 0 2.322 2.322zm-10.67-3.703L28.614 55.9l10 10v2.52a2.329 2.329 0 0 0 2.322 2.322h2.52l6.514 6.514 1.637-1.637zm8.348 19.959a3.484 3.484 0 0 1-1.161-6.769v-2.4a5.806 5.806 0 1 0 6.851 6.851h-2.4a3.488 3.488 0 0 1-3.29 2.318z"
    />
  </svg>
);

export default SvgComponent;

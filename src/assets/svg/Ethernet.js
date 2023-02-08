import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={65} height={94} {...props}>
    <path
      data-name="Path 30"
      d="M0 0h28.65v28.65H0z"
      transform="translate(17.609 42)"
      style={{
        fill: props.fillBox || "none",
      }}
    />
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
      data-name="Ethernet"
      transform="translate(9 34)"
      style={{
        fontSize: 13,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"Ethernet"}
      </tspan>
    </text>
    <path
      data-name="Path 31"
      d="m27.743 52.07-1.839-1.528-6.458 7.783 6.458 7.783 1.838-1.528-5.192-6.255zm-.917 7.449h2.388v-2.387h-2.388zm11.935-2.387h-2.388v2.388h2.388zm-7.163 2.388h2.388v-2.388h-2.388zm8.082-8.978-1.838 1.528 5.193 6.255-5.193 6.255 1.838 1.528 6.458-7.783z"
    />
  </svg>
);

export default SvgComponent;

import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg
    data-name="Component 42 \u2013 1"
    xmlns="http://www.w3.org/2000/svg"
    width={65}
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
      transform="translate(19.5 34)"
      style={{
        fontSize: 13,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"WIFI"}
      </tspan>
    </text>
    <path
      data-name="Path 26"
      d="M0 0h29.744v30.9H0z"
      transform="translate(17.401 43)"
      style={{
        fill: props.fillBox || "none",
      }}
    />
    <path
      data-name="Path 27"
      d="m18.557 54.588 2.479 2.575a15.361 15.361 0 0 1 22.308 0l2.479-2.575a18.784 18.784 0 0 0-27.266 0zm9.915 10.3 3.718 3.863 3.718-3.863a5.113 5.113 0 0 0-7.436 0zm-4.957-5.15 2.479 2.575a8.536 8.536 0 0 1 12.393 0l2.479-2.575a11.959 11.959 0 0 0-17.352 0z"
    />
  </svg>
);

export default SvgComponent;

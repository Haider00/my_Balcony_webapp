import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg
    data-name="Billiard, Pool"
    xmlns="http://www.w3.org/2000/svg"
    width={171}
    height={94}
    {...props}
  >
    <g
      data-name="Rectangle 4"
      style={{
        strokeWidth: 3,
        stroke: props.fillBox || "#000",
        fill: "#fff",
      }}
    >
      <rect
        width={171}
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
        width={168}
        height={91}
        rx={14.5}
        style={{
          fill: props.fillBox || "none",
        }}
      />
    </g>
    <text
      data-name="Billiard, Pool"
      transform="translate(89 32)"
      style={{
        fontSize: 19,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"Billiard,"}
      </tspan>
      <tspan x={0} y={20}>
        {"Pool"}
      </tspan>
    </text>
    <path
      data-name="Line 45"
      transform="translate(12.6 11.65)"
      style={{
        stroke: "#000",
        fill: "#fff",
      }}
      d="m0 0 62.096 65.464"
    />
    <path
      data-name="Line 46"
      transform="translate(9.832 14.563)"
      style={{
        stroke: "#000",
        fill: "#fff",
      }}
      d="m0 0 64.863 62.551"
    />
    <path
      data-name="Line 47"
      transform="translate(11.677 12.621)"
      style={{
        stroke: "#000",
        fill: "#fff",
      }}
      d="m0 0 63.018 64.493"
    />
    <path
      data-name="Line 48"
      transform="translate(10.755 13.593)"
      style={{
        stroke: "#000",
        fill: "#fff",
      }}
      d="m0 0 63.941 63.522"
    />
    <path
      data-name="Line 49"
      transform="translate(10.755 14.563)"
      style={{
        stroke: "#000",
        fill: "#fff",
      }}
      d="m0 0 63.941 62.551"
    />
    <path
      data-name="Line 50"
      transform="translate(11.677 13.593)"
      style={{
        stroke: "#000",
        fill: "#fff",
      }}
      d="m0 0 63.018 63.522"
    />
    <path
      data-name="Rectangle 21"
      transform="rotate(45.97 -7.875 20.498)"
      style={{
        stroke: "#000",
        fill: "#fff",
      }}
      d="M0 0h.976v.974H0z"
    />
    <path
      data-name="Rectangle 22"
      transform="rotate(45.97 -9.01 20.073)"
      style={{
        stroke: "#000",
        fill: "#fff",
      }}
      d="M0 0h.976v.974H0z"
    />
    <path
      data-name="Rectangle 23"
      transform="rotate(45.97 -10.616 19.471)"
      style={{
        stroke: "#000",
        fill: "#fff",
      }}
      d="M0 0h.976v.974H0z"
    />
    <path
      data-name="Line 51"
      transform="translate(12.6 12.621)"
      style={{
        stroke: "#000",
        fill: "#fff",
      }}
      d="m0 0 62.096 64.493"
    />
    <path
      data-name="Path 90"
      d="M0 3.395 3.231-.021"
      transform="translate(15.215 17.111)"
      style={{
        stroke: "#fff",
        fill: "#fff",
      }}
    />
    <path
      data-name="Path 91"
      d="M.107 3.416 3.2.033"
      transform="translate(16.52 18.402)"
      style={{
        stroke: "#fff",
        fill: "#fff",
      }}
    />
    <path
      data-name="Path 92"
      d="M.107 1.249 1.178.033"
      transform="translate(64.878 67.193)"
      style={{
        stroke: "#fff",
        fill: "#fff",
      }}
    />
    <ellipse
      data-name="Ellipse 10"
      cx={1.37}
      cy={1.442}
      rx={1.37}
      ry={1.442}
      transform="translate(79.843 76.127)"
      style={{
        stroke: "#000",
      }}
    />
    <ellipse
      data-name="Ellipse 11"
      cx={1.37}
      cy={1.442}
      rx={1.37}
      ry={1.442}
      transform="translate(91.978 78.069)"
      style={{
        stroke: "#000",
        fill: "#fff",
      }}
    />
    <ellipse
      data-name="Ellipse 12"
      cx={1.37}
      cy={1.442}
      rx={1.37}
      ry={1.442}
      transform="translate(91.056 84.866)"
      style={{
        stroke: "#000",
      }}
    />
    <ellipse
      data-name="Ellipse 13"
      cx={1.37}
      cy={1.442}
      rx={1.37}
      ry={1.442}
      transform="translate(98.435 84.866)"
      style={{
        stroke: "#000",
      }}
    />
  </svg>
);

export default SvgComponent;

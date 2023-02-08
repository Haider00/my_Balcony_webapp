import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg
    data-name="Outlet, Cord, Charger"
    xmlns="http://www.w3.org/2000/svg"
    width={155}
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
        width={155}
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
        width={152}
        height={91}
        rx={14.5}
        style={{
          fill: props.fillBox || "none",
        }}
      />
    </g>
    <text
      data-name="Outlet, Cord, Charger"
      transform="translate(25 33)"
      style={{
        fontSize: 11,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"Outlet, Cord, Charger"}
      </tspan>
    </text>
    <path
      data-name="Path 72"
      d="M0 0h24v24H0z"
      transform="translate(96.245 48)"
      style={{
        fill: props.fillBox || "none",
      }}
    />
    <path
      data-name="Path 73"
      d="m112.538 55-.01-4h-2v4h-4v-4h-2v4h-.01a2.132 2.132 0 0 0-1.99 1.99v5.49l3.5 3.52v3h5v-3l3.5-3.51v-5.5a2.132 2.132 0 0 0-1.99-1.99z"
    />
    <path
      data-name="Path 74"
      d="M74.457 51.85a9.25 9.25 0 1 0 9.25 9.25 9.253 9.253 0 0 0-9.25-9.25zm-2.775 9.25a.928.928 0 0 1-.925-.925V57.4a.925.925 0 0 1 1.85 0v2.775a.928.928 0 0 1-.925.925zm4.625 5.55h-3.7V64.8a1.85 1.85 0 1 1 3.7 0zm1.85-6.475a.925.925 0 0 1-1.85 0V57.4a.925.925 0 0 1 1.85 0z"
    />
    <path
      data-name="Path 76"
      d="M40.444 54.06V51h-2v3.06a9 9 0 0 0-8 8.93 2.01 2.01 0 0 0 2.01 2.01h2.99a4 4 0 0 0 8 0h2.99a2.01 2.01 0 0 0 2.01-2.01 9 9 0 0 0-8-8.93zm-1 8.94h-7a7 7 0 0 1 14 0z"
    />
  </svg>
);

export default SvgComponent;

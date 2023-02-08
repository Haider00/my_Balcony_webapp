import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg
    data-name="No WIFI"
    xmlns="http://www.w3.org/2000/svg"
    width={65}
    height={94}
    {...props}
  >
    <path
      data-name="Path 28"
      d="M28.027.012 0 0v29.117h28.027zM0 0h28.027v29.117H0zm0 0h28.027v29.117H0z"
      transform="translate(18.129 43)"
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
      data-name="No WIFI"
      transform="translate(9.148 34)"
      style={{
        fontSize: 13,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"No WIFI"}
      </tspan>
    </text>
    <path
      data-name="Path 29"
      d="M44.791 53.919a17.7 17.7 0 0 0-16.524-5.12l2.944 3.058a14.475 14.475 0 0 1 11.246 4.489l2.336-2.426zm-4.672 4.853a11.337 11.337 0 0 0-5.243-3.106l4.122 4.283zm-19.84-12.071 3.585 3.7a17.747 17.747 0 0 0-4.753 3.518l2.324 2.426a14.485 14.485 0 0 1 4.905-3.363l2.616 2.718a11.211 11.211 0 0 0-5.174 3.072v.01l2.329 2.416a8.072 8.072 0 0 1 5.745-2.5l8.255 8.566 1.483-1.529-19.809-20.563zm8.174 16.924 3.5 3.64 3.5-3.64a4.818 4.818 0 0 0-7 0z"
    />
  </svg>
);

export default SvgComponent;

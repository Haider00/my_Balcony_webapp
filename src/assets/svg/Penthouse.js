import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg
    data-name="Balcony &amp; Penthouse"
    xmlns="http://www.w3.org/2000/svg"
    width={175}
    height={94}
    fill={"black"}
    {...props}
  >
    <g
      data-name="Rectangle 4"
      style={{
        fill: props.fillBox || "#fff",
        stroke: props.fillBox || "#000",
        strokeWidth: 3,
      }}
    >
      <rect
        width={175}
        height={93.955}
        rx={16}
        style={{
          stroke: "none",
        }}
        stroke="none"
      />
      <rect
        x={1.5}
        y={1.5}
        width={172}
        height={90.955}
        rx={14.5}
        style={{
          fill: "none",
        }}
      />
    </g>
    <path
      data-name="Path 45"
      d="M133.944 47.205 120.05 66.778l10.56 14.875-5.928 4.7a33764.007 33764.007 0 0 1-16.674-23.488L85.834 94l73.026-.015z"
    />
    <g
      data-name="Rectangle 4"
      style={{
        fill: props.fillBox || "#fff",
        stroke: props.fillBox || "#000",
        strokeWidth: 3,
      }}
    >
      <rect
        width={40}
        height={93.955}
        rx={16}
        style={{
          stroke: "none",
        }}
        stroke="none"
      />
      <rect
        x={1.5}
        y={1.5}
        width={37}
        height={90.955}
        rx={14.5}
        style={{
          fill: "none",
        }}
      />
    </g>
    <text
      data-name="Views, Roof, Balcony, or Penthouse"
      transform="translate(49 25)"
      style={{
        fontSize: 14,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"Views, Roof, "}
      </tspan>
      <tspan x={0} y={16}>
        {"Balcony, or"}
      </tspan>
      <tspan x={0} y={32}>
        {"Penthouse"}
      </tspan>
    </text>
    <path
      data-name="Path 43"
      d="M17.942 21v2.6h-2.6V21zm7.8 2.6V21h-2.6v2.6zm6.5 2.6v10.4h-23.4V26.2h1.3V21a10.4 10.4 0 1 1 20.8 0v5.2zm-18.2 2.6h-2.6V34h2.6zm5.2 0h-2.6V34h2.6zm0-15.5a7.811 7.811 0 0 0-6.5 7.7v5.2h6.5zm2.6 12.9h6.5V21a7.811 7.811 0 0 0-6.5-7.7zm2.6 2.6h-2.6V34h2.6zm5.2 0h-2.6V34h2.6z"
    />
    <path
      data-name="Rectangle 17"
      transform="translate(5 8)"
      style={{
        fill: "none",
      }}
      d="M0 0h31v31H0z"
    />
    <path
      data-name="Path 44"
      d="M0 0h89v69H0z"
      transform="translate(82 24.955)"
      style={{
        fill: "none",
      }}
    />
  </svg>
);

export default SvgComponent;

import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg
    data-name="Ping Pong"
    xmlns="http://www.w3.org/2000/svg"
    width={154}
    height={94}
    {...props}
  >
    <g
      data-name="Rectangle 4"
      style={{
        stroke: props.fillBox || "#000",
        strokeWidth: 3,
        fill: "#fff",
      }}
    >
      <rect
        width={154}
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
        width={151}
        height={91}
        rx={14.5}
        style={{
          fill: props.fillBox || "none",
        }}
      />
    </g>
    <text
      data-name="Ping Pong"
      transform="translate(90 40)"
      style={{
        fontSize: 17,
        fontFamily: "Roboto-Regular,Roboto",
      }}
    >
      <tspan x={0} y={0}>
        {"Ping"}
      </tspan>
      <tspan x={0} y={19}>
        {"Pong"}
      </tspan>
    </text>
    <path
      data-name="Union 7"
      d="M21.179 44.788 14.768 52l6.411-7.213 3.007-4.564c-.106-.1-.208-.2-.31-.3L13.768 51l10.109-11.077q-.076-.076-.15-.155L12.768 50l10.958-10.232c-4.142-4.37-4.517-12.513-.5-19.756 4.686-8.454 13.574-12.485 19.855-9s7.57 13.154 2.884 21.609-13.574 12.483-19.853 9a9.774 9.774 0 0 1-1.329-.885l-3.6 4.054L15.768 53zm0 0 3.6-4.054c-.205-.162-.4-.333-.6-.51zM0 5a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"
      transform="translate(19.499 27.5)"
      style={{
        strokeLinecap: "round",
        strokeLinejoin: "round",
        stroke: "#000",
        strokeWidth: 3,
      }}
    />
  </svg>
);

export default SvgComponent;

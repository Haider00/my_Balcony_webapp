import * as React from "react";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={52.046} height={43} {...props}>
    <defs></defs>
    <g data-name="Group 2798">
      <g
        style={{
          filter: "url(#a)",
        }}
      >
        <path
          data-name="Toggle Background"
          d="M11.673 0h10.7a11.84 11.84 0 0 1 11.673 12v11a11.84 11.84 0 0 1-11.673 12h-10.7A11.84 11.84 0 0 1 0 23V12A11.84 11.84 0 0 1 11.673 0z"
          transform="translate(9.003 6)"
          style={{
            fill: props.backgroundColor || "#005451",
          }}
        />
      </g>
      <g data-name="Group 153">
        <path
          data-name="Line 20"
          transform="translate(20.524 12)"
          style={{
            fill: "none",
            stroke: props.backgroundColor === "#005451" ? "#fff" : "#000",
            strokeLinecap: "round",
            strokeWidth: 2,
          }}
          d="M0 0h17"
        />
        <path
          data-name="Line 21"
          transform="translate(22.372 27.003)"
          style={{
            fill: "none",
            stroke: props.backgroundColor === "#005451" ? "#fff" : "#000",
            strokeLinecap: "round",
            strokeWidth: 2,
          }}
          d="M0 0h15.077"
        />
        <path
          data-name="Line 23"
          transform="translate(13.131 34.999)"
          style={{
            fill: "none",
            stroke: props.backgroundColor === "#005451" ? "#fff" : "#000",
            strokeLinecap: "round",
            strokeWidth: 2,
          }}
          d="M0 0h18.936"
        />
        <path
          data-name="Line 22"
          transform="translate(13.617 19.502)"
          style={{
            fill: "none",
            stroke: props.backgroundColor === "#005451" ? "#fff" : "#000",
            strokeLinecap: "round",
            strokeWidth: 2,
          }}
          d="M0 0h14.591"
        />
      </g>
    </g>
  </svg>
);

export default SvgComponent;

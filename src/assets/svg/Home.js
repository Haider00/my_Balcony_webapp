import * as React from "react";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={52.046} height={43} {...props}>
    <defs></defs>
    <g data-name="Group 2795">
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
      <path
        data-name="Path 223"
        d="M13.2 28v-8.824h5.6V28h7V16.235H30L16 3 2 16.235h4.2V28z"
        transform="translate(10.023 7)"
        style={{
          fill: props.backgroundColor === "#005451" ? "#fff" : "#000",
        }}
      />
    </g>
  </svg>
);

export default SvgComponent;

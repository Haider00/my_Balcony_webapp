import * as React from "react";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={52.046} height={43} {...props}>
    <defs></defs>
    <g data-name="Group 2796">
      <g
        style={{
          filter: "url(#a)",
        }}
      >
        <path
          data-name="Toggle Background"
          d="M11.673 0h10.7a11.84 11.84 0 0 1 11.673 12v11a11.84 11.84 0 0 1-11.673 12h-10.7A11.84 11.84 0 0 1 0 23V12A11.84 11.84 0 0 1 11.673 0z"
          transform="translate(9 6)"
          style={{
            fill: props.backgroundColor || "#005451",
          }}
        />
      </g>
      <g data-name="Group 44">
        <path
          data-name="Path 13"
          d="M13.871 27.714H5.416A2.5 2.5 0 0 1 3 25.142l.012-18a2.487 2.487 0 0 1 2.4-2.571h1.212V2H9.04v2.571h9.66V2h2.416v2.571h1.208a2.5 2.5 0 0 1 2.416 2.571v7.714h-2.413v-2.571H5.416v12.857h8.455zm12.236-6.441.858-.913a1.339 1.339 0 0 0 0-1.813l-.858-.913a1.152 1.152 0 0 0-1.7 0l-.858.913zm-.858.913L18.848 29h-2.561v-2.726l6.4-6.814z"
          transform="translate(11.925 8)"
          style={{
            fill: props.backgroundColor === "#005451" ? "#fff" : "#000",
          }}
        />
      </g>
    </g>
  </svg>
);

export default SvgComponent;

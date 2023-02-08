import * as React from "react";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={52.046} height={43} {...props}>
    <defs></defs>
    <g data-name="Group 2797">
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
      <g
        data-name="Chat History"
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      >
        <path
          d="M1.8 20.834a6.971 6.971 0 0 1-1.572-4.419V7a7 7 0 0 1 7-7H18a7 7 0 0 1 7 7v9.415a7 7 0 0 1-7 7H8.865L0 27z"
          style={{
            stroke: "none",
          }}
          transform="translate(13.523 10)"
        />
        <path
          d="m3.076 23.599 5.039-2.038a2 2 0 0 1 .75-.146H18c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7.228c-2.757 0-5 2.243-5 5v9.415a4.94 4.94 0 0 0 1.121 3.156 2 2 0 0 1 .37 1.824l-.643 2.204M0 27l1.799-6.166a6.97 6.97 0 0 1-1.571-4.419V7a7 7 0 0 1 7-7H18a7 7 0 0 1 7 7v9.415a7 7 0 0 1-7 7H8.865L0 27z"
          style={{
            fill: props.backgroundColor === "#005451" ? "#fff" : "#000",
            stroke: "none",
          }}
          transform="translate(13.523 10)"
        />
      </g>
    </g>
  </svg>
);

export default SvgComponent;

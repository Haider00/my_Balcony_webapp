import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={44} height={42} {...props}>
    <g data-name="map view">
      <path
        data-name="Path 14"
        d="M0 0h30v33H0z"
        transform="translate(7)"
        style={{
          fill: props.fillBox || "none",
        }}
      />
      <path
        data-name="Path 15"
        d="m36.163 0-.267.042L27 2.917 17 0 7.6 2.639a.731.731 0 0 0-.6.667v21a.766.766 0 0 0 .833.694l.267-.042 8.9-2.875L27 25l9.4-2.639a.731.731 0 0 0 .6-.667v-21A.766.766 0 0 0 36.163 0zM27 22.222l-10-2.93V2.778l10 2.93z"
      />
      <text
        data-name="map view"
        transform="translate(22 39)"
        style={{
          fontSize: 10,
          fontFamily: "Roboto-Regular,Roboto",
        }}
      >
        <tspan x={-21.187} y={0}>
          {"map view"}
        </tspan>
      </text>
    </g>
  </svg>
);

export default SvgComponent;

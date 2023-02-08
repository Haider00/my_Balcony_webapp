import * as React from "react";

const SvgComponent = (props, { fillBox = "none" }) => (
  <svg
    data-name="Large Table"
    xmlns="http://www.w3.org/2000/svg"
    width={335}
    height={94}
    {...props}
  >
    <g
      data-name="Path 87"
      style={{
        fill: props.fillBox || "#fff",
      }}
    >
      <path
        d="M319.944 92.5H15.056c-3.603 0-6.996-1.497-9.554-4.214C2.922 85.543 1.5 81.89 1.5 78V16c0-3.89 1.421-7.543 4.002-10.286C8.06 2.997 11.452 1.5 15.056 1.5h304.888c3.604 0 6.996 1.497 9.554 4.214C332.078 8.457 333.5 12.11 333.5 16v62c0 3.89-1.421 7.543-4.002 10.286-2.558 2.717-5.95 4.214-9.554 4.214z"
        style={{
          stroke: "none",
        }}
      />
      <path
        d="M15.056 3C8.408 3 3 8.832 3 16v62c0 7.168 5.408 13 12.056 13h304.888C326.592 91 332 85.168 332 78V16c0-7.168-5.408-13-12.056-13H15.056m0-3h304.888C328.259 0 335 7.163 335 16v62c0 8.837-6.74 16-15.056 16H15.056C6.741 94 0 86.837 0 78V16C0 7.163 6.74 0 15.056 0z"
        style={{
          fill: props.fillBox || "#000",
          stroke: "none",
        }}
      />
    </g>
    <path
      data-name="Line 34"
      transform="translate(91.5 55.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        stroke: "#000",
        fill: "none",
      }}
      d="M0 0h209"
    />
    <path
      data-name="Path 88"
      d="M0 0h209"
      transform="translate(100.5 46.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        stroke: "#000",
        fill: "none",
      }}
    />
    <path
      data-name="Line 35"
      transform="translate(300.5 46.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        stroke: "#000",
        fill: "none",
      }}
      d="M9 0 0 9"
    />
    <path
      data-name="Line 29"
      transform="translate(300.5 55.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        stroke: "#000",
        fill: "none",
      }}
      d="M0 25V0"
    />
    <path
      data-name="Line 36"
      transform="translate(309.5 46.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        stroke: "#000",
        fill: "none",
      }}
      d="M0 25V0"
    />
    <path
      data-name="Line 39"
      transform="translate(100.44 55.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        stroke: "#000",
        fill: "none",
      }}
      d="M0 16V0"
    />
    <path
      data-name="Line 94"
      transform="translate(91.5 46.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        stroke: "#000",
        fill: "none",
      }}
      d="m0 9 8.738-9"
    />
    <path
      data-name="Line 93"
      transform="translate(95.738 46.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        stroke: "#000",
        fill: "none",
      }}
      d="m0 9 9-9"
    />
    <path
      data-name="Line 38"
      transform="translate(105.692 46.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        stroke: "#000",
        fill: "none",
      }}
      d="m0 9 9-9"
    />
    <path
      data-name="Line 30"
      transform="translate(91.5 55.5)"
      style={{
        strokeLinecap: "round",
        strokeWidth: 2,
        stroke: "#000",
        fill: "none",
      }}
      d="M0 0v25"
    />
    <g
      data-name="Rectangle 28"
      style={{
        stroke: "#000",
        fill: "#fff",
      }}
    >
      <path
        style={{
          stroke: "none",
        }}
        d="M0 0h17v4H0z"
        transform="translate(284 52)"
        stroke="none"
      />
      <path
        style={{
          fill: "none",
        }}
        d="M.5.5h16v3H.5z"
        transform="translate(284 52)"
      />
    </g>
    <path
      data-name="Path 58"
      d="m101.14 46.998 183.076-.7s23.724-1.521 23.724.962-8.189 8.094-8.189 8.094l-185.637.877s-21.331.934-21.331-1.55 8.357-7.683 8.357-7.683z"
    />
    <text
      data-name="Large Table"
      transform="translate(149.198 30)"
      style={{
        fontFamily: "Roboto-Regular,Roboto",
        fontSize: 21,
      }}
    >
      <tspan x={0} y={0}>
        {"Large Table"}
      </tspan>
    </text>
    <text
      data-name={0}
      transform="translate(25 54)"
      style={{
        fontSize: 20,
        fontFamily: "Roboto-Regular,Roboto",
        stroke: "#000",
      }}
    >
      <tspan x={0} y={0}>
        {props.total || "0"}
      </tspan>
    </text>
    <path
      onClick={() => {
        props.onIncrement();
      }}
      data-name="Path 25"
      d="M57 22a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm5 11h-4v4h-2v-4h-4v-2h4v-4h2v4h4z"
    />
    <path
      onClick={() => {
        props.onDecrement();
      }}
      data-name="Path 23"
      d="M57 54a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm5 11H52v-2h10z"
    />
  </svg>
);

export default SvgComponent;

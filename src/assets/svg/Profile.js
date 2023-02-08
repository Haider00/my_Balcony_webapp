import * as React from "react";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={52.046} height={43} {...props}>
    <defs></defs>
    <g data-name="Group 2799">
      <g
        style={{
          filter: "url(#a)",
        }}
      >
        <path
          data-name="Toggle Background"
          d="M11.673 0h10.7a11.84 11.84 0 0 1 11.673 12v11a11.84 11.84 0 0 1-11.673 12h-10.7A11.84 11.84 0 0 1 0 23V12A11.84 11.84 0 0 1 11.673 0z"
          transform="translate(9.002 6)"
          style={{
            fill: props.backgroundColor || "#005451",
          }}
        />
      </g>
      <g data-name="manage_accounts_black_36dp (1)">
        <g data-name="Group 206">
          <g data-name="Group 205" transform="translate(14.456 10)">
            <circle
              data-name="Ellipse 39"
              cx={5.564}
              cy={5.564}
              r={5.564}
              transform="translate(6.54)"
              style={{
                fill: props.backgroundColor === "#005451" ? "#fff" : "#000",
              }}
            />
            <path
              data-name="Path 177"
              d="M13.332 13.038c-.288-.019-.575-.038-.876-.038a13.122 13.122 0 0 0-8.64 3.475A6.491 6.491 0 0 0 2 21.306v5.06h12.1a17.815 17.815 0 0 1-1.647-7.638 18.853 18.853 0 0 1 .879-5.69z"
              transform="translate(-2 .632)"
              style={{
                fill: props.backgroundColor === "#005451" ? "#fff" : "#000",
              }}
            />
            <path
              data-name="Path 178"
              d="M22.755 17.341a5.652 5.652 0 0 0-.074-.8l1.406-1.281-1.234-2.194-1.789.621a4.472 4.472 0 0 0-1.332-.8L19.362 11h-2.467l-.37 1.89a4.472 4.472 0 0 0-1.332.8l-1.793-.623-1.23 2.194 1.406 1.281a5.651 5.651 0 0 0-.074.8 5.651 5.651 0 0 0 .074.8l-1.406 1.279 1.23 2.194 1.789-.621a4.472 4.472 0 0 0 1.332.8l.37 1.89h2.467l.37-1.89a4.472 4.472 0 0 0 1.332-.8l1.789.621 1.234-2.194-1.402-1.281a5.652 5.652 0 0 0 .074-.799zm-4.626 2.536a2.537 2.537 0 1 1 2.471-2.536 2.51 2.51 0 0 1-2.471 2.537z"
              transform="translate(.231 3.151)"
              style={{
                fill: props.backgroundColor === "#005451" ? "#fff" : "#000",
              }}
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default SvgComponent;

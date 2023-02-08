import * as React from "react";
import Typography from "@mui/material/Typography";
import CheckBox from "@mui/icons-material/CheckBoxOutlined";
import CropSquare from "@mui/icons-material/CropSquare";

const CheckBoxLabel = ({
  title = "",
  width = "100%",
  fontSize = 14,
  handleCheckbox = () => {},
  value = false,
  justifyContent = "flex-start",
  fontWeight = "normal",
}) => {
  const [checked, setChecked] = React.useState(false);
  React.useEffect(() => {
    setChecked(value);
  }, [value]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: width,
        justifyContent: justifyContent,
      }}
    >
      <div
        onClick={() => {
          setChecked(!checked);
          handleCheckbox(!checked);
        }}
        style={{}}
      >
        {checked ? (
          <CheckBox style={{ color: "#000", fontSize: 15, margin: 10 }} />
        ) : (
          <CropSquare style={{ color: "#000", fontSize: 15, margin: 10 }} />
        )}
      </div>
      <Typography
        style={{
          width: "70%",
          fontSize: fontSize,
          color: "#000",
          wordWrap: "break-word",
          lineHeight: 1.2,
          fontWeight: fontWeight,
        }}
      >
        {title}
      </Typography>
    </div>
  );
};
export default CheckBoxLabel;

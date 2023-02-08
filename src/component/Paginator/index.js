import * as React from "react";
import TextField from "@mui/material/TextField";
import CheckBox from "@mui/icons-material/CheckBoxOutlined";
import CropSquare from "@mui/icons-material/CropSquare";

const Paginator = ({ title = "", onChange = () => {} }) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1,
        height: 50,
        backgroundColor: "green",
      }}
    >
      <div style={{ height: 50, width: 50, background: "red" }} />
      <div style={{ height: 50, width: 50, background: "red" }} />
    </div>
  );
};
export default Paginator;

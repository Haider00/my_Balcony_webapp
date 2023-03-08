// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import CheckBox from "@mui/icons-material/CheckBoxOutlined";
// import CropSquare from "@mui/icons-material/CropSquare";

// const CheckBoxInput = ({ title = "", onChange = () => {} }) => {
//   const [checked, setChecked] = React.useState(false);
//   const [isChecked, setIsChecked] = React.useState(false);

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center",
//       }}
//     >
//       <div
//         onClick={() => {
//           setChecked(!checked);
//         }}
//         style={{}}
//       >
//         {checked ? (
//           <CheckBox
//             checked={isChecked}
//             onChange={handleCheckboxChange}
//             style={{ color: "#000", fontSize: 15, margin: 10 }}
//           />
//         ) : (
//           <CropSquare style={{ color: "#000", fontSize: 15, margin: 10 }} />
//         )}
//       </div>

//       <TextField
//         disabled={isChecked}
//         type="number"
//         onChange={onChange}
//         sx={{ marginY: 1.5, width: "100%" }}
//         id={title}
//         label={title}
//         variant="outlined"
//         size="small"
//       />
//     </div>
//   );
// };
// export default CheckBoxInput;
import * as React from "react";
import TextField from "@mui/material/TextField";
import CheckBox from "@mui/icons-material/CheckBox";
import CropSquare from "@mui/icons-material/CropSquare";

const CheckBoxInput = ({ title = "", onChange = () => {} }) => {
  const [checked, setChecked] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setChecked(!checked);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div onClick={handleCheckboxChange}>
        {checked ? (
          <CheckBox
            checked={isChecked}
            onChange={handleCheckboxChange}
            style={{ color: "#000", fontSize: 15, margin: 10 }}
          />
        ) : (
          <CropSquare style={{ color: "#000", fontSize: 15, margin: 10 }} />
        )}
      </div>

      <TextField
        disabled={!isChecked}
        type="number"
        onChange={onChange}
        sx={{ marginY: 1.5, width: "100%" }}
        id={title}
        label={title}
        variant="outlined"
        size="small"
      />
    </div>
  );
};

export default CheckBoxInput;

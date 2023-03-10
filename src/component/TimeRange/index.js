// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import CheckBox from "@mui/icons-material/CheckBoxOutlined";
// import CropSquare from "@mui/icons-material/CropSquare";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { Snackbar } from "@mui/material";

// const TimeRange = ({ title = "", handleTimeRange = ({ }) => { } }) => {
//   const [checked, setChecked] = React.useState(false);
//   const [amValue, setAmValue] = React.useState(null);
//   const [pmValue, setPmValue] = React.useState(null);
//   const [display, setDisplay] = React.useState(false);
//   const [message, setMessage] = React.useState("");
//   const handleAmChange = (newValue) => {
//     if (checked) {
//       setAmValue(newValue);
//     }
//   };
//   const handlePmChange = (newValue) => {
//     if (!checked) {
//       setMessage("please check the day first");
//       setDisplay(true);
//       return;
//     }
//     if (amValue) {
//       setPmValue(newValue);
//       handleTimeRange({
//         day: title,
//         from: amValue,
//         to: pmValue,
//         available: checked,
//       });
//     } else {
//       setMessage("please check the start time");
//       setDisplay(true);
//     }
//   };
//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//         }}
//       >
//         <Snackbar
//           anchorOrigin={{ vertical: "top", horizontal: "right" }}
//           open={display}
//           onClose={() => {
//             setDisplay(false);
//           }}
//           ContentProps={{
//             "aria-describedby": "message-id",
//           }}
//           message={<span id="message-id">{message}</span>}
//         />
//         <div
//           onClick={() => {
//             setChecked(!checked);
//             if (!checked) {
//               setAmValue(null);
//               setPmValue(null);
//               handleTimeRange({});
//             }
//           }}
//           style={{}}
//         >
//           {checked ? (
//             <CheckBox style={{ color: "#000", fontSize: 15, margin: 10 }} />
//           ) : (
//             <CropSquare style={{ color: "#000", fontSize: 15, margin: 10 }} />
//           )}
//         </div>
//         <div
//           style={{
//             paddingTop: 4,
//             paddingBottom: 4,
//             paddingLeft: 5,
//             paddingRight: 5,
//             borderRadius: 5,
//             background: "#f1f1f1",
//             width: 40,
//             textAlign: "center",
//             pointerEvents: checked ? 'auto' : 'none',
//             opacity: checked ? 1 : 0.5,
//           }}
//         >
//           {title}
//         </div>

//         <TimePicker
//           label=""
//           value={amValue}
//           onChange={handleAmChange}
//           disabled={!checked}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               value={amValue}
//               sx={{ width: 80, marginX: 1.5 }}
//               id="standard-basic"
//               label=""
//               variant="standard"
//               placeholder="hh:mm"
//             />
//           )}
//         />
//         <TimePicker
//           label=""
//           value={pmValue}
//           onChange={handlePmChange}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               value={pmValue}
//               sx={{ width: 80, marginX: 1.5 }}
//               id="standard-basic"
//               label=""
//               variant="standard"
//               placeholder="hh:mm"
//             />
//           )}
//         />

//       </div>
//     </LocalizationProvider>
//   );
// };
// export default TimeRange;

import * as React from "react";
import TextField from "@mui/material/TextField";
import CheckBox from "@mui/icons-material/CheckBoxOutlined";
import CropSquare from "@mui/icons-material/CropSquare";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Snackbar } from "@mui/material";

const TimeRange = ({ title = "", handleTimeRange = ({}) => {} }) => {
  const [checked, setChecked] = React.useState(false);
  const [amValue, setAmValue] = React.useState(null);
  const [pmValue, setPmValue] = React.useState(null);
  const [display, setDisplay] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleAmChange = (newValue) => {
    if (checked) {
      setAmValue(newValue);
    }
  };

  const handlePmChange = (newValue) => {
<<<<<<< HEAD
    // handleCheckboxChange();
=======
>>>>>>> newbackup
    if (!checked) {
      setMessage("please checked day first");
      setDisplay(true);
      return;
    }
    if (amValue) {
      setPmValue(newValue);
      handleTimeRange({
        day: title,
        from: amValue,
        to: pmValue,
        available: checked,
      });
    } else {
      setMessage("please check start time");
      setDisplay(true);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={display}
          onClose={() => {
            setDisplay(false);
          }}
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          message={<span id="message-id">{message}</span>}
        />
        <div
          onClick={() => {
            setChecked(!checked);
            if (checked) {
              setAmValue(null);
              setPmValue(null);
              handleTimeRange({});
            }
          }}
          style={{}}
        >
          {checked ? (
            <CheckBox
              onChange={handlePmChange}
              style={{ color: "#000", fontSize: 15, margin: 10 }}
            />
          ) : (
            <CropSquare style={{ color: "#000", fontSize: 15, margin: 10 }} />
          )}
        </div>
        <div
          style={{
            paddingTop: 4,
            paddingBottom: 4,
            paddingLeft: 5,
            paddingRight: 5,
            borderRadius: 5,
            background: "#f1f1f1",
            width: 40,
            textAlign: "center",
          }}
        >
          {title}
        </div>

        <TimePicker
          label=""
          value={amValue}
          onChange={handleAmChange}
          disabled={!checked}
          renderInput={(params) => (
            <TextField
              {...params}
              value={amValue}
              sx={{ width: 80, marginX: 1.5 }}
              id="standard-basic"
              label=""
              variant="standard"
              placeholder="hh:mm"
            />
          )}
        />
        <TimePicker
          label=""
          value={pmValue}
          onChange={handlePmChange}
          disabled={!checked || !amValue}
          renderInput={(params) => (
            <TextField
              {...params}
              value={pmValue}
              sx={{ width: 80, marginX: 1.5 }}
              id="standard-basic"
              label=""
              variant="standard"
              placeholder="hh:mm"
            />
          )}
        />
      </div>
    </LocalizationProvider>
  );
};
export default TimeRange;

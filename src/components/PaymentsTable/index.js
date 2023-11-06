import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import AppleIcon from "@mui/icons-material/Apple";
import AdbIcon from "@mui/icons-material/Adb";
import { Grid, Typography, Button } from "@mui/material";
import { api } from "src/utils/api";
import Switch from "@mui/material/Switch";

export default function TableRow() {
  const [paymentdetails, setPaymentdetails] = useState([]);

  console.log("getpayment", paymentdetails);
  useEffect(() => {
    api
      .getPayment({})
      .then((res) => {
        setPaymentdetails(res.data);
      })
      .catch((err) => {});
  }, []);

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredbg, setIsHoveredbg] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnterbg = () => {
    setIsHoveredbg(true);
  };

  const handleMouseLeavebg = () => {
    setIsHoveredbg(false);
  };

  const handleStatusChange = (id, newStatus) => {
    const updatedPaymentDetails = paymentdetails.map((item) => {
      if (item._id === id) {
        item.status = newStatus;
      }
      return item;
    });

    setPaymentdetails(updatedPaymentDetails);

    api
      .editPayment({ _id: id, status: newStatus })
      .then((res) => {
        console.log("Status updated successfully");
      })
      .catch((err) => {
        console.error("Error updating status", err);
      });
  };

  return (
    <>
      {paymentdetails.map((item) => (
        <tr
          onMouseEnter={handleMouseEnterbg}
          onMouseLeave={handleMouseLeavebg}
          style={{
            paddingLeft: "10px",
            backgroundColor: isHoveredbg ? "#faf2c0" : "inherit",
          }}
        >
          <td style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                marginRight: "5px",
                backgroundColor: item.status === "pending" ? "red" : "green",
              }}
            />
            <input
              type="text"
              value={item.status}
              onChange={(e) => handleStatusChange(item._id, e.target.value)}
            />
          </td>
          <td style={{ paddingLeft: "10px", marginTop: 10 }}>
            <Typography variant="subtitle2">{item.amount}</Typography>
          </td>
          <td style={{ paddingLeft: "10px", marginTop: 10 }}>
            <Typography variant="subtitle2">{item.buyer}</Typography>
          </td>
          <td style={{ display: "flex", marginTop: 10 }}>
            <Typography variant="subtitle2">{item.seller}</Typography>
          </td>

          <td style={{ paddingLeft: "10px", marginTop: 10 }}>
            <Typography variant="subtitle2">{item.booking}</Typography>
            {/* <Button
                sx={{
                  mt: 1,
                  backgroundColor: isHovered ? "black" : "inherit",
                  color: isHovered ? "yellow" : "inherit",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "yellow",
                  },
                }}
                variant="outlined"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Details
              </Button> */}
          </td>
        </tr>
      ))}
    </>
  );
}

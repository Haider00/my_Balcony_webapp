import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import AppleIcon from "@mui/icons-material/Apple";
import AdbIcon from "@mui/icons-material/Adb";
import { Grid, Typography, Button } from "@mui/material";
import Switch from "@mui/material/Switch";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { List, ListItem, ListItemText } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { api } from "../../utils/api";
export default function TableRow() {
  const [WorkSpaces, setWorkSpaces] = useState([]);
  console.log("workspacesamenities", WorkSpaces);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.getWorkSpace({
          query: `?page=${currentPage}&limit=${itemsPerPage}`,
        });
        setWorkSpaces(res.data);
        setTotalPages(Math.ceil(res.total / itemsPerPage));
      } catch (err) {
        console.log("Error fetching workspaces:", err);
      }
    };

    fetchData();
  }, [currentPage]);
  const [expandedItem, setExpandedItem] = useState(null);
  const handleExpandItem = (index) => {
    setExpandedItem((prevExpandedItem) =>
      prevExpandedItem === index ? null : index
    );
  };
  const [checked, setChecked] = useState(true);
  const [status, setStatus] = useState("proceed");

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "canceled":
        return "red";
      case "proceed":
        return "green";
      case "onHold":
        return "yellow";
      default:
        return "blue"; // Default color if status doesn't match any of the cases
    }
  };
  const divStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    marginRight: "5px",
    backgroundColor: getStatusColor(status), // Call a helper function to get the background color based on the status
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
  return (
    <>
      {WorkSpaces.map((workspace, index) => (
        <tr
          style={{
            paddingLeft: "10px",
            backgroundColor: isHoveredbg ? "#fff" : "inherit",
          }}
        >
          <td style={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography variant="subtitle2">{workspace._id}</Typography>
          </td>
          <td style={{ paddingLeft: "10px", marginTop: 10 }}>
            <Typography variant="subtitle2">Commercial, Office</Typography>
          </td>
          <td
            style={{ alignSelf: "center", paddingLeft: "10px", marginTop: 10 }}
          >
            <FilePresentIcon />
          </td>
          <td
            className="edit-list"
            style={{
              alignItems: "center",
              marginTop: 10,
              position: "absolute",
            }}
          >
            {expandedItem === index ? (
              <List sx={{ zIndex: 100, background: "#fff", boxShadow: 3 }}>
                <ListItem button>
                  <ListItemText primary="Download" />
                </ListItem>

                <ListItem button>
                  <ListItemText primary="Share" />
                </ListItem>
              </List>
            ) : (
              <MoreHorizIcon onClick={() => handleExpandItem(index)} />
            )}
          </td>
        </tr>
      ))}
      <tr className="pagination-row">
        <Pagination
          page={currentPage}
          count={totalPages}
          color="primary"
          onChange={handleChangePage}
        />
      </tr>
    </>
  );
}

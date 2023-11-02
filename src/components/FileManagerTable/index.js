import React, { useState, useRef, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import AppleIcon from "@mui/icons-material/Apple";
import AdbIcon from "@mui/icons-material/Adb";
import { Grid, Typography, Button } from "@mui/material";
import Switch from "@mui/material/Switch";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { api } from "../../utils/api";
import { List, ListItem, ListItemText } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";
import JSZip from "jszip";
import styled from "styled-components";
import { useWorkspaceDetailState } from "src/context/workspaceDetail.context";

const Section = styled.div`
  section {
    display: flex;
    justify-content: center;
  }

  .control-container {
    display: flex;
    align-items: center;
    position: relative;
    width: 150px;
    height: 50px;
  }

  .states-control input {
    display: none;
  }

  .states-control input:checked ~ .display {
    background-color: white;
  }

  .states-control .display {
    box-sizing: border-box;
    width: 60px;
    height: 20px;
    border-radius: 12px;
  }

  .states-control .display:after {
    position: relative;
    display: block;
    content: "";
    height: 100%;
    left: 0;
    border-radius: 12px;
    background-color: #fff;
    transition: all 0.2s ease;
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.6);
  }

  .states-control .display label {
    height: 100%;
    float: left;
    cursor: pointer;
  }

  .states-control .radiobuttons input.rejected:checked ~ .display:after {
    left: 0;
  }

  .states-control.three-states input.pending:checked ~ .display:after {
    left: calc(100% / 3);
    background-color: yellow;
  }

  .states-control.three-states input.accepted:checked ~ .display:after {
    left: calc(100% / 3 * 2);
  }

  .states-control.three-states .display:after {
    width: calc(100% / 3);
  }

  .states-control.three-states label {
    width: calc(100% / 3);
  }

  .states-control.three-states input.rejected:checked ~ .display {
    background-color: red;
  }
  .states-control.three-states input.pending:checked ~ .display {
    background-color: black;
  }
  .states-control.three-states input.accepted:checked ~ .display {
    background-color: green;
  }
`;

export default function TableRow() {
  const [WorkSpaces, setWorkSpaces] = useState([]);
  console.log("workspaces", WorkSpaces);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  const [expandedItem, setExpandedItem] = useState(null);
  const handleExpandItem = (index) => {
    setExpandedItem((prevExpandedItem) =>
      prevExpandedItem === index ? null : index
    );
  };

  const handleStatusChange = (index, status) => {
    const updatedWorkSpaces = [...WorkSpaces];
    updatedWorkSpaces[index].status = status;
    setWorkSpaces(updatedWorkSpaces);

    const workspaceId = updatedWorkSpaces[index]._id;

    api
      .updateWorkSpace({ body: { status }, query: { workspaceId } })
      .then((res) => {
        console.log("Workspace updated successfully:");
      })
      .catch((err) => {
        console.log("Error updating workspace:", err);
      });
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

  const [percentage, setPercentage] = useState(20);
  const handlePercentageChange = (event, index) => {
    const value = event.target.value;
    const updatedWorkSpaces = [...WorkSpaces];
    updatedWorkSpaces[index].chargesPercentage = value;
    setWorkSpaces(updatedWorkSpaces);
    setPercentage(value);
  };

  const handlePercentageBlur = (index) => {
    const workspace = WorkSpaces[index];
    const workspaceId = workspace._id;

    const chargesPercentage = workspace.chargesPercentage;
    console.log("prcn", chargesPercentage);
    api
      .updateWorkSpace({
        body: { chargesPercentage },
        query: { workspaceId },
      })
      .then((res) => {
        console.log("Percentage updated successfully:");
      })
      .catch((err) => {
        console.log("Error number updating Percentage:", err);
      });
  };

  const [selectedValue, setSelectedValue] = useState("");

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
  const downloadImagesAndFile = (workspace) => {
    const imageUrls = [
      workspace.firstImage,
      workspace.secondImage,
      workspace.thirdImage,
    ];

    const zip = new JSZip();

    // Create a folder for the workspace
    const workspaceFolder = zip.folder(`workspace_files_${workspace.name}`);

    // Create an array to store image and file fetching promises
    const promises = [];

    // Add each image to the workspace folder if the URL is not empty
    imageUrls.forEach((imageUrl, i) => {
      if (imageUrl) {
        const imagePromise = fetch(imageUrl)
          .then((response) => response.blob())
          .then((blob) => {
            workspaceFolder.file(`image_${i}.jpg`, blob);
          })
          .catch((error) => {
            console.error("Error downloading image:", error);
          });

        promises.push(imagePromise);
      }
    });

    // Fetch and add the file to the workspace folder if the URL is not empty
    if (workspace.file) {
      const filePromise = fetch(workspace.file)
        .then((response) => response.blob())
        .then((blob) => {
          workspaceFolder.file(`workspace_file.pdf`, blob);
        })
        .catch((error) => {
          console.error("Error downloading file:", error);
        });

      promises.push(filePromise);
    }

    // Wait for all image and file fetching promises to complete
    Promise.all(promises).then(() => {
      // Generate the zip folder for the workspace
      zip
        .generateAsync({ type: "blob" })
        .then((content) => {
          // Create a temporary anchor element to trigger the download
          const tempAnchor = document.createElement("a");
          tempAnchor.href = URL.createObjectURL(content);
          tempAnchor.download = `workspace_files_${workspace.name}.zip`;

          // Trigger the download
          tempAnchor.click();
        })
        .catch((error) => {
          console.error("Error generating the zip folder:", error);
        });
    });
  };

  return (
    <>
      {WorkSpaces.map((workspace, index) => (
        <tr
          onMouseEnter={handleMouseEnterbg}
          onMouseLeave={handleMouseLeavebg}
          style={{
            paddingLeft: "10px",
          }}
        >
          <td style={{ alignItems: "center" }}>
            <Typography variant="subtitle2">{workspace.name}</Typography>
          </td>
          <td style={{ paddingLeft: "10px", marginTop: 10 }}>
            <TextField
              type="number"
              InputProps={{
                inputProps: {
                  max: 100,
                  min: 10,
                },
              }}
              value={workspace.percentage}
              onChange={(event) => handlePercentageChange(event, index)}
              onBlur={() => handlePercentageBlur(index)}
            />
          </td>
          <td
            style={{ alignSelf: "center", paddingLeft: "10px", marginTop: 10 }}
          >
            <Typography variant="subtitle2">{workspace._id}</Typography>
          </td>
          <td>
            <Section>
              <section>
                <div className="control-container">
                  <div className="states-control three-states radiobuttons">
                    <input
                      type="radio"
                      id={`three-rejected-${index}`}
                      className="rejected"
                      name={`three-options-${index}`}
                      value="rejected"
                      onChange={() => handleStatusChange(index, "rejected")}
                      checked={workspace.status === "rejected"}
                    />
                    <input
                      type="radio"
                      id={`three-pending-${index}`}
                      className="pending"
                      name={`three-options-${index}`}
                      value="pending"
                      checked={workspace.status === "pending"}
                      onChange={() => handleStatusChange(index, "pending")}
                    />
                    <input
                      type="radio"
                      id={`three-accepted-${index}`}
                      className="accepted"
                      name={`three-options-${index}`}
                      value="accepted"
                      onChange={() => handleStatusChange(index, "accepted")}
                      checked={workspace.status === "accepted"}
                    />

                    <div className="display">
                      <label
                        className="rejected"
                        htmlFor={`three-rejected-${index}`}
                      ></label>
                      <label
                        className="pending"
                        htmlFor={`three-pending-${index}`}
                      ></label>
                      <label
                        className="accepted"
                        htmlFor={`three-accepted-${index}`}
                      ></label>
                    </div>
                  </div>
                </div>
              </section>
            </Section>
          </td>
          <td style={{ alignItems: "center", marginTop: 10 }}>
            <Typography variant="subtitle2">{workspace.owner}</Typography>
          </td>
          <td style={{ alignItems: "center", marginTop: 10 }}>
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
                  <ListItemText
                    primary="Download"
                    onClick={() => downloadImagesAndFile(workspace)}
                  />
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

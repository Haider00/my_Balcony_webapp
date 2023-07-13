import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CheckBox from "@mui/icons-material/CheckBox";
import CropSquare from "@mui/icons-material/CropSquare";
import Typography from "@mui/material/Typography";
import { TextInput, Title } from "../../component";
import { useEffect, useRef, useState } from "react";
import Resizer from "react-image-file-resizer";
import { api } from "../../utils/api";
import styledcomp from "styled-components";
import Router from "next/router";
import TextInput2 from "../../component/TextInput2/index";

import { useWorkspaceDispatch } from "src/context/workspace.context";
import WorkspaceDetail from "../workspaceDetail";
import { useWorkspaceDetailState } from "src/context/workspaceDetail.context";
const Img = styledcomp.img`
height:inherit;
width:auto;
`;
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const FormWb = ({ handleInfo = ({}) => {} }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    handleInfo(info);
  }, [info]);

  return (
    <Grid>
      <Box>
        <div
          style={{
            marginBottom: "30px",
            width: "355px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <TextInput2
            id="name"
            label="Name of Workspace:"
            size="small"
            onChange={(e) => {
              setInfo({ ...info, name: e.target.value });
            }}
            value={info?.name}
          />
        </div>
        <div
          style={{
            marginBottom: "30px",
            width: "355px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <TextInput2
            id="address"
            label="Address:"
            size="small"
            onChange={(e) => {
              setInfo({ ...info, address: e.target.value });
            }}
            value={info?.address}
          />
        </div>

        <div
          style={{
            marginBottom: "30px",
            width: "355px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <TextInput2
            id="address"
            label="Address2:"
            size="small"
            onChange={(e) => {
              setInfo({ ...info, address2: e.target.value });
            }}
            value={info?.address2}
          />
        </div>

        <div
          style={{
            marginBottom: "30px",
            width: "355px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <TextInput2
            id="city"
            label="City:"
            size="small"
            onChange={(e) => {
              setInfo({ ...info, city: e.target.value });
            }}
            value={info?.city}
          />
        </div>

        <div
          style={{
            marginBottom: "30px",
            width: "355px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <TextInput2
            id="state"
            label="State:"
            size="small"
            onChange={(e) => {
              setInfo({ ...info, state: e.target.value });
            }}
            value={info?.state}
          />
        </div>

        <div
          style={{
            marginBottom: "30px",
            width: "355px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <TextInput2
            id="country"
            label="Country:"
            size="small"
            onChange={(e) => {
              setInfo({ ...info, country: e.target.value });
            }}
            value={info?.country}
          />
        </div>
        <Box
          sx={{
            marginY: 1.5,
            width: "80%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              onClick={() => {
                setInfo({ ...info, workspaceType: "indoor" });
              }}
            >
              {info?.workspaceType === "indoor" ? (
                <CheckBox style={{ color: "#000", fontSize: 15, margin: 10 }} />
              ) : (
                <CropSquare
                  style={{ color: "#000", fontSize: 15, margin: 10 }}
                />
              )}
            </div>
            <Typography
              style={{
                width: "100%",
                fontSize: 13,
                color: "#000",
              }}
            >
              Hosting Indoor
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              onClick={() => {
                setInfo({ ...info, workspaceType: "outdoor" });
              }}
            >
              {info?.workspaceType === "outdoor" ? (
                <CheckBox style={{ color: "#000", fontSize: 15, margin: 10 }} />
              ) : (
                <CropSquare
                  style={{ color: "#000", fontSize: 15, margin: 10 }}
                />
              )}
            </div>

            <Typography
              style={{
                width: "100%",
                fontSize: 13,
                color: "#000",
              }}
            >
              Hosting Outdoor
            </Typography>
          </div>
        </Box>
      </Box>
    </Grid>
  );
};
export const LeftWallpaperWb = () => {
  return (
    <Grid>
      <Typography
        style={{
          fontSize: 34,
          color: "#000",
          fontWeight: "600",
        }}
      >
        We need a few
        <br />
        information about you
        <br /> and your workspace..
      </Typography>
    </Grid>
  );
};

export const WorksapceImages = () => {
  const workSpaceDispatch = useWorkspaceDispatch();
  const [mainImage, setMainImage] = useState("");
  const [secondImage, setSecondImage] = useState("");
  const [thirdImage, setThirdImage] = useState("");
  const [imageType, SetImageType] = useState("");

  const uploadFileRef = useRef(null);

  const handleUploadImage = (e) => {
    console.log("e", e);
    uploadImages(e.target.files[0]);
  };
  const handleUploadImageClick = () => {
    uploadFileRef.current.click();
  };

  const uploadImages = (element) => {
    Resizer.imageFileResizer(
      element,
      720,
      720,
      "JPEG",
      100,
      0,
      (uri) => {
        // console.log('FILES>>>>1', uri)
        api
          .uploadImage({ image: uri })
          .then((res) => {
            console.log("FILES>>>>", res);
            if (imageType === "main") {
              workSpaceDispatch({
                type: "SET_WORKSPACE_FIRST_IMAGE",
                payload: res,
              });
              setMainImage(res.Location);
            } else if (imageType === "second") {
              workSpaceDispatch({
                type: "SET_WORKSPACE_SECOND_IMAGE",
                payload: res,
              });
              setSecondImage(res.Location);
            } else if (imageType === "third") {
              workSpaceDispatch({
                type: "SET_WORKSPACE_THIRD_IMAGE",
                payload: res,
              });
              setThirdImage(res.Location);
            }
            // handleUploadProductImage(res.data, product, element.cover);
          })
          .catch((err) => {
            console.log("FILES>>>>E", err.response);
            // setDisplay(true);
            // setMessage("Something Went Wrong While Adding Your Post");
          });
      },
      "base64"
    );
  };

  return (
    <Grid
      item
      xs={12}
      md={10}
      sm={12}
      sx={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <input
        ref={uploadFileRef}
        onChange={handleUploadImage}
        type="file"
        style={{ display: "none" }}
        id="group_image"
        accept="image/*"
      />
      <div
        onClick={() => {
          handleUploadImageClick();
          SetImageType("main");
        }}
        style={{
          height: 200,
          width: "100%",
          borderRadius: 10,
          backgroundColor: "#000",
          margin: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {mainImage && <Img resizeMode="contain" src={mainImage} alt="image" />}
      </div>

      <div style={{ display: "flex", width: "100%" }}>
        <div
          onClick={() => {
            handleUploadImageClick();
            SetImageType("second");
          }}
          style={{
            height: 200,
            width: "100%",
            borderRadius: 10,
            backgroundColor: "#000",
            margin: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {secondImage && <Img src={secondImage} alt="image" />}
        </div>

        <div
          onClick={() => {
            handleUploadImageClick();
            SetImageType("third");
          }}
          style={{
            height: 200,
            width: "100%",
            borderRadius: 10,
            backgroundColor: "#000",
            margin: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {thirdImage && <Img src={thirdImage} alt="image" />}
        </div>
      </div>
    </Grid>
  );
};
export const WorksapceImagesBookingOverview = () => {
  const workspaceDetail = useWorkspaceDetailState();
  // console.log("detail", workspaceDetail?.workspaceDetail?._id);
  const [mainImage, setMainImage] = useState("");
  const [secondImage, setSecondImage] = useState("");
  const [thirdImage, setThirdImage] = useState("");
  const [imageType, SetImageType] = useState("");
  const uploadFileRef = useRef(null);

  useEffect(() => {
    api
      .getImages({
        query: `?workSpace=${workspaceDetail?.workspaceDetail?._id}`,
      })
      .then((res) => {
        setMainImage(res.data[0].Location);
        setSecondImage(res.data[1].Location);
        setThirdImage(res.data[2].Location);
      })
      .catch((err) => {
        console.log("Error3", err);
      });
  }, [workspaceDetail?.workspaceDetail?._id]);

  return (
    <Grid
      item
      xs={12}
      md={10}
      sx={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: 250,
          width: "100%",
          borderRadius: 10,
          backgroundColor: "#000",
          margin: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        {mainImage && (
          <img
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            src={mainImage}
            alt="image"
          />
        )}
      </div>

      <div style={{ display: "flex", width: "100%" }}>
        <div
          style={{
            height: 250,
            width: "100%",
            borderRadius: 10,
            backgroundColor: "#000",
            margin: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          {secondImage && (
            <img
              style={{ height: "100%", width: "100%" }}
              src={secondImage}
              alt="image"
            />
          )}
        </div>
        <div
          style={{
            height: 250,
            width: "100%",
            borderRadius: 10,
            backgroundColor: "#000",
            margin: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          {thirdImage && (
            <img
              style={{ height: "100%", width: "100%" }}
              src={thirdImage}
              alt="image"
            />
          )}
        </div>
      </div>
    </Grid>
  );
};
export const WorksapceImagesWorkspaceEdit = () => {
  const [mainImage, setMainImage] = useState("");
  const [secondImage, setSecondImage] = useState("");
  const [thirdImage, setThirdImage] = useState("");
  const [imageType, SetImageType] = useState("");
  const uploadFileRef = useRef(null);

  const handleUploadImage = (e) => {
    uploadImages(e.target.files[0]);
  };
  const handleUploadImageClick = () => {
    uploadFileRef.current.click();
  };

  const uploadImages = (element) => {
    Resizer.imageFileResizer(
      element,
      720,
      720,
      "JPEG",
      100,
      0,
      (uri) => {
        api
          .uploadImage({ image: uri })
          .then((res) => {
            // console.log("RESPONSE....", res);
            if (imageType === "main") {
              setMainImage(res.Location);
            } else if (imageType === "second") {
              setSecondImage(res.Location);
            } else if (imageType === "third") {
              setThirdImage(res.Location);
            }
            // handleUploadProductImage(res.data, product, element.cover);
          })
          .catch((err) => {
            console.log("RESPONSE....E", err);
            // setDisplay(true);
            // setMessage("Something Went Wrong While Adding Your Post");
          });
      },
      "base64"
    );
  };

  return (
    <Grid
      item
      xs={12}
      md={10}
      sx={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <input
        ref={uploadFileRef}
        onChange={handleUploadImage}
        type="file"
        style={{ display: "none" }}
        id="group_image"
        accept="image/*"
      />
      <div
        onClick={() => {
          handleUploadImageClick();
          SetImageType("main");
        }}
        style={{
          height: 250,
          width: "100%",
          borderRadius: 10,
          backgroundColor: "#000",
          margin: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        {mainImage && (
          <img
            height={200}
            width="100%"
            resizeMode="contain"
            src={mainImage}
            alt="image"
          />
        )}
        <div
          style={{
            height: 80,
            width: "25%",
            borderTopLeftRadius: 10,
            backgroundColor: "#fff",
            // margin: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography sx={{ marginLeft: 2 }} varient="h6">
            +
          </Typography>
          <Typography sx={{ marginLeft: 2 }} varient="h6">
            Add image (Main)
          </Typography>
        </div>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <div
          onClick={() => {
            handleUploadImageClick();
            SetImageType("second");
          }}
          style={{
            height: 250,
            width: "100%",
            borderRadius: 10,
            backgroundColor: "#000",
            margin: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          {secondImage && (
            <img height={200} width="50%" src={secondImage} alt="image" />
          )}
          <div
            style={{
              height: 70,
              width: "55%",
              borderTopLeftRadius: 10,
              backgroundColor: "#fff",
              // margin: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Typography sx={{ marginLeft: 2 }} varient="h6">
              +
            </Typography>
            <Typography sx={{ marginLeft: 2 }} varient="h6">
              Add image (Main)
            </Typography>
          </div>
        </div>
        <div
          onClick={() => {
            handleUploadImageClick();
            SetImageType("third");
          }}
          style={{
            height: 250,
            width: "100%",
            borderRadius: 10,
            backgroundColor: "#000",
            margin: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          {thirdImage && (
            <img height={200} width="50%" src={thirdImage} alt="image" />
          )}
          <div
            style={{
              height: 70,
              width: "55%",
              borderTopLeftRadius: 10,
              backgroundColor: "#fff",
              // margin: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Typography sx={{ marginLeft: 2 }} varient="h6">
              +
            </Typography>
            <Typography sx={{ marginLeft: 2 }} varient="h6">
              Add image (Main)
            </Typography>
          </div>
        </div>
      </div>
    </Grid>
  );
};
export default FormWb;

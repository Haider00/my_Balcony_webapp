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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const FormWb = ({ handleInfo = ({ }) => { } }) => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    handleInfo(info);
  }, [info]);
  return (
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          display: "flex",
          bgcolor: "background.paper",
          alignItems: "center",
          flexDirection: "column",
          // width: "80%",
          flex: 1,
          height: "100%",
          padding: { xs: 1, md: 2 },
          marginX: 3,
          marginY: 1.5,
          justifyContent: "space-between",
        }}
      >
        <TextInput
          width="80%"
          // sx={{ marginY: 1.5, width: "80%" }}
          id="address"
          label="address"
          // variant="outlined"
          size="small"
        // onChange={(e) => {
        //   setInfo({ ...info, address: e.target.value });
        // }}
        // value={info?.address}
        />
        <TextInput
          width="80%"
          // sx={{ marginY: 1.5, width: "80%" }}
          id="address"
          label="address2"
          // variant="outlined"
          size="small"
        // onChange={(e) => {
        //   setInfo({ ...info, address2: e.target.value });
        // }}
        // value={info?.address2}
        />
        <TextInput
          width="80%"
          // sx={{ marginY: 1.5, width: "80%" }}
          id="city"
          label="city"
          // variant="outlined"
          size="small"
        // onChange={(e) => {
        //   setInfo({ ...info, city: e.target.value });
        // }}
        // value={info?.city}
        />
        <TextInput
          width="80%"
          // sx={{ marginY: 1.5, width: "80%" }}
          id="state"
          label="state"
          // variant="outlined"
          size="small"
        // onChange={(e) => {
        //   setInfo({ ...info, state: e.target.value });
        // }}
        // value={info?.state}
        />
        <TextInput
          width="80%"
          // sx={{ marginY: 1.5, width: "80%" }}
          id="country"
          label="country"
          // variant="outlined"
          size="small"
        // onChange={(e) => {
        //   setInfo({ ...info, country: e.target.value });
        // }}
        // value={info?.country}
        />
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
                fontSize: 14,
                color: "#000",
              }}
            >
              Host Indoor
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
                fontSize: 14,
                color: "#000",
              }}
            >
              Host Outdoor
            </Typography>
          </div>
        </Box>
      </Box>
    </Grid>
  );
};
export const LeftWallpaperWb = () => {
  return (
    <Grid
      item
      xs={12}
      md={4}
      sx={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 20,
      }}
    >
      <Typography
        style={{
          width: "50%",
          fontSize: 26,
          color: "#000",
          fontWeight: "600",
        }}
      >
        We need Few Information About You And Your WorkSpace
      </Typography>
    </Grid>
  );
};


export const WorksapceImages = () => {
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
            console.log("RESPONSE....", res);
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
        {mainImage && (
          <img
            height={200}
            width="100%"
            resizeMode="contain"
            src={mainImage}
            alt="image"
          />
        )}
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
          {secondImage && (
            <img height={200} width="50%" src={secondImage} alt="image" />
          )}
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
          {thirdImage && (
            <img height={200} width="50%" src={thirdImage} alt="image" />
          )}
        </div>
      </div>
    </Grid>
  );
};

export const WorksapceImagesBookingOverview = () => {
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
            console.log("RESPONSE....", res);
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
        <div style={{
          height: 80,
          width: "25%",
          borderTopLeftRadius: 10,
          backgroundColor: "#fff",
          // margin: 1,
          display: "flex",
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: "flex-start",
        }}>
          <Typography sx={{ marginLeft: 2 }} varient='h6'>+</Typography>
          <Typography sx={{ marginLeft: 2 }} varient='h6'>Add image (Main)</Typography>
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
          <div style={{
            height: 70,
            width: "55%",
            borderTopLeftRadius: 10,
            backgroundColor: "#fff",
            // margin: 1,
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "flex-start",
          }}>
            <Typography sx={{ marginLeft: 2 }} varient='h6'>+</Typography>
            <Typography sx={{ marginLeft: 2 }} varient='h6'>Add image (Main)</Typography>
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
          <div style={{
            height: 70,
            width: "55%",
            borderTopLeftRadius: 10,
            backgroundColor: "#fff",
            // margin: 1,
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "flex-start",
          }}>
            <Typography sx={{ marginLeft: 2 }} varient='h6'>+</Typography>
            <Typography sx={{ marginLeft: 2 }} varient='h6'>Add image (Main)</Typography>
          </div>
        </div>
      </div>
    </Grid>
  );
};
export default FormWb;

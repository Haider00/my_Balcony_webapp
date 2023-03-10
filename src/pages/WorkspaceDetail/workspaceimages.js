import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styledcomp from "styled-components";

const Img = styledcomp.img`
height:inherit;
width:auto;
`;

const imagesarray = {
  workspaceImage: [
    {
      Bucket: "string",
      ETag: "string",
      Key: "string",
      Location:
        "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
      type: "string",
    },
    {
      Bucket: "string",
      ETag: "string",
      Key: "string",
      Location:
        "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
      type: "string",
    },
    {
      Bucket: "string",
      ETag: "string",
      Key: "string",
      Location:
        "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
      type: "string",
    },
  ],
};

const firstimage = imagesarray.workspaceImage[0].Location;
const secondimage = imagesarray.workspaceImage[1].Location;
const thirdimage = imagesarray.workspaceImage[2].Location;
export const WorksapceImages = () => {
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
        type="file"
        style={{ display: "none" }}
        id="group_image"
        accept="image/*"
      />
      <div
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
        <Img resizeMode="contain" src={firstimage} alt="image" />
      </div>

      <div style={{ display: "flex", width: "100%" }}>
        <div
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
          <Img src={secondimage} alt="image" />
        </div>

        <div
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
          <Img src={thirdimage} alt="image" />
        </div>
      </div>
    </Grid>
  );
};

export default WorksapceImages;

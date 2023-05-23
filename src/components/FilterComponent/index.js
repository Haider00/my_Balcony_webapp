import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

export default function Filters () {
    const [open, setopen] = useState(false);
    if(open){
        return (
            <Box
              sx={{
                backgroundColor: "#fff",
                width: 330,
                height: "100%",
              }}
            >
              <Box sx={{ marginTop: 1, marginLeft: 1 }}>
                <Button
                  sx={{
                    fontSize: 9,
                    color: "#000",
                    padding: 0,
                    minWidth: 0,
                    textTransform: "none",
                  }}
                  onClick={() => {
                    setopen(false);
                  }}
                >
                  <ClearIcon />
                </Button>
              </Box>
              <Box>
                <FormGroup>
                  <Typography sx={{ textAlign: "right", marginRight: 2 }}>
                    place
                  </Typography>
                  <Box style={{ display: "flex", justifyContent: "flex-end" }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                        />
                      }
                      label="indoor"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                        />
                      }
                      label="outdoor"
                    />
                  </Box>
                </FormGroup>
              </Box>
              <Box>
                <Typography
                  sx={{
                    textAlign: "right",
                    marginRight: 2,
                    marginBottom: 1,
                    marginTop: 2,
                  }}
                >
                  price range
                </Typography>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <TextField
                    label="min"
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    sx={{ width: 80 }}
                    type="number"
                    inputProps={{
                      min: 0,
                      max: 100,
                      step: 1,
                    }}
                  />
                  <Typography sx={{ marginX: 2 }}>-</Typography>
                  <TextField
                    label="max"
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    sx={{ width: 80, marginRight: 2 }}
                    type="number"
                    inputProps={{
                      min: 0,
                      max: 100,
                      step: 1,
                    }}
                  />
                </Box>
              </Box>
              <Box>
                <Typography
                  sx={{
                    textAlign: "right",
                    marginRight: 2,
                    marginBottom: 1,
                    marginTop: 2,
                  }}
                >
                  ratings
                </Typography>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Checkbox
                    sx={{ padding: 0 }}
                    icon={<StarBorderIcon />}
                    checkedIcon={<StarIcon sx={{ color: "#000" }} />}
                  />
                  <Checkbox
                    sx={{ padding: 0 }}
                    icon={<StarBorderIcon />}
                    checkedIcon={<StarIcon sx={{ color: "#000" }} />}
                  />
                  <Checkbox
                    sx={{ padding: 0 }}
                    icon={<StarBorderIcon />}
                    checkedIcon={<StarIcon sx={{ color: "#000" }} />}
                  />
                  <Checkbox
                    sx={{ padding: 0 }}
                    icon={<StarBorderIcon />}
                    checkedIcon={<StarIcon sx={{ color: "#000" }} />}
                  />
                  <Checkbox
                    sx={{
                      marginRight: 2,
                      padding: 0,
                    }}
                    icon={<StarBorderIcon />}
                    checkedIcon={<StarIcon sx={{ color: "#000" }} />}
                  />
                </Box>
              </Box>
              <Box>
                <Typography
                  sx={{
                    textAlign: "right",
                    marginRight: 2,
                    marginBottom: 1,
                    marginTop: 2,
                  }}
                >
                  workspace amenities
                </Typography>
                <Box
                  style={{
                    display: "flex",
                    marginLeft: 16,
                    justifyContent: "space-between",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="commercial office"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="resedential"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="large table"
                    sx={{ width: 80 }}
                  />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    marginLeft: 16,
                    justifyContent: "space-between",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="medium table"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="small table"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="chairs"
                    sx={{ width: 80 }}
                  />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    marginLeft: 16,
                    justifyContent: "space-between",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="wifi"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="ethernet"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="computer"
                    sx={{ width: 80 }}
                  />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    marginLeft: 16,
                    justifyContent: "space-between",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="mouse"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="keyboard"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="printing, printer"
                    sx={{ width: 80 }}
                  />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    marginLeft: 16,
                    justifyContent: "space-between",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="tv, television"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="pen, pencil"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="paper, notebook"
                    sx={{ width: 80 }}
                  />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    marginLeft: 16,
                    justifyContent: "space-between",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="meeting room"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="headset, w.mic"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="headphone"
                    sx={{ width: 80 }}
                  />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    marginLeft: 16,
                    justifyContent: "space-between",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="coffee"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="couch"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="outdoor, deck"
                    sx={{ width: 80 }}
                  />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    marginLeft: 16,
                    justifyContent: "space-between",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="wheel chair accessible"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="water nearby"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="swimming pool"
                    sx={{ width: 80 }}
                  />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    marginLeft: 16,
                    justifyContent: "space-between",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="backyard, frontyard"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="gym"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="ping pong"
                    sx={{ width: 80 }}
                  />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    marginLeft: 16,
                    justifyContent: "space-between",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="views, roof, balcony, or penthouse"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="outlet, cord, charger"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="billiard, pool"
                    sx={{ width: 80 }}
                  />
                </Box>
              </Box>
            </Box>
          )}
    }
  

import React, { useEffect, useState } from "react";
import { CustomHeader } from "../component";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import MenuSection from "./MenuSection/menuSection";
import TableBottom from "src/assets/images/tablebottom.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CreditCardInput from "react-credit-card-input";
import { Button } from "@mui/material";
import { api } from "src/utils/api";
import { useAuthState } from "../context/auth.context";
import moment from "moment";
import { Snackbar } from "@mui/material";
import { set } from "date-fns";
import Head from "next/head";
import Image from "next/image";
export default function BookingOverview() {
  const auth = useAuthState();

  // console.log('strip', auth.user);

  const [age, setAge] = React.useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [cardArr, setCardArr] = useState([]);
  const [message, setMessage] = useState("");
  const [display, setDisplay] = useState(false);

  // console.log('cardArr>>>>>', cardArr)

  const cardExpiryMoment = moment(cardExpiry, "MM/YYYY");
  const month = cardExpiryMoment.format("MM");
  const year = cardExpiryMoment.format("YY");

  // console.log('cardArr',cardArr);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // console.log('auth>>>',auth.user)
  const postCard = () => {
    // console.log('auth.user>>>>',auth.user)
    api
      .attachCard({
        number: cardNumber,
        exp_month: month,
        exp_year: year,
        cvc: cardCVC,
        user: auth.user,
      })
      .then((res) => {
        // console.log('resssss',res)
        setMessage("Your card has been added successfully");
        setDisplay(true);
        getCards();
      })
      .catch((err) => {
        console.log("err", err);
        setMessage("Please check your card details and try again");
        // setDisplay(true);
      });
  };

  const getCards = () => {
    if (auth.user?.stripeCustomer) {
      api
        .getCard({ query: `?stripeCustomer=${auth.user?.stripeCustomer}` })
        .then((res) => {
          // console.log('res',res)
          setCardArr(res.data);
        })
        .catch((err) => {
          console.log("Error", err);
        });
    }
  };
  useEffect(() => {
    getCards();
  }, [auth.user]);

  return (
    <>
      <Head>
        <title>Wallet</title>
      </Head>
      <CustomHeader />
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
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          mt: 20,
        }}
        container
      >
        <Grid
          item
          xs={12}
          lg={4}
          md={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: 50,
            }}
          >
            <Typography
              sx={{
                width: "300px",
                fontWeight: "bold",
                textAlign: "end",
                mt: 3,
              }}
              variant="h6"
            >
              Wallet
            </Typography>

            <Card
              sx={{ minWidth: 350, mt: "20px" }}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
                borderRadius: "15px",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: 15,
                    alignSelf: "flex-end",
                    mb: 2,
                    color: "#000",
                  }}
                >
                  Your Card
                </Typography>
                <CreditCardInput
                  cardNumberInputProps={{
                    onBlur: (e) => console.log("number blur", e.target.value),
                    onChange: (e) => {
                      setCardNumber(e.target.value);
                      setMessage("");
                    },
                    onError: (err) => {
                      setMessage(err.toString());
                    },
                  }}
                  cardExpiryInputProps={{
                    onBlur: (e) => console.log("number blur", e.target.value),
                    onChange: (e) => {
                      setCardExpiry(e.target.value);
                      setMessage("");
                    },
                    onError: (err) => {
                      setMessage(err.toString());
                    },
                  }}
                  cardCVCInputProps={{
                    onBlur: (e) => console.log("number blur", e.target.value),
                    onChange: (e) => {
                      setCardCVC(e.target.value);
                      setMessage("");
                    },
                    onError: (err) => {
                      setMessage(err.toString());
                    },
                  }}
                  fieldClassName="input"
                />
                <TextField
                  style={{
                    borderBottom: "1px solid #000",
                    backgroundColor: "#fff",
                  }}
                  sx={{
                    alignSelf: "start",
                    mt: 4,
                    width: "80%",
                    backgroundColor: "#fff",
                  }}
                  id="outlined-basic"
                  label="Full Name on Card"
                  variant="filled"
                />
              </CardContent>
            </Card>
            <Button
              onClick={() => {
                if (message == "") {
                  postCard();
                } else {
                  setDisplay(true);
                }
              }}
              sx={{
                width: 150,
                mt: 5,
                borderRadius: 20,
                bgcolor: "#005451",
                textTransform: "lowercase",
              }}
              variant="contained"
            >
              + add card
            </Button>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cardArr.length > 0 && (
            <>
              <Divider
                sx={{ mt: 15, alignSelf: "center" }}
                className="divider"
                orientation="horizontal"
                flexItem
                style={{ background: "black", width: "50%" }}
              />
              {cardArr.map((item) => {
                return (
                  <>
                    <Box
                      sx={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "space-around",
                        mt: 3,
                      }}
                    >
                      <Typography variant="h6">{item.brand}</Typography>
                      <Typography>****{item.last4}</Typography>
                      <Typography
                        style={{ fontSize: "15px", color: "#7a797a" }}
                      >
                        (Default)
                      </Typography>
                    </Box>
                    {/* <Button
                      sx={{
                        width: 60,
                        padding: 0,
                        borderRadius: 20,
                        bgcolor: "#ea001b",
                        textTransform: "lowercase",
                        fontSize: 10,
                      }}
                      variant="contained"
                    >
                      delete
                    </Button> */}
                  </>
                );
              })}
              <Divider
                sx={{ mt: 3, alignSelf: "center" }}
                className="divider"
                orientation="horizontal"
                flexItem
                style={{ background: "black", width: "50%" }}
              />
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "flex-start",
                  mt: 5,
                }}
              >
                <img
                  width={70}
                  alt="Pa"
                  src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c530.png"
                />
              </Box>
            </>
          )}
        </Grid>
      </Grid>

      <Grid
        sx={{
          marginTop: 4,
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
        container
        spacing={2}
      >
        <Grid
          item
          md={3}
          sm={12}
          xs={12}
          sx={{
            marginBottom: 4,
            marginLeft: 5,
            marginRight: 5,
          }}
        >
          <MenuSection />
        </Grid>
        <Grid item md={8} sx={{ display: { xs: "none", md: "flex" } }}>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <Image
              style={{
                width: "100%",
              }}
              src={TableBottom}
              alt=""
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

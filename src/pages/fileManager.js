import React from "react";
import Admin from "../components/Admin/admin";
import { Grid, Typography } from "@mui/material";
import CustomHeader from "../component/CustomHeader/index";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Divider } from "@mui/material/";
import SearchRounded from "@mui/icons-material/Search";
import FileManagerTable from "@components/FileManagerTable/index";
import { styled } from "@mui/system";
import AdminMobileDropDown from "../component/AdminMobileDropDown/index";
import { useAuthState } from "src/context/auth.context";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import Head from "next/head";
export default function UsersManager() {
  const StyledGrid = styled(Grid)({
    "@media (max-width: 900px)": {
      display: "none",
    },
  });
  const auth = useAuthState();
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);

  if (auth?.user?.usertype === "user") {
    router.push("/");
  }
  React.useEffect(() => {
    if (auth?.user?.usertype === "admin") {
      setLoading(false);
    }
  }, [auth?.user]);

  return (
    <>
      <Head>
        <title>File Manager</title>
      </Head>
      <CustomHeader />

      <AdminMobileDropDown />
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <CircularProgress color="success" />
        </div>
      ) : (
        <Grid
          container
          sx={{ display: "flex", justifyContent: "center", mt: 10 }}
        >
          <StyledGrid sx={{ mt: 2 }} item xs={12} sm={12} md={6} lg={3}>
            <Admin selectedTab={3} />
          </StyledGrid>
          <Grid sx={{ mt: 6 }} item xs={12} sm={12} md={6} lg={9}>
            <Grid
              sx={{ mr: 6, display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <Typography variant="h6">
                  Workspace Host File Manager
                </Typography>
              </div>

              <div style={{ display: "flex", marginBottom: "5px" }}>
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "#edf3f5",
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    height: 35,
                    width: 35,
                    marginRight: "20px",
                    cursor: "pointer",
                  }}
                >
                  <SearchRounded
                    style={{
                      fontSize: 20,
                      color: "#000",
                    }}
                  />
                </div>
                <HelpOutlineIcon sx={{ marginTop: "5px", cursor: "pointer" }} />
              </div>
            </Grid>
            <Divider sx={{ width: "96%", mb: 1, mb: 2 }} />
            <Grid
              sx={{
                mr: 6,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <table cellSpacing={0} style={{ textAlign: "left" }}>
                <thead
                  style={{
                    paddingLeft: "10px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <tr style={{ backgroundColor: "#e3e9ef" }}>
                    <th
                      style={{
                        paddingLeft: "10px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      User/Host eMail
                    </th>
                    <th
                      style={{
                        paddingLeft: "10px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      Percentage
                    </th>
                    <th
                      style={{
                        paddingLeft: "10px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      Workspace ID
                    </th>
                    <th
                      style={{
                        paddingLeft: "10px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      Host Status
                    </th>
                    <th
                      style={{
                        paddingLeft: "10px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      User/Host Name
                    </th>
                    <th
                      style={{
                        paddingLeft: "10px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      Type
                    </th>
                    <th
                      style={{
                        paddingLeft: "10px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <FileManagerTable />
                </tbody>
              </table>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}

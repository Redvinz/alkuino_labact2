import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import gmail from "../images/gmail.png";
import { Grid } from "@mui/material";
import lens from "../images/lens.png";
import menu from "../images/menu.png";
import Profile from "./Profile";

export default function Navbar(props) {
  return (
    <Grid container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          elevation={0}
          position="static"
          sx={{
            top: "0",
            zIndex: "2",
            backgroundColor: "#F9F9F9",
            minHeight: "3.4vw",
            minWidth: "100%",
            paddingTop: "7px",
            paddingRight: "30px",
            color: "#202124",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={2}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: "1vw", color: "#3C3C3C" }}
                >
                  <img
                    src={menu}
                    alt=""
                    style={{ width: "1.4vw", marginLeft: "2vw" }}
                  />
                </IconButton>
                <img style={{ width: "1.5vw" }} src={gmail} alt="" />
                <Typography
                  sx={{
                    color: "#3C3C3C",
                    marginLeft: ".5vw",
                    fontSize: "1.1vw",
                  }}
                  variant="h6"
                  component="div"
                >
                  Gmail
                </Typography>
              </div>
            </Grid>
            <Grid item xs={8}>
              <div
                style={{
                  marginLeft: "-4.5vw",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "40px",
                  backgroundColor: "#E4EFFA",
                  width: "60vw",
                  height: "2.5vw",
                }}
              >
                <img
                  src={lens}
                  alt=""
                  style={{
                    width: "1vw",
                    // height: "1vw",
                    alignItems: "center",
                    marginLeft: "20px",
                  }}
                />
                <input
                  onChange={(e) => props.setSearch(e.target.value)}
                  placeholder="Search in mail"
                  style={{
                    fontSize: "0.9vw",
                    marginLeft: "0.5vw",
                    height: "1.8vw",
                    width: "30vw",
                    backgroundColor: "#E4EFFA",
                    border: "none",
                    outline: "none",
                  }}
                />
              </div>
            </Grid>

            <Grid item xs={2}>
              <Grid item xs={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={
                      "https://seekicon.com/free-icon-download/question-mark-circle-outline_1.svg"
                    }
                    alt=""
                    style={{
                      width: "1.3vw",
                      marginRight: "30px",
                      marginLeft: "42vw",
                    }}
                  />
                  <img
                    src={"https://www.svgrepo.com/show/111206/settings.svg"}
                    alt=""
                    style={{ width: "1.3vw", marginRight: "20px" }}
                  />
                </div>
              </Grid>

              <Profile />
            </Grid>
          </div>
        </AppBar>
      </Box>
    </Grid>
  );
}

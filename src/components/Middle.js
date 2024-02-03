import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import star from "../images/star.png";
import refresh from "../images/refresh.png";
import remove from "../images/bin.png";
import yellow from "../images/yellow.png";
import snooze from "../images/snooze.png";
import Checkbox from "@mui/material/Checkbox";

function Middle(props) {
  const [cellHover, setCellHover] = useState({});

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const dummyEmails = [
    {
      id: 1,
      sender: "LinkedIn",
      title: "Get more out of your job alerts - Check out these tips",
      starred: true,
    },
    {
      id: 2,
      sender: "Laravel",
      title:
        "Verify Email Address - Laravel Logo Hello! Please click the button below to ver...",
      starred: false,
    },
    {
      id: 3,
      sender: "GitHub",
      title:
        "[GitHub] Your password was reset - Hello Arvin, We wanted to let you know... ",
      starred: false,
    },
    {
      id: 4,
      sender: "Microsoft",
      title: "Get the most out of your OneDrive - Go to OneDrive",
      starred: true,
    },
    {
      id: 5,
      sender: "Samsung",
      title:
        "New sign-in to your Samsung account - New sign in to your Samsung accou...",

      starred: false,
    },
    {
      id: 6,
      sender: "Google",
      title: "Your Google Account has been created",
      starred: true,
    },
    {
      id: 7,
      sender: "Netflix",
      title: "New releases on Netflix this month",
      starred: true,
    },
  ];

  return (
    <div style={{ width: "79.5vw", marginLeft: "0.3vw" }}>
      <span>
        <Checkbox
          {...label}
          style={{ marginLeft: "0.8vw", marginRight: "0vw", marginBottom: "2.5vw" }}
        />

        <img
          src={refresh}
          alt=""
          style={{
            width: "1vw",
            height: "1vw",
            marginTop: "1.1vw",
            paddingBottom: "1vw",
          }}
        />
      </span>

      <div
        style={{
          fontSize: "0.8vw",
          marginLeft: "1.3vw",
          marginBottom: "1vw",
          marginTop: "-1vw",
          fontWeight: "500",
          fontFamily: "Roboto,RobotoDraft,Helvetica,Arial,sans-serif",
          color: "#0b57d0",
        }}
      >
        <img
          src={
            "https://www.gstatic.com/images/icons/material/system/1x/inbox_gm_blue600_20dp.png"
          }
          alt=""
          style={{
            width: "1.2vw",
            height: "1.2vw",
            marginRight: "1vw",
            paddingLeft: "0.1vw",
          }}
        />
        Primary
      </div>

      {dummyEmails.map((data) => (
        <Paper
          onMouseEnter={() => setCellHover((prev) => ({ ...prev, [data.id]: true }))}
          onMouseLeave={() =>
            setCellHover((prev) => ({ ...prev, [data.id]: false }))
          }
          elevation={0}
          key={data.id}
          style={{
            backgroundColor: "#F8FCFF",
            borderBottom: "1px solid #EFEFEF",
            borderTop: "1px solid #EFEFEF",
            height: "3.2vw",
          }}
        >
          <ListItem style={{ position: "relative" }}>
            <Checkbox {...label} style={{ marginRight: "0.5vw" }} />

            {data.starred ? (
              <img
                src={yellow}
                alt=""
                style={{
                  cursor: "pointer",
                  width: "0.9vw",
                  height: "0.9vw",
                }}
              />
            ) : (
              <img
                src={star}
                alt=""
                style={{ cursor: "pointer", width: "0.9vw", height: "0.9vw" }}
              />
            )}

            <span>
              <img
                src={
                  "https://www.gstatic.com/images/icons/material/system_gm/1x/label_important_outline_black_20dp.png"
                }
                alt=""
                style={{
                  width: "1vw",
                  height: "1vw",
                  marginLeft: "0.9vw",
                  marginTop: "1vw",
                  marginBottom: "0.7vw",
                }}
              />
            </span>

            <span
              style={{
                fontSize: "0.8vw",
                marginLeft: "1vw",
                fontWeight: "500",
                fontFamily: "Roboto,RobotoDraft,Helvetica,Arial,sans-serif",
                maxWidth: "2vw",
              }}
            >
              {data.sender}
            </span>
            <div
              style={{
                fontSize: "0.8vw",
                marginLeft: "12vw",
                fontWeight: "300",
                fontFamily: "Roboto,RobotoDraft,Helvetica,Arial,sans-serif",
              }}
            >
              {data.title}
            </div>

            {cellHover[data.id] && (
              <img
                src={remove}
                alt=""
                style={{
                  position: "absolute",
                  right: "7vw",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "1.1vw",
                  height: "1.1vw",
                  cursor: "pointer",
                }}
              />
            )}
            {cellHover[data.id] && (
              <img
                src={snooze}
                alt=""
                style={{
                  position: "absolute",
                  right: "1vw",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "1.3vw",
                  height: "1.3vw",
                  cursor: "pointer",
                }}
              />
            )}
            {cellHover[data.id] && (
              <img
                src={
                  "https://www.gstatic.com/images/icons/material/system_gm/1x/mark_email_unread_black_24dp.png"
                }
                alt=""
                style={{
                  position: "absolute",
                  right: "4vw",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "1.3vw",
                  height: "1.3vw",
                  cursor: "pointer",
                }}
              />
            )}
          </ListItem>
        </Paper>
      ))}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "28vw",
        }}
      >
        <h6
          style={{
            alignItems: "center",
            color: "#5f6368",
            fontWeight: "400",
            fontSize: "0.8vw",
          }}
        >
          Terms · Privacy · Program Policies
        </h6>

        <h6
          style={{
            color: "#5f6368",
            fontWeight: "400",
            fontSize: "0.8vw",
            marginLeft: "25vw",
          }}
        >
          Last account activity: 0 minutes ago
        </h6>
      </div>
    </div>
  );
}

export default Middle;

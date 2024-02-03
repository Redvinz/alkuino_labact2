import React from "react";
import inbox from "../images/inbox.png";
import send from "../images/send.png";
import snooze from "../images/snooze.png";
import star from "../images/star.png";
// import pen from "../images/pen.png";
import Message from "./Message";
// import Message from "./Message";

function Leftpanel(props) {
  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "#f6f8fc",
        minHeight: "100vh",
        width: "14vw",
        paddingLeft: "3vw",
        fontFamily: "Roboto,RobotoDraft,Helvetica,Arial,sans-serif",
        color: "#474849",
      }}
    >
      {/* <div
        style={{
          cursor: "pointer",
          height: "3.5vw",
          width: "11vw",
          display: "flex",
          alignItems: "center",
          borderRadius: "20px",
          backgroundColor: "#c2e7ff",
        }}
      >
        <img src={pen} alt="" style={{ width: "1.2vw", marginLeft: "1.5vw" }} />
        <h4 style={{ marginLeft: "1vw", fontWeight: "400", fontSize: "1vw" }}>
          Compose
        </h4>
      </div> */}

      <Message />

      <div
        style={{
          marginTop: "1vw",
          marginLeft: "-1vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
          paddingTop: "1vw",
        }}
      >
        <img
          src={
            // "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/inbox_fill_baseline_p900_20dp.png"
            inbox
          }
          alt=""
          style={{ width: "1vw", marginLeft: "2.5vw" }}
        />
        <span
          onClick={() => props.setSubCollect("Inbox")}
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: ".9vw",
          }}
        >
          Inbox
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "-1vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={star} alt="" style={{ width: "1vw", marginLeft: "2.5vw" }} />
        <span
          onClick={() => props.setSubCollect("Starred")}
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: ".9vw",
          }}
        >
          Starred
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "-1vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={snooze} alt="" style={{ width: "1vw", marginLeft: "2.5vw" }} />
        <span
          onClick={() => props.setSubCollect("Snoozed")}
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: ".9vw",
          }}
        >
          Snoozed
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "-1vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={send} alt="" style={{ width: "1vw", marginLeft: "2.5vw" }} />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: ".9vw",
          }}
        >
          Sent
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "-1vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={
            "https://www.gstatic.com/images/icons/material/system_gm/1x/insert_drive_file_black_20dp.png"
          }
          alt=""
          style={{ width: "1.1vw", marginLeft: "2.5vw" }}
        />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontWeight: "500",
            fontSize: ".9vw",
          }}
        >
          Drafts
        </span>
        <span
          style={{
            cursor: "pointer",
            marginLeft: "5.1vw",
            fontWeight: "500",
            fontSize: ".7vw",
          }}
        >
          10
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "-1vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={
            "https://www.gstatic.com/images/icons/material/system_gm/1x/delete_black_20dp.png"
          }
          alt=""
          style={{ width: "1.1vw", marginLeft: "2.5vw" }}
        />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: ".9vw",
          }}
        >
          Trash
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "-1vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={
            "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/expand_more_baseline_nv700_20dp.png"
          }
          alt=""
          style={{ width: "1.1vw", marginLeft: "2.5vw" }}
        />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: ".9vw",
          }}
        >
          More
        </span>
      </div>

      <div
        style={{
          marginTop: "1vw",
          marginLeft: "-1vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            cursor: "pointer",
            marginLeft: "2.5vw",
            fontWeight: "500",
            fontSize: "1vw",
            marginTop: "2vw",
          }}
        >
          Labels
        </span>

        <span
          style={{
            cursor: "pointer",
            marginLeft: "5vw",
            fontWeight: "500",
            fontSize: ".7vw",
            marginTop: "2vw",
          }}
        >
          <img
            src={
              "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/add_large_baseline_nv700_20dp.png"
            }
            alt=""
            style={{ width: "1.1vw", marginLeft: "2vw" }}
          />
        </span>
      </div>

      <div
        style={{
          marginTop: "1vw",
          marginLeft: "-1vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={
            "https://www.gstatic.com/images/icons/material/system_gm_filled/1x/label_gm_grey_24dp.png"
          }
          alt=""
          style={{ width: "1.2vw", marginLeft: "2.5vw" }}
        />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "1.2vw",
            fontWeight: "500",
            fontSize: ".9vw",
          }}
        >
          ClickUp
        </span>
        <span
          style={{
            cursor: "pointer",
            marginLeft: "4.5vw",
            fontWeight: "500",
            fontSize: ".7vw",
          }}
        >
          12
        </span>
      </div>
    </div>
  );
}

export default Leftpanel;

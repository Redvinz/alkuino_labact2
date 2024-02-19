import React, { useState } from "react";
import inbox from "../images/inbox.png";
import send from "../images/send.png";
import snooze from "../images/snooze.png";
import star from "../images/star.png";
import Message from "./Message";
// import pen from "../images/pen.png";
// import Message from "./Message";


function Leftpanel(props) {

  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const handleMouseEnter = (itemName) => {
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleClick = (itemName) => {
    setActiveItem(itemName);
  };


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
      

      <Message />

      <div
        style={{
          marginTop: "1vw",
          marginLeft: "-1vw",
          display: "flex",
          alignItems: "center",
          borderRadius:"20px",
          paddingTop:"10px",
          paddingBottom:"10px",
          backgroundColor: hoveredItem === "Inbox" || activeItem === "Inbox" ? "#e0e0e0" : "transparent", //Conditional!!
          fontWeight: activeItem === "Inbox" ? "bold" : "400", //Conditional!!
        }}
        onMouseEnter={() => handleMouseEnter("Inbox")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick("Inbox")}
      >
        <img src={inbox}
          alt=""
          style={{ width: "1vw", marginLeft: "2.5vw" }}
        />
        <span
          onClick={() => props.setSubCollect("Inbox")}
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontSize: ".9vw",
          }}
        >
          Inbox
        </span>
      </div>

      <div
        style={{
          marginLeft: "-1vw",
          display: "flex",
          alignItems: "center",
          borderRadius:"20px",
          paddingTop:"10px",
          paddingBottom:"10px",
          backgroundColor: hoveredItem === "Starred" || activeItem === "Starred" ? "#e0e0e0" : "transparent", //Conditional!!
          fontWeight: activeItem === "Starred" || hoveredItem === "Starred" ? "bold" : "400",

        }}
        onMouseEnter={() => handleMouseEnter("Starred")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick("Starred")}
      >
        <img src={star} alt="" style={{ width: "1vw", marginLeft: "2.5vw" }} />
        <span
          onClick={() => props.setSubCollect("Starred")}
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontSize: ".9vw",
          }}
        >
          Starred
        </span>
      </div>
      <div
        style={{
          marginLeft: "-1vw",
          display: "flex",
          alignItems: "center",
          borderRadius:"20px",
          paddingTop:"10px",
          paddingBottom:"10px",
          backgroundColor: hoveredItem === "Snoozed" || activeItem === "Snoozed" ? "#e0e0e0" : "transparent", //Conditional!!
          fontWeight: activeItem === "Snoozed" ? "bold" : "400",
        }}
        onMouseEnter={() => handleMouseEnter("Snoozed")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick("Snoozed")}
      >
        <img src={snooze} alt="" style={{ width: "1vw", marginLeft: "2.5vw" }} />
        <span
          onClick={() => props.setSubCollect("Snoozed")}
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontSize: ".9vw",
          }}
        >
          Snoozed
        </span>
      </div>
      <div
        style={{
          marginLeft: "-1vw",
          display: "flex",
          alignItems: "center",
          borderRadius:"20px",
          paddingTop:"10px",
          paddingBottom:"10px",
          backgroundColor: hoveredItem === "Sent" || activeItem === "Sent" ? "#e0e0e0" : "transparent", //Conditional!!
          fontWeight: activeItem === "Sent" ? "bold" : "400",
        }}
        onMouseEnter={() => handleMouseEnter("Sent")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick("Sent")}
      >
        <img src={send} alt="" style={{ width: "1vw", marginLeft: "2.5vw" }} />
        <span
          onClick={() => props.setSubCollect("Sent")}
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontSize: ".9vw",
          }}
        >
          Sent
        </span>
      </div>
      <div
        style={{
          marginLeft: "-1vw",
          display: "flex",
          alignItems: "center",
          borderRadius:"20px",
          paddingTop:"10px",
          paddingBottom:"10px",
          backgroundColor: hoveredItem === "Drafts" || activeItem === "Drafts" ? "#e0e0e0" : "transparent", //Conditional!!
          fontWeight: activeItem === "Drafts" ? "bold" : "400",
        }}
        onMouseEnter={() => handleMouseEnter("Drafts")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick("Drafts")}
      >
        <img
          src={
            "https://www.gstatic.com/images/icons/material/system_gm/1x/insert_drive_file_black_20dp.png"
          }
          alt=""
          style={{ width: "1.1vw", marginLeft: "2.5vw" }}
        />
        <span onClick={() => props.setSubCollect("Drafts")}

          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontSize: ".9vw",
          }}
        >
          Drafts
        </span>
        <span
          style={{
            cursor: "pointer",
            marginLeft: "5.1vw",
            fontSize: ".7vw",
          }}
        >
          10
        </span>
      </div>
      <div
        style={{
          marginLeft: "-1vw",
          display: "flex",
          alignItems: "center",
          borderRadius:"20px",
          paddingTop:"10px",
          paddingBottom:"10px",
          backgroundColor: hoveredItem === "Trash" || activeItem === "Trash" ? "#e0e0e0" : "transparent", //Conditional!!
          fontWeight: activeItem === "Trash" ? "bold" : "400",
        }}
        onMouseEnter={() => handleMouseEnter("Trash")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick("Trash")}
      >
        <img
          src={
            "https://www.gstatic.com/images/icons/material/system_gm/1x/delete_black_20dp.png"
          }
          alt=""
          style={{ width: "1.1vw", marginLeft: "2.5vw" }}
        />
        <span onClick={() => props.setSubCollect("Trash")}

          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
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
          marginLeft: "-1vw",
          display: "flex",
          alignItems: "center",
          borderRadius:"20px",
          paddingTop:"10px",
          paddingBottom:"10px",
          backgroundColor: hoveredItem === "ClickUp" || activeItem === "ClickUp" ? "#e0e0e0" : "transparent", //Conditional!!
          fontWeight: activeItem === "ClickUp" ? "bold" : "400",
        }}
        onMouseEnter={() => handleMouseEnter("ClickUp")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick("ClickUp")}
      >
        <img
          src={
            "https://www.gstatic.com/images/icons/material/system_gm_filled/1x/label_gm_grey_24dp.png"
          }
          alt=""
          style={{ width: "1.2vw", marginLeft: "2.5vw" }}
        />
        <span onClick={() => props.setSubCollect("ClickUp")}
          style={{
            cursor: "pointer",
            marginLeft: "1.2vw",
            fontSize: ".9vw",
          }}
        >
          ClickUp
        </span>
        <span
          style={{
            cursor: "pointer",
            marginLeft: "4.5vw",
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

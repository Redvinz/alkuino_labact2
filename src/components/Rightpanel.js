import React from "react";
import Notes from "./Notes";
import Contacts from "./Contacts";
import Event from "./Event";

function Rightpanel() {
  return (
    <div
      style={{
        backgroundColor: "#F9F9F9",
        minHeight: "100vh",
        textAlign: "center",
        position: "fixed",
        right: "0",
        width: "3vw",
      }}
    >
      <Event />
      <br />
      <Notes />
      <br />
      <div>
        <img
          src={"https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png"}
          alt=""
          style={{ cursor: "pointer", width: "1.3vw", paddingTop: "2vw" }}
        />
      </div>
      <br />

      <Contacts />
    </div>
  );
}

export default Rightpanel;

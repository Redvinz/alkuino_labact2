import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import calendar from "../images/calendar.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "92%",
  transform: "translate(-50%, -50%)",
  width: "14vw",
  minHeight: "650px",
  bgcolor: "background.paper",
  padding: "1vw",
};

export default function Event() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [event, setEvent] = React.useState("");
  const [date, setDate] = React.useState("");
  const [eventData, setEventData] = React.useState([]);

  const addEvent = () => {
    // Modify this function based on your requirements
    // For UI-only, you can add some local state or handle the logic as needed
    // You can simulate adding an event to the local state if needed.
    // For example:
    setEventData((prevData) => [...prevData, { event, date }]);
  };

  return (
    <div>
      <img
        onClick={handleOpen}
        src={calendar}
        alt=""
        style={{ cursor: "pointer", width: "1.1vw", paddingTop: "2vw" }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ paddingTop: "3vw", fontSize: "1vw", color: "grey" }}>
            Add Events
          </Typography>
          <input
            onChange={(e) => setEvent(e.target.value)}
            placeholder="Event"
            style={{
              outline: "none",
              fontSize: "1vw",
              width: "11vw",
              height: "1.5vw",
            }}
          />
          <input
            onChange={(e) => setDate(e.target.value)}
            type="date"
            style={{
              outline: "none",
              fontSize: "1vw",
              width: "11vw",
              height: "1.5vw",
            }}
          />
          <Button
            onClick={addEvent}
            variant="contained"
            sx={{ fontSize: "1vw", width: "4vw", height: "2vw", marginTop: "1vw" }}
          >
            Add
          </Button>
          <br />
          {eventData.map((data, index) => (
            <li key={index} style={{ marginTop: "0.5vw", fontSize: "1vw" }}>
              {data.event}
              <span>-{data.date}</span>
            </li>
          ))}
        </Box>
      </Modal>
    </div>
  );
}

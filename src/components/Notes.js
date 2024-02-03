import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import tasks from "../images/tasks.png";

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

export default function Notes() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [notes, setNotes] = React.useState("");
  const [notesData] = React.useState([]);

  const addNote = () => {
    console.log("Note added:", notes);
  };

  const showNotes = () => {
    console.log("Showing notes:", notesData);
  };

  return (
    <div>
      <img
        onClick={handleOpen}
        src={"https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png"}
        alt=""
        style={{ cursor: "pointer", width: "1.3vw", paddingTop: "2vw" }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ paddingTop: "3vw", fontSize: "1vw", color: "grey" }}>
            Add Notes
          </Typography>
          <input
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Notes"
            style={{
              outline: "none",
              fontSize: "1vw",
              width: "11vw",
              height: "1.5vw",
            }}
          />
          <Button
            onClick={addNote}
            variant="contained"
            sx={{ fontSize: "1vw", width: "4vw", height: "2vw", marginTop: "1vw" }}
          >
            Add
          </Button>
          <Button
            onClick={showNotes}
            variant="contained"
            sx={{ fontSize: "1vw", width: "4vw", height: "2vw", marginTop: "1vw" }}
          >
            Show
          </Button>
          <br />
          {notesData.map((data) => {
            return (
              <li style={{ marginTop: "0.5vw", fontSize: "1vw" }} key={data.id}>
                {data.notes}
              </li>
            );
          })}
        </Box>
      </Modal>
    </div>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import pen from "../images/pen.png";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "61%",
  left: "71%",
  transform: "translate(-50%, -50%)",
  width: "40vw",
  height: "35vw",
  minHeight: "505px",
  bgcolor: "background.paper",
  padding: "1vw",
};

export default function Message() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div
        onClick={handleOpen}
        style={{
          cursor: "pointer",
          height: "3.5vw",
          marginLeft: "0.7vw",
          width: "9vw",
          display: "flex",
          alignItems: "center",
          borderRadius: "20px",
          backgroundColor: "#c2e7ff",
        }}
      >
        <img src={pen} alt="" style={{ width: "1.1vw", marginLeft: "0.8vw" }} />
        <h4 style={{ marginLeft: "1.5vw", fontWeight: "400", fontSize: "1vw" }}>
          Compose
        </h4>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            style={{
              backgroundColor: "#EDF9FF",
              position: "absolute",
              top: "0",
              left: "0",
              width: "41vw",
              padding: "0.5vw",
              fontSize: "1vw",
            }}
          >
            New Message
          </Typography>
          <TextField
            variant="standard"
            label="To"
            sx={{ width: "39vw", marginTop: "1vw" }}
          />
          <br />
          <TextField variant="standard" label="Subject" sx={{ width: "39vw" }} />
          <br />
          <TextField
            multiline
            rows={12}
            sx={{ width: "39vw", "& fieldset": { border: "none" } }}
          />
          <br />
          <Button
            variant="contained"
            sx={{
              borderRadius: "6vw",
              fontSize: "1vw",
              width: "4vw",
              height: "3vw",
            }}
          >
            Send
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

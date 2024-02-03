import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar } from "@mui/material";
import logout from "../images/logout.png";
import { useNavigate } from "react-router-dom";
import user from "../images/user.png";

const style = {
  position: "absolute",
  top: "30%",
  left: "79%",
  transform: "translate(-50%, -50%)",
  width: "30vw",
  height: "20vw",
  bgcolor: "#D8E4F0",
  borderRadius: "4vw",
  padding: "2vw",
};

export default function Profile() {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Avatar
        onClick={handleOpen}
        sx={{
          position: "fixed",
          left: "97%",
          top: "2%",
          width: "1.8vw",
          height: "1.8vw",
          cursor: "pointer",
        }}
        // src={user}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography style={{ textAlign: "center", fontSize: "1.2vw" }}>
            arvin.alkuino.cics@ust.edu.ph
          </Typography>
          <Avatar
            src={user}
            style={{ marginLeft: "11.6vw", width: "6vw", height: "6vw" }}
          />
          <Typography sx={{ textAlign: "center", fontSize: "1.7vw" }}>
            {/* Provide static display name */}
          </Typography>
          <button
            onClick={() => navigate("/")}
            style={{
              cursor: "pointer",
              fontSize: "1vw",
              border: "1px solid white",
              borderRadius: "2vw",
              marginTop: "2vw",
              width: "10vw",
              height: "4vw",
              marginLeft: "7.5vw",
            }}
          >
            <img src={logout} style={{ width: "0.8vw" }} alt="Logout Icon" />
            Signout
          </button>
          <Typography
            style={{
              fontSize: "0.8vw",
              fontWeight: "100",
              textAlign: "center",
              marginTop: "1vw",
            }}
          >
            Privacy Policy Terms of Service
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

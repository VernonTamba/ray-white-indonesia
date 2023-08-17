import React from "react";
import "../styles/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import PowerIcon from "@mui/icons-material/PowerSettingsNew";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#001f2b",
  border: "3px solid #f5f6fa",
  boxShadow: 24,
  p: 4,
  borderRadius: "1rem",
  color: "#fff",
};

const Header = ({ activeLink, setActiveLink }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="header">
      <div className="header__left">
        <Button className="header__menuIconButton" variant="contained">
          <MenuIcon className="header__menuIcon" />
        </Button>
        <p className="header__title">
          Loan Market / <span>{activeLink}</span>
        </p>
      </div>
      <div className="header__right">
        <Button
          className="header__buttonLogout"
          variant="contained"
          onClick={handleOpen}
        >
          <PowerIcon className="header__buttonLogoutText" />
          Log out
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 2, fontFamily: "Poppins", fontWeight: 700 }}
          >
            Log out?
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, mb: 3, fontFamily: "Poppins" }}
          >
            You will be redirected to the login page once you click the button
            below.
          </Typography>
          <Link onClick={() => setActiveLink("home")} to="/">
            <Button
              className="header__modalLogoutButton"
              variant="contained"
              endIcon={<PowerIcon />}
            >
              Log out, please.
            </Button>
          </Link>
        </Box>
      </Modal>
    </div>
  );
};

export default Header;

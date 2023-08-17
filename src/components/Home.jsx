import React from "react";
import "../styles/Home.css";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

const Home = ({ setActiveLink }) => {
  return (
    <div className="home">
      <div className="home__left">
        <img
          className="home__image"
          src="https://www.raywhite.co.id/assets/img/rw-logo-2017.jpg"
          alt="profile picture"
        />
      </div>
      <div className="home__right">
        <h1 className="home__title">Ray White Indonesia</h1>
        <p className="home__description">
          Welcome and click on the login button to start exploring!
        </p>
        <Link onClick={() => setActiveLink("dashboard")} to="/dashboard">
          <Button
            className="home__button"
            variant="contained"
            endIcon={<LoginIcon />}
          >
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

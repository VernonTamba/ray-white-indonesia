import React, { useEffect } from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
import Home from "@mui/icons-material/HomeOutlined";
import Person from "@mui/icons-material/PersonOutlined";
import Pencil from "@mui/icons-material/CreateOutlined";

const Nav = ({ activeLink, setActiveLink }) => {
  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="nav">
      <div className="nav__profile">
        <img
          className="nav__profilePicture"
          src="https://www.raywhite.co.id/assets/img/rw-logo-2017.jpg"
          alt="profile picture"
        />

        <p className="nav__username">John Doe</p>
        <p className="nav__role">Author</p>
      </div>
      <div className="nav__links">
        <Link
          className={
            activeLink === "dashboard"
              ? "nav__link nav__link--active"
              : "nav__link"
          }
          to="/dashboard"
          onClick={() => handleActiveLink("dashboard")}
        >
          <Home />
          Dashboard
        </Link>
        <Link
          className={
            activeLink === "user" ? "nav__link nav__link--active" : "nav__link"
          }
          to="/user"
          onClick={() => handleActiveLink("user")}
        >
          <Person />
          User
        </Link>
        <Link
          className={
            activeLink === "news" ? "nav__link nav__link--active" : "nav__link"
          }
          to="/news"
          onClick={() => handleActiveLink("news")}
        >
          <Pencil />
          News
        </Link>
      </div>
    </div>
  );
};

export default Nav;

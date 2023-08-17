import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/MainContent.css";
import User from "./User";
import Dashboard from "./Dashboard";
import News from "./News";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

const MainContent = ({ activeLink, setActiveLink }) => {
  return (
    <div className="mainContent">
      {activeLink !== "home" && (
        <Header activeLink={activeLink} setActiveLink={setActiveLink} />
      )}

      <Routes>
        <Route
          path="/"
          exact
          element={<Home setActiveLink={setActiveLink} />}
        />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/user" exact element={<User />} />
        <Route path="/news" exact element={<News />} />
      </Routes>
      {activeLink !== "home" && <Footer />}
    </div>
  );
};

export default MainContent;

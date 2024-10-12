import React from "react";
import "./styles/navbar.css";
import alert from "../assets/images/Alert.svg";
import dp from "../assets/images/dp.svg";
import calendar from "../assets/images/Calendar.svg";
import coin from "../assets/icons/coin.svg";
import filter from "../assets/icons/filter.svg";
import cancel from "../assets/icons/cancel.svg";
import search from "../assets/icons/search.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-1">
        <input
          type="text"
          placeholder="Search for templates, projects, etc"
          name="form"
        />
        <img src={search} alt="coin" className="input-icon1" />
        <img src={filter} alt="coin" className="input-icon2" />
        <img src={cancel} alt="coin" className="input-icon3" />
        <button className="create-btn">Create Content</button>
        <div className="coins">
          <img src={coin} alt="coin" className="coin" />
          <span className="coin-unit">20</span>
        </div>
      </div>
      <div className="nav-2">
        <div className="nav-2-container">
          <img src={calendar} alt="calendar" className="nav-icons" />
        </div>
        <div className="nav-2-container">
          <img src={alert} alt="alert" className="nav-icons" />
        </div>
        <div className="nav-2-container">
          <img src={dp} alt="display picture" className="nav-icons" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

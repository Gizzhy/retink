import React, { useState } from "react";
import "./styles/sidebar.css";
import logo from "../assets/images/logo.svg";
import home from "../assets/icons/home.svg";
import content from "../assets/icons/content.svg";
import back from "../assets/icons/back.svg";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <aside className="sidebar">
      <img src={logo} alt="retink" className="retink-logo" />
      {/* next */}
      <div className="sidebar-section1">
        <div className="sidebar-icon-home">
          <img src={home} alt="home" className="sidebar-icon" />
        </div>
        <div className="sidebar-icon-others">
          <img src={content} alt="home" className="sidebar-icons-others" />
        </div>
      </div>
      {/* next */}
      <div className="sidebar-section2">
        <div
          className="sidebar-icon-others"
          onMouseEnter={() => setIsHovered(true)} // Set hover state to true
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false
        >
          {isHovered ? (
            <IoSettingsSharp className="settings-icon" />
          ) : (
            <IoSettingsOutline className="settings-icon" />
          )}
        </div>
        <div className="sidebar-icon-others">
          <img src={back} alt="home" className="sidebar-icons-others" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

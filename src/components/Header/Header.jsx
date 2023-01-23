import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img className="header__logo" src="./images/yt-logo.png" alt="/" />
      </div>

      <div className="header_input">
        <div className="header__middle">
          <input className="searchInput" placeholder="Search" type="text" />
          <SearchIcon className="header_searchBtn" />
        </div>
        <MicIcon className="header__icons" />
      </div>
      <div className="header_right">
        <VideoCallIcon className="header__icons" />
        <AppsIcon className="header__icons" />
        <NotificationsIcon className="header__icons" />
        <img src="./images/avatar.png" alt="/" />
      </div>
    </div>
  );
};

export default Header;

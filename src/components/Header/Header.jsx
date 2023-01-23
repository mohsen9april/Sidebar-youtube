import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpIcon from "@mui/icons-material/Help";
import FeedbackIcon from "@mui/icons-material/Feedback";
import SidebarRow from "../SidebarRow/SidebarRow";
import "./Sidebar.css";

const Header = () => {
  return (
    <div className="parent_header">
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
      <div className="sidebar">
        <SidebarRow icon={<HomeIcon />} title="Home" />
        <SidebarRow icon={<ExploreIcon />} title="Explore" />
        <SidebarRow icon={<SubscriptionsIcon />} title="Subscriptions" />
        <hr />
        <SidebarRow icon={<VideoLibraryIcon />} title="VideoLibrary" />
        <SidebarRow icon={<HistoryIcon />} title="History" />
        <SidebarRow icon={<OndemandVideoIcon />} title="Your Videos" />
        <SidebarRow icon={<WatchLaterIcon />} title="WatchLater" />
        <SidebarRow icon={<ThumbUpIcon />} title="ThumbUpIcon" />
        <SidebarRow icon={<ExpandMoreIcon />} title="Show More" />
        <hr />
        <h4 className="sidebar_heading">SUBSCRIPTIONS</h4>
        <hr />
        <h4 className="sidebar_heading">MORE ON YOUTUBE</h4>
        <SidebarRow icon={<YouTubeIcon />} title="YouTube" />
        <SidebarRow icon={<TheaterComedyIcon />} title="Theater" />
        <hr />
        <SidebarRow icon={<SettingsIcon />} title="Settings" />
        <SidebarRow icon={<FlagIcon />} title="Flag" />
        <SidebarRow icon={<HelpIcon />} title="Help" />
        <SidebarRow icon={<FeedbackIcon />} title="Feedback" />
        <hr />
        <div className="footer">
          <p>About &nbsp; Press </p>
        </div>
      </div>
      <div className="sidebar_mini">
        <div className="miniDiv">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="miniDiv">
          <ExploreIcon />
          <p>Explore</p>
        </div>
        <div className="miniDiv">
          <SubscriptionsIcon />
          <p>Subscription</p>
        </div>
        <div className="miniDiv">
          <VideoLibraryIcon />
          <p>Videos</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

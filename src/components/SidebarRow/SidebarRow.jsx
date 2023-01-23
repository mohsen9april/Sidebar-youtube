import React from "react";
import "./SidebarRow.css";

const SidebarRow = (props) => {
  return (
    <div className="sidebar_row">
      <div className="sidebar_row_icon">{props.icon}</div>
      <h2 className="sidebarRow_title">{props.title}</h2>
    </div>
  );
};

export default SidebarRow;

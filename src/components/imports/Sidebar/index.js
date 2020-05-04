import React from "react";
import {
  AddCircleRounded,
  Chat,
  AccountCircle,
  Search,
  Settings,
  Home,
} from "@material-ui/icons";
import "./style.scss";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <ul className="sidebar_icons_list">
        <li className="sidebar_icons_list_icon">
          <Home fontSize="inherit" />
        </li>
        <li className="sidebar_icons_list_icon">
          <AccountCircle fontSize="inherit" />
        </li>
        <li className="sidebar_icons_list_icon">
          <Chat fontSize="inherit" />
        </li>
        <li className="sidebar_icons_list_icon">
          <AddCircleRounded fontSize="inherit" />
        </li>
        <li className="sidebar_icons_list_icon">
          <Search fontSize="inherit" />
        </li>
        <li className="sidebar_icons_list_icon">
          <Settings fontSize="inherit" />
        </li>
      </ul>
    </nav>
  );
}

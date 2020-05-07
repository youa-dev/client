import React, { Fragment } from "react";
import {
  AddCircleRounded,
  Chat,
  AccountCircle,
  Search,
  Settings,
  Home,
} from "@material-ui/icons";
import "./style.scss";

export default function Sidebar({ user = false, history }) {
  return (
    <nav className="sidebar">
      <ul className="sidebar_icons_list">
        <li className="sidebar_icons_list_icon">
          <Home
            fontSize="inherit"
            onClick={() => history.push(user ? "/feed" : "/")}
          />
        </li>
        <li className="sidebar_icons_list_icon">
          <AccountCircle
            fontSize="inherit"
            onClick={() =>
              history.push(
                !user
                  ? "/login"
                  : !user.profile
                  ? "/profile-creation"
                  : `/u/${user.profile.handle}`
              )
            }
          />
        </li>
        {user ? (
          <Fragment>
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
          </Fragment>
        ) : (
          false
        )}
      </ul>
    </nav>
  );
}

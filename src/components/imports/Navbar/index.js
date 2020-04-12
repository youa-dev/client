import React from "react";
import { useHistory } from "react-router-dom";
import "./index.scss";

export default function Navbar() {
  const history = useHistory();
  const onLogoClick = () => history.push("/");
  const onLinkClick = (path) => history.push(path);
  const type = window.location.pathname.replace("/", "");
  return (
    <nav className="navigation_bar shadow">
      <div className="navigation_bar_left_side">
        <div
          className="navigation_bar_logo animateLogo"
          onClick={onLogoClick}
        ></div>
      </div>
      <div className="navigation_bar_right_side">
        <div className="navigation_bar_links">
          {type !== "register" ? (
            <p
              className="navigation_bar_links--link"
              onClick={onLinkClick.bind(null, "/register")}
            >
              Sign up
            </p>
          ) : (
            false
          )}
          {type !== "login" ? (
            <p
              className="navigation_bar_links--link"
              onClick={onLinkClick.bind(null, "/login")}
            >
              Log in
            </p>
          ) : (
            false
          )}
        </div>
      </div>
    </nav>
  );
}

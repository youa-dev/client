import React from "react";
import "./index.scss";

const type = window.location.pathname.replace("/", "");

const onLogoClick = () => (window.location.href = "/");

export default function Navbar() {
  return (
    <nav className="navigation_bar">
      <div className="navigation_bar_left_side">
        <div
          className="navigation_bar_logo animateLogo"
          onClick={onLogoClick}
        ></div>
      </div>
      <div className="navigation_bar_right_side">
        <div className="navigation_bar_links">
          {type !== "register" ? (
            <a className="navigation_bar_links--link" href="/register">
              Sign up
            </a>
          ) : (
            false
          )}
          {type !== "login" ? (
            <a className="navigation_bar_links--link" href="/login">
              Log in
            </a>
          ) : (
            false
          )}
        </div>
      </div>
    </nav>
  );
}

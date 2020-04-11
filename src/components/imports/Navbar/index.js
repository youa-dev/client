import React from "react";
import "./index.scss";

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
          <a className="navigation_bar_links--link" href="/register">
            Sign up
          </a>
          <a className="navigation_bar_links--link" href="/login">
            Log in
          </a>
        </div>
      </div>
    </nav>
  );
}

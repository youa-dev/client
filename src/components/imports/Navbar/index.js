import React from "react";
import "./index.scss";

export default function Navbar() {
  return (
    <nav className="navigation_bar">
      <div className="navigation_bar_left_side">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/9b/No_cover.JPG"
          alt="Logo"
          className="navigation_bar_logo"
          loading="eager"
        />
      </div>
      <div className="navigation_bar_right_side">
        <div className="navigation_bar_links">
          <a className="navigation_bar_links--link" href="#">
            Sign up
          </a>
          <a className="navigation_bar_links--link" href="#">
            Log in
          </a>
        </div>
      </div>
    </nav>
  );
}

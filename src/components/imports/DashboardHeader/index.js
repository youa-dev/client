import React from "react";
import "./style.scss";

export default function DashboardHeader({ user }) {
  return (
    <header className="dashboard_header shadow">
      <img
        src={user.profile.profilePicture}
        alt="Avatar"
        className="dashboard_header_avatar"
        style={{ borderRadius: "50%" }}
      />
      <h3 className="dashboard_header_name">
        {user.firstName} {user.lastName}
      </h3>
      {/* Links */}
      <div className="dashboard_header_links">
        {/* Website */}
        {user.profile.website ? (
          <a
            href={user.profile.website}
            className="dashboard_header_links_link"
          >
            <span className="fas fa-globe dashboard_header_links_link_icon"></span>
          </a>
        ) : (
          false
        )}
        {/* GitHub */}
        {user.profile.github ? (
          <a href={user.profile.github} className="dashboard_header_links_link">
            <span className="fab fa-github dashboard_header_links_link_icon"></span>
          </a>
        ) : (
          false
        )}
        {/* dev.to */}
        {user.profile.dev ? (
          <a href={user.profile.dev} className="dashboard_header_links_link">
            <span className="fab fa-dev dashboard_header_links_link_icon"></span>
          </a>
        ) : (
          false
        )}
        {/* LinkedIn */}
        {user.profile.linkedin ? (
          <a
            href={user.profile.linkedin}
            className="dashboard_header_links_link"
          >
            <span className="fab fa-linkedin dashboard_header_links_link_icon"></span>
          </a>
        ) : (
          false
        )}
        {/* StackOverflow */}
        {user.profile.stackoverflow ? (
          <a
            href={user.profile.stackoverflow}
            className="dashboard_header_links_link"
          >
            <span className="fab fa-stack-overflow dashboard_header_links_link_icon"></span>
          </a>
        ) : (
          false
        )}
      </div>
      {/* Biography */}
      {user.profile.biography ? (
        <p className="dashboard_header_biography">{user.profile.biography}</p>
      ) : (
        false
      )}
    </header>
  );
}

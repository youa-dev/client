import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Header({ user, post = false }) {
  return (
    <header className="header shadow">
      <img
        src={user.profile.profilePicture}
        alt="Avatar"
        className="header_avatar"
        style={{ borderRadius: "50%" }}
      />
      {post ? (
        <Link
          className="header_name header_name--link"
          to={`/u/${user.profile.handle}`}
        >
          {user.firstName} {user.lastName}
        </Link>
      ) : (
        <h3 className="header_name">
          {user.firstName} {user.lastName}
        </h3>
      )}
      {post ? (
        <Fragment>
          <h2
            className="header_post_title"
            style={{ marginLeft: 10, marginRight: 10 }}
          >
            {post.title}
          </h2>
          <div className="header_post_metadata">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
                marginLeft: 10,
              }}
            >
              <span className="header_post_metadata_icon fa fa-heart"></span>
              <p>{post.likes.length}</p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
                marginLeft: 10,
              }}
            >
              <span className="header_post_metadata_icon fa fa-eye"></span>
              <p>{post.views}</p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
                marginLeft: 10,
              }}
            >
              <span className="header_post_metadata_icon fa fa-commenting"></span>
              <p>{post.comments.length}</p>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          {/* Links */}
          <div className="header_links">
            {/* Website */}
            {user.profile.website ? (
              <a href={user.profile.website} className="header_links_link">
                <span className="fas fa-globe header_links_link_icon"></span>
              </a>
            ) : (
              false
            )}
            {/* GitHub */}
            {user.profile.github ? (
              <a href={user.profile.github} className="header_links_link">
                <span className="fab fa-github header_links_link_icon"></span>
              </a>
            ) : (
              false
            )}
            {/* dev.to */}
            {user.profile.dev ? (
              <a href={user.profile.dev} className="header_links_link">
                <span className="fab fa-dev header_links_link_icon"></span>
              </a>
            ) : (
              false
            )}
            {/* LinkedIn */}
            {user.profile.linkedin ? (
              <a href={user.profile.linkedin} className="header_links_link">
                <span className="fab fa-linkedin header_links_link_icon"></span>
              </a>
            ) : (
              false
            )}
            {/* StackOverflow */}
            {user.profile.stackoverflow ? (
              <a
                href={user.profile.stackoverflow}
                className="header_links_link"
              >
                <span className="fab fa-stack-overflow header_links_link_icon"></span>
              </a>
            ) : (
              false
            )}
          </div>
          {/* Biography */}
          {user.profile.biography ? (
            <p className="header_biography" style={{ marginBottom: 0 }}>
              {user.profile.biography}
            </p>
          ) : (
            false
          )}
        </Fragment>
      )}
    </header>
  );
}

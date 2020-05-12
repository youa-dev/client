import React, { Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import authenticateUser from "../../../helpers/authenticateUser";
import { Button } from "@material-ui/core";
import "./style.scss";
import PostMetadata from "../PostMetadata";

export default function Header({ user, post = null }) {
  const history = useHistory();
  const handleBtnClick = () =>
    authenticateUser() ? console.log("Following user") : history.push("/login");
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
        <Fragment>
          <h3 className="header_name">
            {user.firstName} {user.lastName}
          </h3>
          <Button
            className="header_follow_btn"
            variant="contained"
            color="primary"
            size="large"
            onClick={handleBtnClick}
          >
            Follow
          </Button>
        </Fragment>
      )}

      {post ? (
        <Fragment>
          <h2
            className="header_post_title"
            style={{ marginLeft: 10, marginRight: 10 }}
          >
            {post.title}
          </h2>
          <PostMetadata post={post} />
        </Fragment>
      ) : (
        <Fragment>
          {/* Links */}
          <div className="header_links">
            {/* Website */}
            {user.profile.website ? (
              <a href={user.profile.website} className="header_links_link">
                <span className="fas fa-globe header_links_link_icon" />
              </a>
            ) : (
              false
            )}
            {/* GitHub */}
            {user.profile.github ? (
              <a href={user.profile.github} className="header_links_link">
                <span className="fab fa-github header_links_link_icon" />
              </a>
            ) : (
              false
            )}
            {/* dev.to */}
            {user.profile.dev ? (
              <a href={user.profile.dev} className="header_links_link">
                <span className="fab fa-dev header_links_link_icon" />
              </a>
            ) : (
              false
            )}
            {/* LinkedIn */}
            {user.profile.linkedin ? (
              <a href={user.profile.linkedin} className="header_links_link">
                <span className="fab fa-linkedin header_links_link_icon" />
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
                <span className="fab fa-stack-overflow header_links_link_icon" />
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

import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function PostCard({
  avatar,
  title,
  handle,
  firstName,
  lastName,
  createdAt,
  likes,
  views,
  comments,
}) {
  return (
    <div className="post_card shadow">
      <div className="post_card_col">
        <img src={avatar} alt="avatar" className="post_card_col_avatar" />
      </div>
      <div className="post_card_col">
        <Link className="post_card_col_text" to={`/post/${handle}`}>
          {title}
        </Link>
        <p className="post_card_col_text post_card_col_text--name">
          {firstName} {lastName}
        </p>
        <p className="post_card_col_text">{createdAt}</p>
      </div>
      <div className="post_card_col">
        <span className="post_card_col_icon fa fa-heart">{likes}</span>
        <span className="post_card_col_icon fa fa-eye">{views}</span>
        <span className="post_card_col_icon fa fa-commenting">{comments}</span>
      </div>
    </div>
  );
}

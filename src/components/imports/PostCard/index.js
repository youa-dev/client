import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import PostMetadata from "../PostMetadata";
import generateDate from "../../../helpers/generateDate";

export default function PostCard({ avatar, firstName, lastName, post }) {
  return (
    <div className="post_card shadow">
      <div className="post_card_col">
        <img src={avatar} alt="avatar" className="post_card_col_avatar" />
      </div>
      <div className="post_card_col">
        <Link className="post_card_col_text" to={`/post/${post.handle}`}>
          {post.title}
        </Link>
        <p className="post_card_col_text post_card_col_text--name">
          {firstName} {lastName}
        </p>
        <p className="post_card_col_text">{generateDate(post.createdAt)}</p>
      </div>
      <PostMetadata post={post} />
    </div>
  );
}

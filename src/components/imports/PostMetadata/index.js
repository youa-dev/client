import React from "react";
import "./style.scss";

export default function PostMetadata({ post }) {
  return (
    <div className="post_metadata">
      <div className="post_metadata_wrapper">
        <span className="post_metadata_wrapper_icon fa fa-heart" />
        <p>{post.likes.length}</p>
      </div>

      <div className="post_metadata_wrapper">
        <span className="post_metadata_wrapper_icon fa fa-eye" />
        <p>{post.views}</p>
      </div>

      <div className="post_metadata_wrapper">
        <span className="post_metadata_wrapper_icon fa fa-commenting" />
        <p>{post.comments.length}</p>
      </div>
    </div>
  );
}

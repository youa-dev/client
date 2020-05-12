import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardActions } from "@material-ui/core";
import "./style.scss";
import PostMetadata from "../PostMetadata";
import generateDate from "../../../helpers/generateDate";

export default function PostCard({ avatar, firstName, lastName, post }) {
  return (
    <Card elevation={3} style={{ minWidth: "50%", margin: "25px 0" }}>
      <CardContent style={{ paddingBottom: 0 }}>
        <div className="post_card ">
          <div className="post_card_row post_card_row--user">
            <img src={avatar} alt="avatar" className="post_card_row_avatar" />
            <p className="post_card_row_text post_card_row_text--name">
              {firstName} {lastName}
            </p>
          </div>
          <div
            className="post_card_row"
            style={{ marginTop: 10, marginBottom: 10, fontSize: 18 }}
          >
            <Link
              className="post_card_row_text post_card_row_text--link"
              to={`/post/${post.handle}`}
            >
              {post.title}
            </Link>
          </div>
        </div>
        <p className="post_card_row_text" style={{ marginBottom: 0 }}>
          {generateDate(post.createdAt)}
        </p>
      </CardContent>
      <CardActions>
        <PostMetadata post={post} />
      </CardActions>
    </Card>
  );
}

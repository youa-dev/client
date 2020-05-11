import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import urlGenerator from "../../../helpers/urlGenerator";
import authenticateUser from "../../../helpers/authenticateUser";
import generateDate from "../../../helpers/generateDate";
import "./style.scss";

const CommentsCard = ({ details }) => {
  const { author, createdAt, handle, avatar, body } = details;
  return (
    <div className="comment_card shadow">
      <div className="comment_card_user">
        <img className="comment_card_user_avatar" src={avatar} alt="Avatar" />
        <Link
          to={`/u/${handle}`}
          style={{ textTransform: "capitalize" }}
          className="comment_card_user_link"
        >
          {author}
        </Link>
      </div>
      <p className="comment_card_body">{body}</p>
      <p className="comment_card_date">{generateDate(createdAt)}</p>
    </div>
  );
};

export default function Comments({ comments, postID }) {
  const user = authenticateUser();

  const submitComment = async ({ keyCode, target }) => {
    if (keyCode !== 13) return;

    const { token } = localStorage;
    const { value: body } = target;

    await axios.post(
      urlGenerator("posts", `/comments/new/${postID}`),
      { body },
      { headers: { Authorization: token } }
    );
  };

  return (
    <div className="comments">
      {comments.length > 0 ? (
        comments.reverse().map((c) => <CommentsCard details={c} key={c._id} />)
      ) : (
        <p>No comments!</p>
      )}
      {user ? (
        <input
          type="text"
          id="commentInput"
          placeholder="Comment on this post!"
          onKeyDown={submitComment}
          className="comments_input"
        />
      ) : (
        false
      )}
    </div>
  );
}

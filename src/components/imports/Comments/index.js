import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import urlGenerator from "../../../helpers/urlGenerator";
import authenticateUser from "../../../helpers/authenticateUser";

const CommentsCard = ({ details }) => {
  const { author, createdAt, handle, avatar, body } = details;
  return (
    <div className="comment_card">
      <Link to={`/u/${handle}`} style={{ textTransform: "capitalize" }}>
        {author}
      </Link>
      <img src={avatar} alt="Avatar" style={{ width: 32, height: 32 }} />
      <p className="comment_card_text">{createdAt}</p>
      <p className="comment_card_text">{body}</p>
    </div>
  );
};

export default function Comments({ comments, postID }) {
  const user = authenticateUser();

  const submitComment = async ({ keyCode, target }) => {
    if (keyCode !== 13) return;

    const { token } = localStorage;
    const { value: body } = target;

    console.log(token);

    await axios.post(
      urlGenerator("posts", `/comments/new/${postID}`),
      { body },
      { headers: { Authorization: token } }
    );
  };

  return (
    <div className="comments">
      {comments.length > 0 ? (
        comments.reverse().map((c) => <CommentsCard details={c} />)
      ) : (
        <p>No comments!</p>
      )}
      {user ? (
        <input
          type="text"
          placeholder="Comment on this post!"
          onKeyDown={submitComment}
        />
      ) : (
        false
      )}
    </div>
  );
}

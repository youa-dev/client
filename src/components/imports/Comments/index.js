import React from "react";
import { Link } from "react-router-dom";

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

export default function Comments({ comments }) {
  return (
    <div className="comments">
      {comments.length > 0 ? (
        comments.reverse().map((c) => <CommentsCard details={c} />)
      ) : (
        <p>No comments!</p>
      )}
      <input type="text" placeholder="Comment on this post!" />
    </div>
  );
}

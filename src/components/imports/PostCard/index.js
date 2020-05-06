import React from "react";

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
    <div className="post_card">
      <img src={avatar} alt="avatar" className="post_card_avatar" />
      <p className="post_card_title">{title}</p>
      <p className="post_card_title">{handle}</p>
      <p className="post_card_title">{firstName}</p>
      <p className="post_card_title">{lastName}</p>
      <p className="post_card_title">{createdAt}</p>
      <p className="post_card_title">{likes}</p>
      <p className="post_card_title">{views}</p>
      <p className="post_card_title">{comments}</p>
    </div>
  );
}

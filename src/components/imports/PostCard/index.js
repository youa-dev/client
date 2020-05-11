import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import PostMetadata from "../PostMetadata";

const dateHelper = {
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "September",
  ],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const generateDate = (timestamp) => {
  let extension;
  const d = new Date(timestamp);
  const month = dateHelper.months[d.getUTCMonth()];
  const day = dateHelper.days[d.getUTCDay()];
  const year = d.getUTCFullYear();
  const date = d.getUTCDate().toString();
  switch (date[date.length - 1]) {
    case "1":
      extension = "st";
      break;
    case "2":
      extension = "nd";
      break;
    case "3":
      extension = "nd";
      break;
    default:
      extension = "th";
      break;
  }
  return `${day}, ${month} ${date}${extension}, ${year}`;
};

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

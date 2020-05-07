import React, { Fragment, useEffect, useState, Component } from "react";
import { Container } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import PostCard from "../../imports/PostCard";
import Sidebar from "../../imports/Sidebar";
import DashboardHeader from "../../imports/DashboardHeader";
import urlGenerator from "../../../helpers/urlGenerator";
import axios from "axios";
import "./style.scss";

import authenticateUser from "../../../helpers/authenticateUser";

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
  let ext;
  const d = new Date(timestamp);
  const month = dateHelper.months[d.getUTCMonth()];
  const day = dateHelper.days[d.getUTCDay()];
  const year = d.getUTCFullYear();
  const date = d.getUTCDate().toString();
  switch (date[date.length - 1]) {
    case "1":
      ext = "st";
      break;
    case "2":
      ext = "nd";
      break;
    case "3":
      ext = "nd";
      break;
    default:
      ext = "th";
      break;
  }
  return `${day}, ${month} ${date}${ext}, ${year}`;
};

const DashboardComponent = ({ user }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(
        urlGenerator("posts", `/posts/all/${user.id}`)
      );
      setPosts(res.data);
    };
    getPosts();
  }, []);
  return (
    <Container>
      <Sidebar />
      <div className="dashboard">
        <DashboardHeader user={user} />
        <Container
          className="hero"
          style={{
            marginTop: 20,
            alignItems: "center",
            marginBottom: window.innerHeight > 649 ? "auto" : 40,
          }}
        >
          {posts.length > 0 ? (
            posts.map((p, i) => (
              <PostCard
                avatar={user.profile.profilePicture}
                firstName={user.firstName}
                lastName={user.lastName}
                title={p.title}
                key={i}
                createdAt={generateDate(p.createdAt)}
                handle={p.handle}
                comments={p.comments.length}
                likes={p.likes.length}
                views={p.views}
              />
            ))
          ) : (
            <p style={{ textAlign: "center" }}>No posts found.</p>
          )}
        </Container>
      </div>
    </Container>
  );
};

function Dashboard({ match }) {
  let user;
  const handle = match.params.handle;
  useEffect(() => {
    (async () => {
      user = await axios.get(urlGenerator("auth", `/profile/get/${handle}`));
      // document.title = `youa.dev - ${capitalize(user.firstName)} ${capitalize(
      //   user.lastName
      // )}`;
      console.log(user);
    })();
  }, []);
  return <Fragment>{/* {!user ? <p>nope</p> : } */}</Fragment>;
}

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: props.match.params.handle,
    };
  }
  render() {
    return <DashboardComponent user={authenticateUser()} />;
  }
}

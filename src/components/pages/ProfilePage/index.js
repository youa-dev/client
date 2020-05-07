import React, { Component } from "react";
import { Container, capitalize } from "@material-ui/core";
import PostCard from "../../imports/PostCard";
import Sidebar from "../../imports/Sidebar";
import DashboardHeader from "../../imports/DashboardHeader";
import urlGenerator from "../../../helpers/urlGenerator";
import authenticateUser from "../../../helpers/authenticateUser";
import axios from "axios";
import "./style.scss";

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

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: this.props.match.params.handle,
      user: null,
      posts: [],
    };
  }
  async componentDidMount() {
    try {
      // User
      const { data: user } = await axios.get(
        urlGenerator("auth", `/profile/get/${this.props.match.params.handle}`)
      );
      this.setState({ user });
      // Posts
      const { data: posts } = await axios.get(
        urlGenerator("posts", `/posts/all/${this.state.user.id}`)
      );
      this.setState({ posts });
      // Update title
      document.title = `youa.dev - ${capitalize(
        this.state.user.firstName
      )} ${capitalize(this.state.user.lastName)}`;
    } catch (error) {
      console.log(error);
      this.props.history.push("/404");
    }
  }
  render() {
    // TODO: Add some sort of loader
    if (!this.state.user) return <p>nope</p>;
    else {
      const { user, posts } = this.state;
      return (
        <Container>
          <Sidebar user={authenticateUser()} history={this.props.history} />
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
    }
  }
}

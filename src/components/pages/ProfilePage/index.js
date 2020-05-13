import React, { Component } from "react";
import { Container, capitalize } from "@material-ui/core";
import PostCard from "../../imports/PostCard";
import Sidebar from "../../imports/Sidebar";
import Header from "../../imports/Header";
import urlGenerator from "../../../helpers/urlGenerator";
import axios from "axios";
import "./style.scss";

const followUser = async (profileID) => {
  const { data: res } = await axios.patch(
    urlGenerator("auth", `/profile/follow/${profileID}`),
    null,
    { headers: { Authorization: localStorage.token } }
  );
  const { token } = res;
  localStorage.token = token;
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
      // Posts
      const { data: posts } = await axios.get(
        urlGenerator("posts", `/posts/all/${user.profile.handle}`)
      );
      this.setState({ user, posts });
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
          <Sidebar history={this.props.history} />
          <div className="profile">
            <Header user={user} followUser={() => followUser(user.id)} />
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
                    key={i}
                    post={p}
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

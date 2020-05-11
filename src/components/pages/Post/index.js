import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Sidebar from "../../imports/Sidebar";
import Header from "../../imports/Header";
import axios from "axios";
import urlGenerator from "../../../helpers/urlGenerator";
import "./style.scss";
import Comments from "../../imports/Comments";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      user: null,
    };
  }
  async componentDidMount() {
    try {
      const { data: post } = await axios.get(
        urlGenerator("posts", `/posts/get/${this.props.match.params.handle}`)
      );
      const { data: user } = await axios.get(
        urlGenerator("auth", `/profile/get/${post.author}`)
      );
      this.setState({ post, user });
    } catch (error) {
      this.props.history.push("/404");
    }
  }
  render() {
    const { post, user } = this.state;
    if (!post && !user) return <p>Waiting</p>;
    // TODO: Implement loader
    else {
      document.title = `youa.dev - ${post.title}`;
      return (
        <Container>
          {/* Load markdown-air CSS stylesheet */}
          <Sidebar history={this.props.history} />
          <div className="post" style={{ marginBottom: 50 }}>
            <Header user={user} post={post} />
            <div
              style={{ marginTop: 50 }}
              className="markdown-body post_body"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
            <Comments comments={post.comments} />
          </div>
        </Container>
      );
    }
  }
}

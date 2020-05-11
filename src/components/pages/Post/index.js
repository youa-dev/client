import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Sidebar from "../../imports/Sidebar";
import Header from "../../imports/Header";
import axios from "axios";
import urlGenerator from "../../../helpers/urlGenerator";
import "./style.scss";

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
      return (
        <Container>
          {/* Load markdown-air CSS stylesheet */}
          <Sidebar history={this.props.history} />
          <div className="post">
            <Header user={user} post={post} />
            <div
              style={{ marginTop: 50 }}
              className="markdown-body post_body"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </div>
        </Container>
      );
    }
  }
}

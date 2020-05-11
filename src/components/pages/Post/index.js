import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Sidebar from "../../imports/Sidebar";
import axios from "axios";
import urlGenerator from "../../../helpers/urlGenerator";
import "./style.scss";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }
  async componentDidMount() {
    try {
      const { data: post } = await axios.get(
        urlGenerator("posts", `/posts/get/${this.props.match.params.handle}`)
      );
      this.setState({ post });
    } catch (error) {
      this.props.history.push("/404");
    }
  }
  render() {
    const { post } = this.state;
    if (!post) return <p>Waiting</p>;
    // TODO: Implement loader
    else {
      return (
        <Container>
          {/* Load markdown-air CSS stylesheet */}
          <Sidebar history={this.props.history} />
          <div className="post">
            <h3 className="post_title" style={{ marginTop: 0 }}>
              {post.title}
            </h3>
            <div
              className="markdown-body post_body"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </div>
        </Container>
      );
    }
  }
}

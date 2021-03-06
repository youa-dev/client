import React, { Component } from "react";
import { Container, TextField } from "@material-ui/core";
import Sidebar from "../../imports/Sidebar";
import Header from "../../imports/Header";
import axios from "axios";
import urlGenerator from "../../../helpers/urlGenerator";
import authenticateUser from "../../../helpers/authenticateUser";
import "./style.scss";
import Comments from "../../imports/Comments";

const sendComment = async ({ keyCode, target }, postID) => {
  try {
    const inputEl = document.getElementById("commentsInput");
    if (target.tagName === "INPUT" && keyCode !== 13) return;

    const body = target.tagName === "INPUT" ? target.value : inputEl.value;
    const { token } = localStorage;

    await axios.post(
      urlGenerator("posts", `/comments/new/${postID}`),
      { body },
      { headers: { Authorization: token } }
    );
  } catch (error) {
    console.error(error);
  }
};

const likeOrDislikePost = async (postID) => {
  try {
    const { token } = localStorage;

    await axios.patch(urlGenerator("posts", `/posts/${postID}/like`), null, {
      headers: { Authorization: token },
    });
  } catch (error) {
    console.error(error);
  }
};

const Controls = ({ postID }) => {
  return (
    <div className="controls shadow">
      <span
        className="controls_like_btn fas fa-heart controls_icon"
        onClick={likeOrDislikePost.bind(null, postID)}
      />
      <TextField
        id="filled-basic commentsInput"
        variant="standard"
        label="Your comment: "
        onKeyDown={(e) => sendComment(e, postID)}
        className="controls_comment_input"
      />
      <span
        className="fas fa-paper-plane controls_comment_btn controls_icon"
        onClick={(e) => sendComment(e, postID)}
      />
    </div>
  );
};

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
          <Sidebar history={this.props.history} />
          <div className="post" style={{ marginBottom: 50 }}>
            <Header user={user} post={post} />
            <div
              style={{ marginTop: 50 }}
              className="markdown-body post_body"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
            {authenticateUser() ? <Controls postID={post._id} /> : false}
            <Comments comments={post.comments} />
          </div>
        </Container>
      );
    }
  }
}

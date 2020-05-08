import React, { Fragment, Component } from "react";
import axios from "axios";
import urlGenerator from "../../../helpers/urlGenerator";
import { Redirect } from "react-router-dom";

// export default function Post({ match }) {
//   const forceUpdate = useForceUpdate();
//   const handle = match.params.handle;
//   const [post, setPost] = useState({});
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     (async () => {
//       try {
//         setPost(await axios.get(urlGenerator("posts", `/posts/get/${handle}`)));
//       } catch (err) {
//         setError(err);
//       } finally {
//         forceUpdate();
//       }
//     })();
//   }, []);
//   return error ? (
//     <Redirect to="/404" />
//   ) : (
//     <Fragment>
//       {post ? (
//         <div className="post">
//           <p className="post_title">{post.title}</p>
//         </div>
//       ) : null}
//     </Fragment>
//   );
// }

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
        <div className="post">
          <h3 className="post_title">{post.title}</h3>
          <div className="post_body">{post.body}</div>
        </div>
      );
    }
  }
}

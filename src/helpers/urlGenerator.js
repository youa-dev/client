const authServiceURL = process.env.REACT_APP_AUTH_SERVICE_URL;
const postsServiceURL = process.env.REACT_APP_POSTS_SERVICE_URL;

const generate = (type, endpoint) =>
  `${type === "auth" ? authServiceURL : postsServiceURL}${endpoint}`;

export default generate;

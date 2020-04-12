import jwt from "jsonwebtoken";

export default () => {
  let res;
  const {
    REACT_APP_SECRET: secret,
    REACT_APP_TOKEN_ISSUER: issuer,
  } = process.env;
  const { token } = localStorage;
  jwt.verify(
    token.replace("Bearer ", ""),
    secret,
    { issuer },
    (err, data) => (res = err ? false : data)
  );
  return res;
};

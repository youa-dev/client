import jwt from "jsonwebtoken";

export default () => {
  const { token } = localStorage;
  const {
    REACT_APP_SECRET: secret,
    REACT_APP_TOKEN_ISSUER: issuer,
  } = process.env;

  let res;

  if (!token) return;

  jwt.verify(
    token.replace("Bearer ", ""),
    secret,
    { issuer },
    (err, data) => (res = err ? false : data)
  );

  return res;
};

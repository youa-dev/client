import React, { useEffect } from "react";
import axios from "axios";
import urlGenerator from "../../../helpers/urlGenerator";

export default function Post({ match, post = null, shouldFetch = true }) {
  const handle = match.params.handle;
  useEffect(() => {
    (async () => {
      if (shouldFetch)
        post = await axios.get(urlGenerator("posts", `/posts/get/${handle}`));
    })();
  }, []);
  return <h1>{handle}</h1>;
}

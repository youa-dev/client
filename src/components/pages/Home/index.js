import React from "react";
import Container from "@material-ui/core/Container";
import "./index.scss";

export default function Home() {
  return (
    <Container>
      <div className="home">
        <h1 className="home_title">youa.dev</h1>
        <h3 className="home_subtitle">A networking hub for developers.</h3>
        <div className="home_svg"></div>
      </div>
    </Container>
  );
}

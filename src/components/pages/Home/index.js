import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./index.scss";

export default function Home() {
  return (
    <Container>
      <div className="home">
        <div className="home_text">
          <div className="home_text--wrapper">
            <div className="home_text--logo"></div>
            <h1 className="home_text--title">youa.dev</h1>
          </div>
          <h3 className="home_text--subtitle">
            A networking hub for developers.
          </h3>
        </div>
        <div className="home_svg"></div>
        <div className="home_cta">
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIosIcon />}
            style={{ marginTop: "15px" }}
          >
            Let's get started
          </Button>
        </div>
      </div>
    </Container>
  );
}
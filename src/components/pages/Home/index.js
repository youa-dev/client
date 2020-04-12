import React, { Fragment } from "react";
import { Container, Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useHistory } from "react-router-dom";
import Navbar from "../../imports/Navbar";
import "./index.scss";

export default function Home() {
  const history = useHistory();
  return (
    <Fragment>
      <Navbar />
      <Container>
        <div className="home hero">
          <div className="home_text">
            <div className="home_text--wrapper">
              <div className="home_text--logo animateLogo"></div>
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
              onClick={() => history.push("/register")}
            >
              Let's get started
            </Button>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

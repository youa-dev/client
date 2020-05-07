import React, { Fragment } from "react";
import { Container, Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import authenticateUser from "../../../helpers/authenticateUser";
import { useHistory, Redirect } from "react-router-dom";
import Navbar from "../../imports/Navbar";
import "./index.scss";

export default function Landing() {
  const history = useHistory();
  return authenticateUser() ? (
    <Redirect to="/dashboard" />
  ) : (
    <Fragment>
      <Navbar />
      <Container className="fullheight">
        <div className="landing hero">
          <div className="landing_text">
            <div className="landing_text--wrapper">
              <div className="landing_text--logo animateLogo"></div>
              <h1 className="landing_text--title">youa.dev</h1>
            </div>
            <h3 className="landing_text--subtitle">
              A networking hub for developers.
            </h3>
          </div>
          <div className="landing_svg"></div>
          <div className="landing_cta">
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

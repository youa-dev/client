import React, { Fragment } from "react";
import { Container } from "@material-ui/core";
import Sidebar from "../../imports/Sidebar";
import { useHistory, Redirect } from "react-router-dom";
import authenticateUser from "../../../helpers/authenticateUser";
import "./style.scss";

export default function Dashboard() {
  const history = useHistory();
  const isAuthenticated = authenticateUser();
  return (
    <Fragment>
      {isAuthenticated ? (
        <Container>
          <Sidebar />
          <div className="dashboard">
            <h1 className="dashboard_title">Dashboard</h1>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/")}
            >
              Go back home
            </span>
          </div>
        </Container>
      ) : (
        <Redirect to="/login" />
      )}
    </Fragment>
  );
}

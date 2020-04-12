import React, { Fragment } from "react";
import { Container } from "@material-ui/core";
import Sidebar from "../../imports/Sidebar";
import { useHistory } from "react-router-dom";
import "./style.scss";

export default function Dashboard() {
  const history = useHistory();
  return (
    <Fragment>
      <Sidebar />
      <Container>
        <div className="dashboard">
          <h1 className="dashboard_title">Dashboard</h1>
          <span style={{ cursor: "pointer" }} onClick={() => history.push("/")}>
            Go back home
          </span>
        </div>
      </Container>
    </Fragment>
  );
}

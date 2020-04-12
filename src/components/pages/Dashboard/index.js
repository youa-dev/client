import React, { Fragment } from "react";
import { Container } from "@material-ui/core";
import Sidebar from "../../imports/Sidebar";
import "./style.scss";

export default function Dashboard() {
  return (
    <Fragment>
      <Sidebar />
      <Container>
        <div className="dashboard">
          <h1 className="dashboard_title">Dashboard</h1>
          <a href="/">Go back home</a>
        </div>
      </Container>
    </Fragment>
  );
}

import React, { Fragment } from "react";
import { Container } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import Sidebar from "../../imports/Sidebar";
import DashboardHeader from "../../imports/DashboardHeader";
import authenticateUser from "../../../helpers/authenticateUser";
import "./style.scss";

const DashboardComponent = ({ user }) => {
  return (
    <Container>
      <Sidebar />
      <div className="dashboard">
        <DashboardHeader user={user} />
      </div>
    </Container>
  );
};

export default function Dashboard() {
  document.title = "youa.dev - Dashboard";
  const isAuthenticated = authenticateUser();
  return (
    <Fragment>
      {!isAuthenticated ? (
        <Redirect to="/login" />
      ) : !isAuthenticated.profile ? (
        <Redirect to="/profile-creation" />
      ) : (
        <DashboardComponent user={isAuthenticated} />
      )}
    </Fragment>
  );
}

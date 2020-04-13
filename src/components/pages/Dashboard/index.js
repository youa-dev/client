import React, { Fragment } from "react";
import { Container } from "@material-ui/core";
import Sidebar from "../../imports/Sidebar";
import { useHistory, Redirect } from "react-router-dom";
import authenticateUser from "../../../helpers/authenticateUser";
import "./style.scss";

const DashboardComponent = ({ user }) => {
  const history = useHistory();
  return (
    <Container>
      <Sidebar />
      <div className="dashboard">
        <h1 className="dashboard_title">Hello, {user.firstName}</h1>
        <span>{!user.profile ? "You do not have a profile." : ""}</span>
        <span style={{ cursor: "pointer" }} onClick={() => history.push("/")}>
          Go back home{" "}
        </span>

        {!user.profile ? (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/profile-creation")}
          >
            {" "}
            Go to profile creation{" "}
          </span>
        ) : (
          false
        )}
      </div>
    </Container>
  );
};

export default function Dashboard() {
  document.title = "youa.dev - Dashboard";
  const isAuthenticated = authenticateUser();
  return (
    <Fragment>
      {isAuthenticated ? (
        <DashboardComponent user={isAuthenticated} />
      ) : !isAuthenticated.profile ? (
        <Redirect to="/profile-creation" />
      ) : (
        <Redirect to="/login" />
      )}
    </Fragment>
  );
}

import React, { Fragment } from "react";
import { Container } from "@material-ui/core";
import { useHistory, Redirect } from "react-router-dom";
import authenticateUser from "../../../helpers/authenticateUser";
import ProfileCreationForm from "../../imports/ProfileCreationForm";
import "./style.scss";

const ProfileCreationComponent = ({ user }) => {
  const history = useHistory();
  return (
    <Container>
      <div className="profile_creation hero">
        <h1 className="profile_creation_title">
          Alright {user.firstName}. Time to create your profile!
        </h1>
        <span>{!user.profile ? "You do not have a profile." : ""}</span>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => history.push("/dashboard")}
        >
          Go back to the dashboard
        </span>
        <ProfileCreationForm />
      </div>
    </Container>
  );
};

export default function ProfileCreation() {
  document.title = "youa.dev - Profile Creation";
  const isAuthenticated = authenticateUser();
  return (
    <Fragment>
      {!isAuthenticated ? ( // If the user is not authenticated, redirect the user back to /login
        <Redirect to="/login" />
      ) : isAuthenticated.profile ? ( // Else if the user is authenticated, but it has a profile, go to the dashboard.
        <Redirect to="/dashboard" />
      ) : (
        <ProfileCreationComponent user={isAuthenticated} /> // Else render out the form
      )}
    </Fragment>
  );
}

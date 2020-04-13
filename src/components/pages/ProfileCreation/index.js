import React, { Fragment } from "react";
import { Container } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import authenticateUser from "../../../helpers/authenticateUser";
import ProfileCreationForm from "../../imports/ProfileCreationForm";
import "./style.scss";

const ProfileCreationComponent = () => {
  return (
    <Container>
      <div className="profile_creation hero">
        <div className="profile_creation_text">
          <h1 className="profile_creation_title">
            Time to create your profile!
          </h1>
          <h3 className="profile_creation_subtitle">
            All of the fields are optional.
          </h3>
          <h3 className="profile_creation_subtitle">
            If you do not want to provide any details, leave the fields blank.
          </h3>
          <h3 className="profile_creation_subtitle">
            Otherwise, please provide valid URLs to whichever field you want to
            be filled. The biography field is an exception to this.
          </h3>
        </div>
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

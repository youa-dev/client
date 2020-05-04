import React, { Fragment } from "react";
import { Container } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import authenticateUser from "../../../helpers/authenticateUser";
import ProfileCreationForm from "../../imports/ProfileCreationForm";
import useForceUpdate from "use-force-update";
import ErrorOutput from "../../imports/ErrorOutput";
import "./style.scss";

let errors = [];

const ProfileCreationComponent = ({ name }) => {
  const forceUpdate = useForceUpdate();
  document.addEventListener("forceUpdate", (e) => {
    errors = Object.keys(e.detail).map((k) => e.detail[k]);
    forceUpdate();
  });
  return (
    <Container>
      <div className="profile_creation hero">
        <div className="profile_creation_text">
          <h1 className="profile_creation_title">
            Time to create your profile,{" "}
            <span style={{ textTransform: "capitalize" }}>{name}</span>!
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
        <ErrorOutput columns={1} errors={errors} />
      </div>
    </Container>
  );
};

export default function ProfileCreation() {
  document.title = "youa.dev - Profile Creation";
  const { firstName, profile } = authenticateUser();
  return (
    <Fragment>
      {profile ? (
        <Redirect to="/dashboard" />
      ) : (
        <ProfileCreationComponent name={firstName} />
      )}
    </Fragment>
  );
}

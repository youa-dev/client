import React from "react";
import { Route, Redirect } from "react-router-dom";
import authenticateUser from "../../../helpers/authenticateUser";

export default function ProtectedRoute({ path, component: Component }) {
  return (
    <Route
      strict
      exact
      path={path}
      render={() =>
        authenticateUser() ? <Component /> : <Redirect to="/login" />
      }
    />
  );
}

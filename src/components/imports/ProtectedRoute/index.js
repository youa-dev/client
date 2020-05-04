import React from "react";
import { Route, Redirect } from "react-router-dom";
import authenticateUser from "../../../helpers/authenticateUser";

export default function ProtectedRoute({ path, component: Component }) {
  const isAuthenticated = authenticateUser();
  return (
    <Route
      strict
      exact
      path={path}
      render={() =>
        isAuthenticated ? <Component /> : <Redirect to="/login" />
      }
    />
  );
}

import React from "react";
import Landing from "./components/pages/Landing";
import Auth from "./components/pages/Auth";
import ProfilePage from "./components/pages/ProfilePage";
import ProfileCreation from "./components/pages/ProfileCreation";
import Post from "./components/pages/Post";
import ProtectedRoute from "./components/imports/ProtectedRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route strict exact path="/" component={Landing} />
        <Route strict exact path="/login" component={Auth} />
        <Route strict exact path="/register" component={Auth} />
        <Route strict exact path="/u/:handle" component={ProfilePage} />
        <Route strict exact path="/post/:handle" component={Post} />
        <ProtectedRoute path="/profile-creation" component={ProfileCreation} />
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import Landing from "./components/pages/Landing";
import Auth from "./components/pages/Auth";
import Dashboard from "./components/pages/Dashboard";
import ProfileCreation from "./components/pages/ProfileCreation";
import ProtectedRoute from "./components/imports/ProtectedRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route strict exact path="/" component={Landing} />
        <Route strict exact path="/login" component={Auth} />
        <Route strict exact path="/register" component={Auth} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/profile-creation" component={ProfileCreation} />
      </Router>
    </div>
  );
}

export default App;

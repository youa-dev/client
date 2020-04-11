import React from "react";
import Home from "./components/pages/Home";
import Auth from "./components/pages/Auth";
import Dashboard from "./components/pages/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route strict exact path="/" component={Home} />
        <Route strict exact path="/login" component={Auth} />
        <Route strict exact path="/register" component={Auth} />
        <Route strict exact path="/dashboard" component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;

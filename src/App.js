import React from "react";
import Navbar from "./components/imports/Navbar";
import Home from "./components/pages/Home";
import Auth from "./components/pages/Auth";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Route strict exact path="/" component={Home} />
        <Route strict exact path="/login" component={Auth} />
        <Route strict exact path="/register" component={Auth} />
      </Router>
    </div>
  );
}

export default App;

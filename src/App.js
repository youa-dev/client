import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>{process.env.REACT_APP_AUTH_SERVICE_URL}</h1>
      <h1>{process.env.REACT_APP_POSTS_SERVICE_URL}</h1>
    </div>
  );
}

export default App;

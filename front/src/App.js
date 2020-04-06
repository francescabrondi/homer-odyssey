import React from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

import "./scss/styles.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/auth/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;

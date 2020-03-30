import React from "react";
import { Switch, Route } from "react-router-dom";
import Input from "./components/Input";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/register" component={Input} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;

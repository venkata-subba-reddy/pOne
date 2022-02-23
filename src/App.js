import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import AppBar_menu from "./views/app_menu_bar/AppBar_menu";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/dashboard" component={AppBar_menu}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

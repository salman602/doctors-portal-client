import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Appointment from "./Pages/Appointment/Appointment/Appointment";

import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";



function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/appointment">
            <Appointment></Appointment>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

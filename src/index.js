import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

// core components
import Admin from "layouts/Admin.jsx";
import RTL from "layouts/RTL.jsx";

import "assets/css/material-dashboard-react.css?v=1.6.0";
// import Login from "./layouts/Login";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Homepage from "./components/layout/Homepage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
const hist = createBrowserHistory();

var full = window.location.host
//window.location.host is subdomain.domain.com
var parts = full.split('.')
var sub = parts[0]
var domain = parts[1]
var type = parts[2]
ReactDOM.render(
  <Provider store={store}>
        <Router history={hist}>
          <div className="App">
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/admin" component={Admin} />
            </Switch>
          </div>
        </Router>
      </Provider>
  ,
  document.getElementById("root")
);

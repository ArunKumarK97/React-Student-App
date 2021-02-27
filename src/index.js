import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import "./assets/css/login.css";

import routes from "./routes";
import AppRoute from 'components/AppRoute';
import { AuthProvider } from "Context/Context";
import AdminLayout from "layouts/Admin";

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={AdminLayout} />
        {routes.map((route) => (
          <AppRoute
            key={route.path}
            path={route.path}
            component={route.component}
            isPrivate={route.isPrivate}
          />
        ))}
      </Switch>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);

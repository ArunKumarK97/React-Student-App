
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NotificationSystem from "react-notification-system";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Sidebar from "components/Sidebar/Sidebar";
import { useAuthState } from 'Context/Context';

import { style } from "variables/Variables.jsx";
import routes from "routes.js";

function Admin(props) {
  const userDetails = useAuthState();

  useEffect(() => {
    if (!Boolean(userDetails.token)) {
      props.history.push("/");
    }
  });

  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.isPrivate) {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <div className="wrapper">
      <NotificationSystem style={style} />
      <Sidebar {...props} routes={routes} />
      <div id="main-panel" className="main-panel">
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>{getRoutes(routes)}</Switch>
      </div>
    </div>
  );
}

export default Admin;

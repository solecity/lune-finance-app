// base
import React, { Suspense, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

// custom components
import { LinearProgress } from "shared/components";

// config
import { routes } from "config/routes";

const renderRoutes = (routes) =>
  routes ? (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        {routes.map((route, i) => {
          const Layout = route.layout || Fragment;
          const Component = route.component;

          return (
            <Route
              key={i}
              path={route.path}
              exact
              render={(props) => (
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Component {...props} />
                  )}
                </Layout>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  ) : null;

const Routes = () => {
  return renderRoutes(routes);
};

export default Routes;

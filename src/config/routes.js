// base
import { lazy } from "react";

// layouts
import Main from "shared/layouts/main";

// layouts

const routes = [
  {
    exact: true,
    path: "/signin",
    component: lazy(() => import("views/auth/signIn/signIn"))
  },
  {
    layout: Main,
    routes: [
      {
        exact: true,
        path: "/",
        component: lazy(() => import("views/overview/overview"))
      },
      {
        exact: true,
        path: "/overview",
        component: lazy(() => import("views/overview/overview"))
      }
    ]
  }
];

export { routes };
